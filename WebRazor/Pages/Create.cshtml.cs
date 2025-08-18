using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using System;
using System.Text;
using WebRazor.Models;

namespace WebRazor.Pages
{
    public class CreateModel : PageModel
    {
        [BindProperty]
        public string firstName { get; set; }
        [BindProperty]
        public string lastName { get; set; }
        [BindProperty]
        public DateTime dob { get; set; }
        [BindProperty]
        public int Id { get; set; }

        public CreateModel() { }
        public void OnGet()
        {
        }

        public IActionResult OnPost([FromForm] CasModel createObject) {
            
            var json = JsonConvert.SerializeObject(createObject);

            var content = new StringContent(json, UnicodeEncoding.UTF8, "application/json");

            var EndPoint = "http://localhost:5282/api";
            var httpClientHandler = new HttpClientHandler();
            httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, sslPolicyErrors) =>
            {
                return true;
            };
            HttpClient httpClient = new HttpClient(httpClientHandler) { BaseAddress = new Uri(EndPoint) };

            using (httpClient)
            {

                using (HttpResponseMessage response = httpClient.PostAsync("http://localhost:5282/api/cas/create", content).Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        string apiResponse = response.Content.ReadAsStringAsync().Result;
                        var casModel = JsonConvert.DeserializeObject<CasModel>(apiResponse);
                        //firstName = casModel.FirstName;
                        //lastName = casModel.LastName;
                        //dob = casModel.DateOfBirth;
                        //Id = casModel.Id;
                    }
                }

                //var result = httpClient.PutAsync("http://localhost:5282/api/cas/update", content).Result;
                //string resultContent = result.Content.ReadAsStringAsync().Result;   
                //Console.WriteLine(resultContent);
            }

            return Redirect("./Index");
        }
    }
}
