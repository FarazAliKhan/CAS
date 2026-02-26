using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Authorize]
    [Breadcrumb("ViewData.Report2", FromPage = typeof(SelectModel))]
    public class Report2Model : PageModel
    {
        public void OnGet()
        {
        }
    }
}
