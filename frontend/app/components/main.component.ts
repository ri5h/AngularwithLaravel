import { Component } from '@angular/core';
import { BackendService } from '../services/backend.service'; 

@Component({
	moduleId: module.id,
  	selector: 'main',
  	templateUrl: `main.component.html`,
  	providers : [BackendService]
})
export class MainComponent{

	private mydata:Array<Object>;
	constructor(private backendService: BackendService){
			console.log("Main component Loaded");	
	}
	getStatus(){
		this.mydata = this.backendService.getStatus();
  	}
}
