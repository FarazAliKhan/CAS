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
        public string EmbedUrl { get; set; }
        public string EmbedToken { get; set; }
        public string ReportId { get; set; }

        public async Task OnGet()
        {
            EmbedUrl = "https://app.powerbi.com/view?r=eyJrIjoiMmRiNDgxZDUtNDc0NS00OTQ3LTliYTktN2Y5MTk4M2UwNGRjIiwidCI6IjY0OTM3ZDA0LWI4MDYtNDhiMy04N2U3LWIzNGQyYzBkYWVjMiJ9";
            EmbedToken = "eyJrIjoiMmRiNDgxZDUtNDc0NS00OTQ3LTliYTktN2Y5MTk4M2UwNGRjIiwidCI6IjY0OTM3ZDA0LWI4MDYtNDhiMy04N2U3LWIzNGQyYzBkYWVjMiJ9";
            ReportId = "072023c3-4e04-44ae-abf4-507d225315d2";
        }

    }
}
