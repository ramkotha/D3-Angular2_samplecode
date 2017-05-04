import { Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
declare let d3: any;

@Component({
	selector: 'pie-chart',  	
  	template: `<div style="text-align:center">
	  				<div id="chart" #chart><div>
	  			</div>`
})
export class PieChartComponent implements AfterViewInit{
	@ViewChild('chart') el:ElementRef;
	@Input('data') dataset:any;

	ngAfterViewInit() {

		let width = 600;
        let height = 600;
        let radius = Math.min(width, height) / 4;
        let labelr = radius + 20;
        let legendRectSize = 19;                                 
        let legendSpacing = 4;                                    


        // let color = d3.scaleOrdinal(d3.schemeCategory20b);
        let color = d3.scaleOrdinal().range(["#CA3A39", "#FCC149", "#35B167"]);
        
        let svg = d3.select(this.el.nativeElement)
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');

        let arc = d3.arc()
          .innerRadius(radius - 10)
          .outerRadius(radius - 45);

        let pie = d3.pie()
          .value(function(d:any) { return d.count; })
          .sort(null);

        let path = svg.selectAll('path')
          .data(pie(this.dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d:any) {
            return color(d.data.label);
          });

        let text = svg.selectAll('.legend')
          .data(pie(this.dataset))
          .enter()
          .append("text")
          .attr('class','legend')
          .attr('text-anchor','middle')
	      .attr("transform", function(d:any) { 
	      	let c = arc.centroid(d),
            x = c[0],
            y = c[1],
            // pythagorean theorem for hypotenuse
            h = Math.sqrt(x*x + y*y);
            return "translate(" + (x/h * labelr) +  ',' + (y/h * labelr) +  ")"; 
	      	// return "translate(" + arc.centroid(d) + ")"; 
	      })
	      .attr("dy", "20px")
	      .text(function(d:any) { return d.data.count + '%'; });


	      let legend = svg.selectAll('.trail')
	      	.data(color.domain())
	      	.enter()
	      	.append('g')
	      	.attr('class','trail')
	      	.attr('transform', function(d:any, i:any) {
	            let height = legendRectSize + legendSpacing;        
	            let offset =  height * color.domain().length / 2;   
	            let horz = legendRectSize * 10;                     
	            let vert = i * height - offset;                     
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
          .text(function(d:any) { return d; });


	}
}