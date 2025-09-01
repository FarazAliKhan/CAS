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
        public DateTime dob { get; set; }
        public void OnGet(CASEntityCreate createItem)
        {
           firstName = createItem.FirstName;
           lastName = createItem.LastName;
           dob = createItem.dob;
        }

        public void OnPost(CASEntityCreate createItem) 
        {
            firstName = createItem.FirstName;
            lastName = createItem.LastName;
            dob = createItem.dob;
        }
    }
}
