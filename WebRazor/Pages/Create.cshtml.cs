using BusinessLayer.DTOs;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SmartBreadcrumbs.Attributes;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Runtime.Versioning;
using System.Security.AccessControl;
using System.Text;
using WebRazor.Models;


namespace WebRazor.Pages
{
    [Breadcrumb("ViewData.Create", FromPage = typeof(SelectModel))]
    public class CreateModel : PageModel
    {
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "CourtRequired")]
        public string txtCOURT { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FromDateRequired")]
        public DateTime? dtFROM { get; set; } = DateTime.Now;
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "ToDateRequired")]
        public DateTime? dtTO { get; set; } = DateTime.Now;
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "ReportingYearRequired")]
        public string intREPORTINGYEAR { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_1 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_2 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_3 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_4 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_5 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_6 { get; set; }
        [BindProperty]
        public int? txtFIELD1_1_7 { get; set; }

        [BindProperty]
        public string? txtFIED_1_Comments { get; set; }

        [BindProperty]
        public int? txtFIELD7_1_1 { get; set; }
        [BindProperty]
        public int? txtFIELD7_1_2 { get; set; }
        [BindProperty]
        public int? txtFIELD7_1_3 { get; set; }
        [BindProperty]
        public string? txtFIED_7_Comments { get; set; }

        [BindProperty]
        public int? txtFIELD8_1 { get; set; }
        [BindProperty]
        public int? txtFIELD8_2 { get; set; }
        [BindProperty]
        public int? txtFIELD8_3 { get; set; }
        [BindProperty]
        public string? txtFIED_8_Comments { get; set; }

        [BindProperty]
        public int? txtFIELD9_1 { get; set; }
        [BindProperty]
        public int? txtFIELD9_2 { get; set; }
        [BindProperty]
        public string? txtFIED_9_Comments { get; set; }

        [BindProperty]
        public int? txtFIELD10_1 { get; set; }
        [BindProperty]
        public string? txtFIED_10_Comments { get; set; }

        [BindProperty]
        public int? txtFIELD11_1 { get; set; }
        [BindProperty]
        public int? txtFIELD11_2 { get; set; }
        [BindProperty]
        public string? txtFIED_11_Comments { get; set; }
        [BindProperty]
        public string? sectId { get; set; }

        private long maxFileSize = 1024;// * 10;
        [BindProperty]
        public IFormFile? Upload { get; set; }

        //public CreateModel() { 
        //}

        public void OnGet()
        {
        }

        public IActionResult OnPost() {
            if (Upload != null) { 
                if(Upload.Length > maxFileSize)
                {
                    ModelState.Clear();
                    ModelState.AddModelError("FileUpload", "File size should be less than 10 MB");
                    return Page();
                }
            }

            if (!ModelState.IsValid)
                return Page();
            var createItem = new CASEntityCreate()
            {
                txtCOURT = txtCOURT,
                dtFROM = dtFROM,
                dtTO = dtTO,
                intREPORTINGYEAR = intREPORTINGYEAR,
                txtFIELD1_1_1 = txtFIELD1_1_1,
                txtFIELD1_1_2 = txtFIELD1_1_2,
                txtFIELD1_1_3 = txtFIELD1_1_3,
                txtFIELD1_1_4 = txtFIELD1_1_4,
                txtFIELD1_1_5 = txtFIELD1_1_5,
                txtFIELD1_1_6 = txtFIELD1_1_6,
                txtFIELD1_1_7 = txtFIELD1_1_7,
                txtFIED_1_Comments = txtFIED_1_Comments,

                txtFIELD7_1_1 = txtFIELD7_1_1,
                txtFIELD7_1_2 = txtFIELD7_1_2,
                txtFIELD7_1_3 = txtFIELD7_1_3,
                txtFIED_7_Comments = txtFIED_7_Comments,

                txtFIELD8_1 = txtFIELD8_1,
                txtFIELD8_2 = txtFIELD8_2,
                txtFIELD8_3 = txtFIELD8_3,
                txtFIED_8_Comments = txtFIED_8_Comments,

                txtFIELD9_1 = txtFIELD9_1,
                txtFIELD9_2 = txtFIELD9_2,
                txtFIED_9_Comments = txtFIED_9_Comments,

                txtFIELD10_1 = txtFIELD10_1,
                txtFIED_10_Comments = txtFIED_10_Comments,

                txtFIELD11_1 = txtFIELD11_1,
                txtFIELD11_2 = txtFIELD11_2,
                txtFIED_11_Comments = txtFIED_11_Comments,
            };

            TempData["txtCOURT"] = createItem.txtCOURT;
            TempData["dtFROM"] = createItem.dtFROM;
            TempData["dtTO"] = createItem.dtTO;
            TempData["intREPORTINGYEAR"] = createItem.intREPORTINGYEAR;

            TempData["txtFIELD1_1_1"] = createItem.txtFIELD1_1_1;
            TempData["txtFIELD1_1_2"] = createItem.txtFIELD1_1_2;
            TempData["txtFIELD1_1_3"] = createItem.txtFIELD1_1_3;
            TempData["txtFIELD1_1_4"] = createItem.txtFIELD1_1_4;
            TempData["txtFIELD1_1_5"] = createItem.txtFIELD1_1_5;
            TempData["txtFIELD1_1_6"] = createItem.txtFIELD1_1_6;
            TempData["txtFIELD1_1_7"] = createItem.txtFIELD1_1_7;
            TempData["txtFIED_1_Comments"] = createItem.txtFIED_1_Comments;

            TempData["txtFIELD7_1_1"] = createItem.txtFIELD7_1_1;
            TempData["txtFIELD7_1_2"] = createItem.txtFIELD7_1_2;
            TempData["txtFIELD7_1_3"] = createItem.txtFIELD7_1_3;
            TempData["txtFIED_7_Comments"] = createItem.txtFIED_7_Comments;

            TempData["txtFIELD8_1"] = createItem.txtFIELD8_1;
            TempData["txtFIELD8_2"] = createItem.txtFIELD8_2;
            TempData["txtFIELD8_3"] = createItem.txtFIELD8_3;
            TempData["txtFIED_8_Comments"] = createItem.txtFIED_8_Comments;

            TempData["txtFIELD9_1"] = createItem.txtFIELD9_1;
            TempData["txtFIELD9_2"] = createItem.txtFIELD9_2;
            TempData["txtFIED_9_Comments"] = createItem.txtFIED_9_Comments;

            TempData["txtFIELD10_1"] = createItem.txtFIELD10_1;
            TempData["txtFIED_10_Comments"] = createItem.txtFIED_10_Comments;

            TempData["txtFIELD11_1"] = createItem.txtFIELD11_1;
            TempData["txtFIELD11_2"] = createItem.txtFIELD11_2;
            TempData["txtFIED_11_Comments"] = createItem.txtFIED_11_Comments;

            return RedirectToPage("Review");
        }

        public void OnGetLoad()
        {
            txtCOURT = (string)TempData["txtCOURT"];
            dtFROM = (DateTime?)TempData["dtFROM"];
            dtTO = (DateTime?)TempData["dtTO"];
            intREPORTINGYEAR = (string)TempData["intREPORTINGYEAR"];

            txtFIELD1_1_1 = (int?)TempData["txtFIELD1_1_1"];
            txtFIELD1_1_2 = (int?)TempData["txtFIELD1_1_2"];
            txtFIELD1_1_3 = (int?)TempData["txtFIELD1_1_3"];
            txtFIELD1_1_4 = (int?)TempData["txtFIELD1_1_4"];
            txtFIELD1_1_5 = (int?)TempData["txtFIELD1_1_5"];
            txtFIELD1_1_6 = (int?)TempData["txtFIELD1_1_6"];
            txtFIELD1_1_7 = (int?)TempData["txtFIELD1_1_7"];
            txtFIED_1_Comments = (string?)TempData["txtFIED_1_Comments"];

            txtFIELD7_1_1 = (int?)TempData["txtFIELD7_1_1"];
            txtFIELD7_1_2 = (int?)TempData["txtFIELD7_1_2"];
            txtFIELD7_1_3 = (int?)TempData["txtFIELD7_1_3"];
            txtFIED_7_Comments = (string?)TempData["txtFIED_7_Comments"];

            txtFIELD8_1 = (int?)TempData["txtFIELD8_1"];
            txtFIELD8_2 = (int?)TempData["txtFIELD8_2"];
            txtFIELD8_3 = (int?)TempData["txtFIELD8_3"];
            txtFIED_8_Comments = (string?)TempData["txtFIED_8_Comments"];

            txtFIELD9_1 = (int?)TempData["txtFIELD9_1"];
            txtFIELD9_2 = (int?)TempData["txtFIELD9_2"];
            txtFIED_9_Comments = (string?)TempData["txtFIED_9_Comments"];

            txtFIELD10_1 = (int?)TempData["txtFIELD10_1"];
            txtFIED_10_Comments = (string?)TempData["txtFIED_10_Comments"];

            txtFIELD11_1 = (int?)TempData["txtFIELD11_1"];
            txtFIELD11_2 = (int?)TempData["txtFIELD11_2"];
            txtFIED_11_Comments = (string?)TempData["txtFIED_11_Comments"];

            sectId = (string?)TempData["sectionId"];
        }

        public IActionResult LoadFiles(InputFileChangeEventArgs e)
        {
            try
            {
                IBrowserFile file = e.File;
                if (file != null) { 
                    if(file?.Size > maxFileSize)
                    {

                        return Page();
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return Page();
        }
    }
}
