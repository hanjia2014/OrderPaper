﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OrderPaper.Models;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace OrderPaper.Controllers
{
    [Route("api/[controller]")]
    public class OrderPaperController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            var sections = new List<MotionSection>();
            sections.Add(new MotionSection { Sequence = 1, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 2, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 3, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 4, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 5, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 6, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 7, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 8, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 9, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 10, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 11, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 12, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 13, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 14, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 15, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 16, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 17, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 18, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 19, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 20, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 21, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 22, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 23, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 24, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 25, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 26, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 27, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 28, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 29, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 30, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 31, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 32, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 33, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 34, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 35, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 36, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 37, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 38, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 39, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });
            sections.Add(new MotionSection { Sequence = 40, Date = DateTime.Now, Member = "Hon Peter Dunne", Speeches = "John Doe", Summary = "This is a motion", Type = "Motion", Title = "That the House congratulate Constance Stiring and Olivia Clark", Motion = "That the House congratulate Constance Stiring and Olivia Clark of Onslow College who won the Bronze medal in the GU16 Double at the 2016 Maadi Cup Rowing Regatta and note that it is the frst Onslow College girls medal in more than 40 years." });


            return JsonConvert.SerializeObject(new Paper { FrontPage = true, Include = true, OrderType = "Papers", Sections = sections });
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
