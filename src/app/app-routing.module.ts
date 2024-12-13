import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  // {path:'',component:StudentComponent,pathMatch:"full"}, // by default to redirect to StudentComponent
  {path:'',redirectTo:'/teacher',pathMatch:'full'},
  {path: "student", children:[
      {path:'',component:StudentComponent},
      {path:'Contactus', component:ContactUsComponent},
    ] },
  {path: "teacher",component: TeacherComponent },
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
