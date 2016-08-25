"use strict";
var BaseComponent = (function () {
    function BaseComponent() {
        this.spinner = new Spinner({ radius: 10 });
        this.IsNumberedList = true;
    }
    BaseComponent.prototype.SortableConfig = function () {
        var eleId = '#' + this.SortableListId;
        (function ($) {
            var panelList = $(eleId);
            panelList.sortable({
                // Only make the .panel-heading child elements support dragging.
                // Omit this to make then entire <li>...</li> draggable.
                placeholder: "sortable-hightlight",
                handle: '.panel-heading',
                update: function () {
                    $('.panel', panelList).each(function (index, elem) {
                        var $listItem = $(elem), newIndex = $listItem.index();
                        // Persist the new indices.
                    });
                },
                start: function (e, ui) {
                    ui.placeholder.height(ui.item.height());
                }
            });
        })(jQuery);
    };
    BaseComponent.prototype.ngAfterViewInit = function () {
        this.SortableConfig();
    };
    BaseComponent.prototype.toggle = function (e) {
        e.preventDefault();
        this.isExpand = !this.isExpand;
        var eleId = "#" + this.SortableListId;
        $(eleId).toggle("fade", {
            direction: 'up'
        }, 500);
    };
    BaseComponent.prototype.toggleItemOfBusiness = function (e, id) {
        e.preventDefault();
        this.isExpand = !this.isExpand;
        var eleId = "#" + this.SortableListId;
        $(eleId).toggle("fade", {
            direction: 'up'
        }, 500);
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map