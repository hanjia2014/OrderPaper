using Microsoft.AspNetCore.Mvc;
using OrderPaper.Models;
using System;
using System.Collections.Generic;

namespace OrderPaper.Controllers
{
    [Route("api/[controller]")]
    public class OrderPaperSummaryController : Controller
    {
        [HttpGet]
        public IList<OrderPaperSummary> Get()
        {
            var summary = new List<OrderPaperSummary>();
            summary.Add(new OrderPaperSummary { Number = 1, Date = new DateTime(2016, 6, 1), Status = "Provisional" });
            summary.Add(new OrderPaperSummary { Number = 2, Date = new DateTime(2016, 7, 1), Status = "Provisional" });
            return summary;
        }
    }
}
