using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;
using WebRazor.Models;

namespace WebRazor.Pages
{
    [Breadcrumb("ViewData.Home")]
    public class SelectModel : PageModel
    {
        [BindProperty]
        public string? emailAddress { get; set; }

        public IActionResult OnPost()
        {
            TempData["emailAddress"] = emailAddress;
            return RedirectToPage("Create");
        }
    }
}
