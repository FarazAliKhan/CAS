using BusinessLayer.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System.Text;
using WebRazor.Models;

namespace WebRazor.Pages
{
    public class FinalMessageModel : PageModel
    {
        [BindProperty]
        public string? reqJson { get; set; }
        [BindProperty]
        public string? resJson { get; set; }
        public void OnGet()
        {
            reqJson = (string?)TempData["reqJson"];
            resJson = (string?)TempData["resJson"];
        }

        public IActionResult OnPost()
        {
            reqJson = (string?)TempData["reqJson"];
            resJson = (string?)TempData["resJson"];
            return Page();
        }
    }
}
