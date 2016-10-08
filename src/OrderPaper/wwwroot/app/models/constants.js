System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Status;
    return {
        setters:[],
        execute: function() {
            (function (Status) {
                Status[Status["Provisional"] = 1] = "Provisional";
                Status[Status["Final"] = 2] = "Final";
            })(Status || (Status = {}));
            exports_1("Status", Status);
        }
    }
});
//# sourceMappingURL=Constants.js.map