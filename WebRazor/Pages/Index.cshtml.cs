using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;
using WebRazor.Models;

namespace WebRazor.Pages
{
    [DefaultBreadcrumb("ViewData.Home")]
    public class IndexModel : PageModel
    {
    }
}
