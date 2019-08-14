using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular_API.Models
{
    public class DataViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Grade { get; set; }
        public List<subject> subjects { get; set; }
        public List<Student> students { get; set; }


    }
}