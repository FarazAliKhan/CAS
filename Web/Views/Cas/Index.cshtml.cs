using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Web.Models;

namespace Web.Views.Cas
{
    public class IndexModel : PageModel
    {
        public List<CasModel>? casModels = new();

        public IndexModel() { }

        public void OnGet()
        {
            using (var httpClient = new HttpClient())
            {
                //httpClient.DefaultRequestHeaders.Add("Key", "Value");

                using (HttpResponseMessage response = httpClient.GetAsync("https://localhost:5282/api/cas/list").Result)
                {
                    if (response.IsSuccessStatusCode)
                    {
                        string apiResponse = response.Content.ReadAsStringAsync().Result;
                        casModels = JsonConvert.DeserializeObject<List<CasModel>>(apiResponse);
                    }

                }
            }
        }
    }
}
