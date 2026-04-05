using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Authorize]
    [Breadcrumb("ViewData.Report2", FromPage = typeof(SelectModel))]
    public class Report2Model : PageModel
    {
        public IConfiguration _configuration { get; set; }
        public string EmbedUrl { get; set; }
        public string EmbedToken { get; set; }
        public string ReportId { get; set; }

        public Report2Model(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public async Task OnGet()
        {
            var report2Section = _configuration.GetSection("Report2");

            // Get individual values
            EmbedUrl = report2Section["EmbedUrl"];
            EmbedToken = report2Section["EmbedToken"];
            ReportId = report2Section["ReportId"];
        }

    }
}
