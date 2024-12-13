import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {StudentModel} from "../models/student.model";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  @Output() myData = new EventEmitter<string>();
  @Input('dataa') data:number=9;
  @Input() students:StudentModel={id:0,name:""};
  @Input()
  get sampleData(){
    return this._sampleData;
  }

  set sampleData(val:number){
   // console.log("inside set sampleData----------");
    this._sampleData=++val;
  }
  private _sampleData: number=0;
// if u don't want to name data as input com name we can use 'dataa' by specifying the input decorator  which is the alias foe data

  // constructor() {
  //   console.log('inside student component constructor');
  // }
  //
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('inside student component onchange',changes);
  // }
  //
  // ngDoCheck(){
  //   console.log("inside ngDoCheck Hook",this.students)
  // }

  ngAfterContentInit() {
    console.log("inside ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("inside ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("inside ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("inside ngAfterViewChecked");
  }

  btnClick(){
    this.myData.emit('This text is from child component');
  }

}
