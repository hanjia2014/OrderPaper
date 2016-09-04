﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrderPaper.Models
{
    public class Section
    {
        public int Sequence { get; set; }
        public string Type { get; set; }
        public string Title { get; set; }
        public bool IsGroup { get; set; }
        public bool HasLine { get; set; }
    }

    public class MotionSection : Section
    {
        public DateTime Date { get; set; }
        public string Summary { get; set; }
        public string Member { get; set; }
        public string Speeches { get; set; }
        public string Motion { get; set; }
    }

    public class BillSection : Section
    {
        public string Number;
        public string Member;
        public string Stage;
        public bool IsCurrentSittingWeek;
        public bool IsFollowingSittingWeek;
        public bool IsMajorityAmendments;
        public bool IsExtendedSittingHours;
        public string Speeches;
        public string LatestEvent;
    }

    public class ReportSection : Section
    {
        public string Shoulder;
        public string Committee;
        public string LatestEvent;
    }
}
