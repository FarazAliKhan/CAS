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
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "FirstNameTwoChars")]
        public string firstName { get; set; }
        [BindProperty]
        [Required(ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameRequired")]
        [StringLength(50, MinimumLength = 2, ErrorMessageResourceType = typeof(Resources.Pages.CreateModel), ErrorMessageResourceName = "LastNameTwoChars")]
        public string lastName { get; set; }
        [BindProperty]
        public DateTime? dob { get; set; }
        public void OnGet()
        {
            if (TempData["firstName"] != null)
            {
                firstName = (string)TempData["firstName"];
                lastName = (string)TempData["lastName"];
                dob = (DateTime?)TempData["dob"];
            }          
        }

        public IActionResult OnPost(CASEntityCreate createItem) 
        {
            //TempData["firstName"] = createItem.FirstName;
            //TempData["lastName"] = createItem.LastName;
            //TempData["dob"] = createItem.dob;

            return RedirectToPage("Create", "Load");
        }
    }
}
