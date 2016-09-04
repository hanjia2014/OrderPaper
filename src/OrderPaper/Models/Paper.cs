using System.Collections.Generic;

namespace OrderPaper.Models
{
    public class Paper
    {
        public bool FrontPage { get; set; }
        public bool Include { get; set; }
        public string OrderType { get; set; }
        public string Details { get; set; }
        public string Speeches { get; set; }
        public List<Section> Sections { get; set; }
    }
}
