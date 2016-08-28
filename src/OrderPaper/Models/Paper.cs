using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderPaper.Models
{
    public class Paper
    {
        public bool FrontPage { get; set; }
        public bool Include { get; set; }
        public string OrderType { get; set; }
        public List<MotionSection> Sections { get; set; }
    }
}
