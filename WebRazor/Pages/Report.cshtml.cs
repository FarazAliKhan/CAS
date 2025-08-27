using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Breadcrumb("Report")]
    public class ReportModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
