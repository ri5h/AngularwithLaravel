import { Component } from '@angular/core';


@Component({
  	selector: 'my-app',
  	template: `
  	<h3>Welcome To {{name}}</h3>
  	<main></main>`,
})
export class AppComponent  { 
	name = 'Angular';
}
