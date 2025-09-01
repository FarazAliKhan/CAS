using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Breadcrumb("ViewData.Report", FromPage = typeof(SelectModel))]
    public class ReportModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
