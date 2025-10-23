﻿using System;
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


        
        public int? txtFIELD2_1_1 { get; set; }
        
        public int? txtFIELD2_1_2 { get; set; }
        
        public int? txtFIELD2_2_1_1 { get; set; }
        
        public int? txtFIELD2_2_1_2 { get; set; }
        
        public int? txtFIELD2_2_1_3 { get; set; }
        
        public int? txtFIELD2_2_2_1 { get; set; }
        
        public int? txtFIELD2_2_2_2 { get; set; }
        
        public int? txtFIELD2_2_2_3 { get; set; }
        
        public string? txtFIED_2_Comments { get; set; }

        
        public int? txtFIELD3_1 { get; set; }
        
        public int? txtFIELD3_2 { get; set; }
        
        public string? txtFIED_3_Comments { get; set; }

        
        public int? txtFIELD4_1_1 { get; set; }
        
        public int? txtFIELD4_1_2 { get; set; }
        
        public int? txtFIELD4_1_3 { get; set; }
        
        public int? txtFIELD4_1_4_1 { get; set; }
        
        public int? txtFIELD4_1_4_2 { get; set; }
        
        public int? txtFIELD4_1_4_3 { get; set; }
        
        public int? txtFIELD4_1_5_1 { get; set; }
        
        public int? txtFIELD4_1_5_2 { get; set; }
        
        public int? txtFIELD4_1_5_3 { get; set; }
        
        public int? txtFIELD4_1_6_1 { get; set; }
        
        public int? txtFIELD4_1_6_2 { get; set; }
        
        public int? txtFIELD4_1_6_3 { get; set; }

        public int? txtFIELD4_2_1 { get; set; }
        
        public int? txtFIELD4_2_2 { get; set; }
        
        public int? txtFIELD4_2_3 { get; set; }
        
        public int? txtFIELD4_2_4_1 { get; set; }
        
        public int? txtFIELD4_2_4_2 { get; set; }
        
        public int? txtFIELD4_2_4_3 { get; set; }
        
        public int? txtFIELD4_2_5_1 { get; set; }
        
        public int? txtFIELD4_2_5_2 { get; set; }
        
        public int? txtFIELD4_2_5_3 { get; set; }
        
        public int? txtFIELD4_2_6_1 { get; set; }
        
        public int? txtFIELD4_2_6_2 { get; set; }
        
        public int? txtFIELD4_2_6_3 { get; set; }
        
        public int? txtFIELD4_3_1 { get; set; }
        
        public int? txtFIELD4_3_2 { get; set; }
        
        public int? txtFIELD4_3_3 { get; set; }
        
        public int? txtFIELD4_3_4_1 { get; set; }
        
        public int? txtFIELD4_3_4_2 { get; set; }
        
        public int? txtFIELD4_3_4_3 { get; set; }
        
        public int? txtFIELD4_3_5_1 { get; set; }
        
        public int? txtFIELD4_3_5_2 { get; set; }
        
        public int? txtFIELD4_3_5_3 { get; set; }
        
        public int? txtFIELD4_3_6_1 { get; set; }
        
        public int? txtFIELD4_3_6_2 { get; set; }
        
        public int? txtFIELD4_3_6_3 { get; set; }
        
        public string? txtFIED_4_Comments { get; set; }

        
        public int? txtFIELD5_1 { get; set; }
        
        public int? txtFIELD5_2 { get; set; }
        
        public int? txtFIELD5_3 { get; set; }
        
        public int? txtFIELD5_4 { get; set; }
        
        public string? txtFIED_5_Comments { get; set; }

        
        public int? txtFIELD6_1_1 { get; set; }
        
        public int? txtFIELD6_1_2 { get; set; }
        
        public int? txtFIELD6_1_3 { get; set; }
        
        public int? txtFIELD6_2_1 { get; set; }
        
        public int? txtFIELD6_2_2 { get; set; }
        
        public int? txtFIELD6_2_3 { get; set; }
        
        public int? txtFIELD6_3_1 { get; set; }
        
        public int? txtFIELD6_3_2 { get; set; }
        
        public int? txtFIELD6_3_3 { get; set; }
        
        public string? txtFIED_6_Comments { get; set; }


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

        public string? txtFIED_12_Comments { get; set; }
    }
}
