using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Angular_API.Models
{
    public class subject
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        //public List<StudentSubject> StudentSubjects { get; set; }

    }
}