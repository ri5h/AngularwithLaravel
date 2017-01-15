import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class BackendService {

	private result:Array<Object>;
	private http: Http;
	
	constructor(http: Http) {
	   this.http = http;
	}

	getStatus() : Array<Object>{
		console.log("Hello from service");
		return this.http.get("http://localhost/AngularwithLaravel/backend/api/status")
		.map(response => {return response.json()});

		
	} // stub

	public makeRequest = (): Observable<any> => {
    return this.myObservable()
       .flatmap((x) => return this.http
              .get('http://jsonplaceholder.typicode.com/posts/1')
              .map( (responseData) => {
                    return responseData.json();
              })
}