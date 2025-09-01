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
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameTwoChars")]
        public string firstName { get; set; }
        [BindProperty]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "LastNameTwoChars")]
        public string lastName { get; set; }
        [BindProperty]
        public DateTime dob { get; set; }

        public CreateModel() { 
        }

        public IActionResult OnPost() {
            if (!ModelState.IsValid)
                return Page();
            return RedirectToPage("Review");
        }
    }
}
