import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  	selector: 'main',
  	templateUrl: `main.component.html`,
})
export class MainComponent{
	constructor(){
			console.log("Main component Loaded");	
	}
}
