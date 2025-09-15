using BusinessLayer.DTOs;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Localization;
using Newtonsoft.Json;
using SmartBreadcrumbs.Attributes;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
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
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameRequired")]
        [StringLength(100, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameTwoChars")]
        public int txtCOURT { get; set; }
        [BindProperty]
        public DateTime dtFROM { get; set; }
        [BindProperty]
        public DateTime dtTO { get; set; }
        [BindProperty]
        public int intREPORTINGYEAR { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameTwoChars")]
        public int txtFIELD1_1_1 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameTwoChars")]
        public int txtFIELD1_1_2 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public int txtFIELD1_1_3 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public int txtFIELD1_1_4 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public int txtFIELD1_1_5 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public int txtFIELD1_1_6 { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public int txtFIELD1_1_7 { get; set; }

        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public string txtFIED_1_Comments { get; set; }




        //public CreateModel() { 
        //}

        public void OnGet()
        {
        }

        public IActionResult OnPost() {
            if (!ModelState.IsValid)
                return Page();
         //   var createItem = new CASEntityCreate()
            //{
            //    //txtFIELD1_1_1 = txtFIELD1_1_1,
            //    //LastName = lastName,
            //    //dob = dob
            //};

            //TempData["firstName"] = createItem.FirstName;
            //TempData["lastName"] = createItem.LastName;
            //TempData["dob"] = createItem.dob;
            return RedirectToPage("Review");
        }

        public void OnGetLoad()
        {
            //firstName = (string)TempData["firstName"];
            //lastName = (string)TempData["lastName"];
            //dob = (DateTime?)TempData["dob"];
        }
    }
}
