using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using SmartBreadcrumbs.Attributes;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text;
using WebRazor.Models;

namespace WebRazor.Pages
{
    [Breadcrumb("Create", FromPage = typeof(SelectModel))]
    public class CreateModel : PageModel
    {
        [BindProperty]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "First Name should be atleast 2 characters long")]
        public string firstName { get; set; }
        [BindProperty]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Last Name should be atleast 2 characters long")]
        public string lastName { get; set; }
        [BindProperty]
        public DateTime dob { get; set; }

        public CreateModel() { }

        public void OnPost() {
            if (!ModelState.IsValid)
                return;
        }
    }
}
