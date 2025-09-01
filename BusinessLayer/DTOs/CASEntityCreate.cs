using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.DTOs
{
    public class CASEntityCreate
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public DateTime dob { get; set; }
    }
}
