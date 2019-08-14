using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Angular_API.Models
{
    public class StudentSubject
    {
        [Column(Order =1)]
        [Key]
        [ForeignKey("student")]
        public int StudentId { get; set; }

        [Column(Order = 2)]
        [Key]
        [ForeignKey("subject")]
        public int SubjectId { get; set; }

        public string Grade { get; set; }

        public subject subject { get; set; }
        public Student student { get; set; }

    }
}