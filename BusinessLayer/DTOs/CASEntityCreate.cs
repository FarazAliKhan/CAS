using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Resources;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.DTOs
{
    public class CASEntityCreate
    {
        public string? txtCOURT { get; set; }
        public DateTime? dtFROM { get; set; } = DateTime.Now;
        public DateTime? dtTO { get; set; } = DateTime.Now;
        public string? intREPORTINGYEAR { get; set; }
        public int? txtFIELD1_1_1 { get; set; }
        public int? txtFIELD1_1_2 { get; set; }
        public int? txtFIELD1_1_3 { get; set; }
        public int? txtFIELD1_1_4 { get; set; }
        public int? txtFIELD1_1_5 { get; set; }
        public int? txtFIELD1_1_6 { get; set; }
        public int? txtFIELD1_1_7 { get; set; }
        public string? txtFIED_1_Comments { get; set; }

        public int? txtFIELD7_1_1 { get; set; }
        public int? txtFIELD7_1_2 { get; set; }
        public int? txtFIELD7_1_3 { get; set; }
        public string? txtFIED_7_Comments { get; set; }

        public int? txtFIELD8_1 { get; set; }
        public int? txtFIELD8_2 { get; set; }
        public int? txtFIELD8_3 { get; set; }
        public string? txtFIED_8_Comments { get; set; }

        public int? txtFIELD9_1 { get; set; }
        public int? txtFIELD9_2 { get; set; }
        public string? txtFIED_9_Comments { get; set; }

        public int? txtFIELD10_1 { get; set; }
        public string? txtFIED_10_Comments { get; set; }

        public int? txtFIELD11_1 { get; set; }
        public int? txtFIELD11_2 { get; set; }
        public string? txtFIED_11_Comments { get; set; }
    }
}
