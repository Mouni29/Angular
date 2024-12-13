import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root'})
export class SampleService {

  constructor(private httpClient: HttpClient) { }

  DisplayMsg(){
    return "I'm a sample service";
  }

  GetStudentDetails(){
    return this.httpClient.get('https://dummy-json.mock.beeceptor.com/posts');
  }
}
