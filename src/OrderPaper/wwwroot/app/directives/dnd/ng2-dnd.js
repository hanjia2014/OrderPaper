// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-dnd
System.register(['./dnd.config', './dnd.service', './draggable.component', './droppable.component', './sortable.component', './abstract.component'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var dnd_config_1, dnd_service_1, draggable_component_1, droppable_component_1, sortable_component_1;
    var DND_PROVIDERS, DND_DIRECTIVES;
    var exportedNames_1 = {
        'DND_PROVIDERS': true,
        'DND_DIRECTIVES': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (dnd_config_1_1) {
                dnd_config_1 = dnd_config_1_1;
                exportStar_1(dnd_config_1_1);
            },
            function (dnd_service_1_1) {
                dnd_service_1 = dnd_service_1_1;
                exportStar_1(dnd_service_1_1);
            },
            function (draggable_component_1_1) {
                draggable_component_1 = draggable_component_1_1;
                exportStar_1(draggable_component_1_1);
            },
            function (droppable_component_1_1) {
                droppable_component_1 = droppable_component_1_1;
                exportStar_1(droppable_component_1_1);
            },
            function (sortable_component_1_1) {
                sortable_component_1 = sortable_component_1_1;
                exportStar_1(sortable_component_1_1);
            },
            function (abstract_component_1_1) {
                exportStar_1(abstract_component_1_1);
            }],
        execute: function() {
            exports_1("DND_PROVIDERS", DND_PROVIDERS = [dnd_config_1.DragDropConfig, dnd_service_1.DragDropService, dnd_service_1.DragDropSortableService]);
            exports_1("DND_DIRECTIVES", DND_DIRECTIVES = [draggable_component_1.DraggableComponent, droppable_component_1.DroppableComponent, sortable_component_1.SortableContainer, sortable_component_1.SortableComponent]);
        }
    }
});
//# sourceMappingURL=ng2-dnd.js.map