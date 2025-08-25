using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System.Net.Http;
using System.Security.Authentication;
using WebRazor.Models;

namespace WebRazor.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public List<CasModel>? casModels = new();

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            //var EndPoint = "http://localhost:5282/api";
            //var httpClientHandler = new HttpClientHandler();
            //httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, sslPolicyErrors) =>
            //{
            //    return true;
            //};
            //HttpClient httpClient = new HttpClient(httpClientHandler) { BaseAddress = new Uri(EndPoint) };

            //using (httpClient)
            //{
            //    using (HttpResponseMessage response = httpClient.GetAsync("http://localhost:5282/api/cas/list").Result)
            //    {
            //        if (response.IsSuccessStatusCode)
            //        {
            //            string apiResponse = response.Content.ReadAsStringAsync().Result;
            //            casModels = JsonConvert.DeserializeObject<List<CasModel>>(apiResponse);
            //        }
            //    }
            //}
        }

        public IActionResult OnGetDelete([FromQuery] int id)
        {
            var EndPoint = "http://localhost:5282/api";
            var httpClientHandler = new HttpClientHandler();
            httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, sslPolicyErrors) =>
            {
                return true;
            };
            HttpClient httpClient = new HttpClient(httpClientHandler) { BaseAddress = new Uri(EndPoint) };

            using (httpClient)
            {
                using (HttpResponseMessage response = httpClient.DeleteAsync("http://localhost:5282/api/cas/delete?Id=" + id).Result)
                {
                    //if (response.IsSuccessStatusCode)
                    //{
                    //    string apiResponse = response.Content.ReadAsStringAsync().Result;
                    //    var casModel = JsonConvert.DeserializeObject<CasModel>(apiResponse);
                    //    //firstName = casModel.FirstName;
                    //    //lastName = casModel.LastName;
                    //    //dob = casModel.DateOfBirth;
                    //}
                }
            }

            return Redirect("./Index");
        }
    }
}
