using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SmartBreadcrumbs.Attributes;

namespace WebRazor.Pages
{
    [Breadcrumb("Review", FromPage = typeof(CreateModel))]
    public class ReviewModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
