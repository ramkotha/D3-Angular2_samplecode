"use strict";
var InMemPieDataDB = (function () {
    function InMemPieDataDB() {
    }
    InMemPieDataDB.prototype.createDb = function () {
        var dataset = [
            { label: '5+ Overdue', count: 78 },
            { label: '1-4 Overdue', count: 4 },
            { label: '0 Overdue', count: 17 }
        ];
        return { dataset: dataset };
    };
    return InMemPieDataDB;
}());
exports.InMemPieDataDB = InMemPieDataDB;
//# sourceMappingURL=in-memory-pie-data.service.js.map