using BusinessLayer.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;
using System.ComponentModel.DataAnnotations;

namespace WebRazor.Pages
{
    [Breadcrumb("ViewData.Review", FromPage = typeof(CreateModel))]
    public class ReviewModel : PageModel
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
        public void OnGet()
        {
            if (TempData["txtCOURT"] != null)
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
            }          
        }

        public IActionResult OnPost(CASEntityCreate createItem) 
        {
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

            TempData["sectionId"] = Request.Query["sectionId"].FirstOrDefault();
            return RedirectToPage("Create", "Load");
        }
    }
}
