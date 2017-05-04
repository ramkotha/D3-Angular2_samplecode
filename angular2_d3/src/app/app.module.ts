import { NgModule }      from '@angular/core';
import { HttpModule }           from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { PieChartComponent } 	 from './pie.component';

import { InMemPieDataDB }     from './in-memory-pie-data.service';

@NgModule({
  imports:      [ 
			  		BrowserModule,
			  		HttpModule,
			  		InMemoryWebApiModule.forRoot(InMemPieDataDB)			  		
			  	],
  declarations: [ AppComponent,PieChartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
