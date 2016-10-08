"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Section = (function () {
    function Section() {
    }
    return Section;
}());
exports.Section = Section;
var MotionSection = (function (_super) {
    __extends(MotionSection, _super);
    function MotionSection() {
        _super.call(this);
        this.Type = "Motion";
    }
    return MotionSection;
}(Section));
exports.MotionSection = MotionSection;
var BillSection = (function (_super) {
    __extends(BillSection, _super);
    function BillSection() {
        _super.call(this);
        this.Type = "Bill";
    }
    return BillSection;
}(Section));
exports.BillSection = BillSection;
var ReportSection = (function (_super) {
    __extends(ReportSection, _super);
    function ReportSection() {
        _super.call(this);
        this.Type = "Report";
    }
    return ReportSection;
}(Section));
exports.ReportSection = ReportSection;
var LineSection = (function (_super) {
    __extends(LineSection, _super);
    function LineSection() {
        _super.call(this);
        this.Type = "Line";
    }
    return LineSection;
}(Section));
exports.LineSection = LineSection;
var GroupItem = (function (_super) {
    __extends(GroupItem, _super);
    function GroupItem() {
        _super.call(this);
        this.Items = new Array();
        this.Type = "Group";
    }
    return GroupItem;
}(Section));
exports.GroupItem = GroupItem;
//# sourceMappingURL=Section.js.map