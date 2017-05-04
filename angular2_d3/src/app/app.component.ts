import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PieService } from './pie-data.service';

@Component({
  selector: 'my-app',
  providers: [ PieService ],
  template: `<pie-chart [data]="dataset" *ngIf="!!dataset"></pie-chart>`
})
export class AppComponent implements OnInit{ 
	errorMessage: string;
	dataset:any;

	constructor(private pieService: PieService){}

	ngOnInit(){		
		this.pieService.getPieData()
			.subscribe(
                   data => { this.dataset = data; } ,
                   error =>  this.errorMessage = <any>error);
	}
}
