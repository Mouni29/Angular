import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SampleService} from "./sampleservice.service";
import {StudentComponent} from "./student/student.component";
import {StudentModel} from "./models/student.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular15-app';
  products = ["product1","product2","product3"];
  isVisible = false;
  name ="";
  msg ="welcome"
  time = new Date("01/05/2020")
  Salary = 89
  NumbersArray: any[] =[]
  displayMsg = ""
  UserInfo:any=[]
  count=0;
  StuObj: StudentModel = {
    id:23,
    name:"Mounika"
  }
  phoneNo = 987654321

  constructor(private router:Router,private service:SampleService) {
   // console.log("-----inside constructor--------")
    this.NumbersArray=[{num1:10,num2:20},{num1:3,num2:20}]
  }

  ngOnInit() {
   // console.log("-----inside ngOnInit--------")
    this.displayMsg = this.service.DisplayMsg();
    this.service.GetStudentDetails().subscribe((data)=>{
      this.UserInfo=data;
    })
  }

  //@ViewChild(StudentComponent) private  StuComponent:StudentComponent;

  welcomeMsg(){
  //  console.log("save button is clicked")
  }

  onNameChange(event:Event){
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }

  teacherMethod(){
  this.router.navigate(['/teacher']);
  }

  childData($event:string){
    console.log("event ",$event)
  }

  counter(){
    this.count++;
    this.StuObj.id=this.count;
  }
}
