using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System;
using System.Text;
using WebRazor.Models;

namespace WebRazor.Pages
{
    public class CreateModel : PageModel
    {
        [BindProperty]
        public string firstName { get; set; }
        [BindProperty]
        public string lastName { get; set; }
        [BindProperty]
        public DateTime dob { get; set; }
        [BindProperty]
        public int Id { get; set; }

        public CreateModel() { }
        public void OnGet()
        {
        }
    }
}
