using System.Collections.Generic;

namespace OrderPaper.Models
{
    public class OrderType
    {
        public bool IsFrontPage;
        public bool Include;
        public string Name;
        public List<Section> Sections;
        public List<List<Section>> Groups;
        public OrderType()
        {
            Sections = new List<Section>();
            Groups = new List<List<Section>>();
        }
    }
}
