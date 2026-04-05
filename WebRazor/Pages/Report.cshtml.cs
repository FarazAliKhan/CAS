using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;
using Microsoft.PowerBI.Api;
using Microsoft.PowerBI.Api.Models;
using Microsoft.Rest;
using Microsoft.Identity.Client;
using System.Globalization;


namespace WebRazor.Pages
{
    public class ReportModel : PageModel
    {
        public IConfiguration _configuration;

        public string EmbedUrl { get; set; }
        public string EmbedToken { get; set; }
        public string ReportId { get; set; }

        public ReportModel(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task OnGet()
        {
            try
            {
                var token = await GetAccessToken();
                var credentials = new TokenCredentials(token, "Bearer");
                var client = new PowerBIClient(token, new Uri("https://api.powerbi.com")); 
                var reportId = Guid.Parse(_configuration["Report1En:ReportId"]);

                var report = await client.Reports.GetReportAsync(reportId);

                EmbedUrl = report.Value.EmbedUrl;                               
                EmbedToken = token; // await GetEmbedTokenAsync(token, reportId);
                ReportId = reportId.ToString();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Power BI embed error: " + ex.Message);
                throw;
            }
        }

        private async Task<string> GetAccessToken()
        {
            var tenantId = _configuration["AzureAd:TenantId"];
            var clientId = _configuration["AzureAd:ClientId"];
            var secret = _configuration["AzureAd:ClientSecret"];
            var authority = $"https://login.microsoftonline.com/{tenantId}";

            var app = ConfidentialClientApplicationBuilder
                .Create(clientId)
                .WithClientSecret(secret)
                .WithAuthority(authority)
                .Build();

            var result = await app.AcquireTokenForClient(
                new[] { "https://analysis.windows.net/powerbi/api/.default" }
            ).ExecuteAsync();

            return result.AccessToken;
        }
    }
}