"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var PieChartComponent = (function () {
    function PieChartComponent() {
    }
    PieChartComponent.prototype.ngAfterViewInit = function () {
        var width = 600;
        var height = 600;
        var radius = Math.min(width, height) / 4;
        var labelr = radius + 20;
        var legendRectSize = 19;
        var legendSpacing = 4;
        // let color = d3.scaleOrdinal(d3.schemeCategory20b);
        var color = d3.scaleOrdinal().range(["#CA3A39", "#FCC149", "#35B167"]);
        var svg = d3.select(this.el.nativeElement)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
        var arc = d3.arc()
            .innerRadius(radius - 10)
            .outerRadius(radius - 45);
        var pie = d3.pie()
            .value(function (d) { return d.count; })
            .sort(null);
        var path = svg.selectAll('path')
            .data(pie(this.dataset))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function (d) {
            return color(d.data.label);
        });
        var text = svg.selectAll('.legend')
            .data(pie(this.dataset))
            .enter()
            .append("text")
            .attr('class', 'legend')
            .attr('text-anchor', 'middle')
            .attr("transform", function (d) {
            var c = arc.centroid(d), x = c[0], y = c[1], 
            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x * x + y * y);
            return "translate(" + (x / h * labelr) + ',' + (y / h * labelr) + ")";
            // return "translate(" + arc.centroid(d) + ")"; 
        })
            .attr("dy", "20px")
            .text(function (d) { return d.data.count + '%'; });
        var legend = svg.selectAll('.trail')
            .data(color.domain())
            .enter()
            .append('g')
            .attr('class', 'trail')
            .attr('transform', function (d, i) {
            var height = legendRectSize + legendSpacing;
            var offset = height * color.domain().length / 2;
            var horz = legendRectSize * 10;
            var vert = i * height - offset;
            return 'translate(' + horz + ',' + vert + ')';
        });
        legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .style('fill', color)
            .style('stroke', color);
        legend.append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing)
            .text(function (d) { return d; });
    };
    return PieChartComponent;
}());
__decorate([
    core_1.ViewChild('chart'),
    __metadata("design:type", core_1.ElementRef)
], PieChartComponent.prototype, "el", void 0);
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "dataset", void 0);
PieChartComponent = __decorate([
    core_1.Component({
        selector: 'pie-chart',
        template: "<div style=\"text-align:center\">\n\t  \t\t\t\t<div id=\"chart\" #chart><div>\n\t  \t\t\t</div>"
    })
], PieChartComponent);
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pie.component.js.map