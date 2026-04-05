using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Authorize]
    [Breadcrumb("ViewData.Report", FromPage = typeof(SelectModel))]
    public class ReportModel : PageModel
    {
        public IConfiguration _configuration {  get; set; }
        public string EmbedUrl { get; set; }
        public string EmbedToken { get; set; }
        public string ReportId { get; set; }

        public ReportModel(IConfiguration configuration) {
            this._configuration = configuration;
        }

        public async Task OnGet()
        {
            var report1Section = _configuration.GetSection("Report1");

            // Get individual values
            string EmbedUrl = report1Section["EmbedUrl"];
            string EmbedToken = report1Section["EmbedToken"];
            string ReportId = report1Section["ReportId"];
        }
    }
}
