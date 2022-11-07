import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CourseComponent } from './course/course.component';
import { MainComponent } from './main/main.component';
import { PlacementComponent } from './placement/placement.component';

const routes: Routes = [ 
  {path:'',redirectTo:'About',pathMatch:'full'},
  {path:'About',component:MainComponent},
  {path:'Service',component:CourseComponent},
  {path:'Activity',component:ActivityComponent},
  {path:'Placement',component:PlacementComponent},
  //{path:'**',component:}//wildcard rout (the page will not present)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
