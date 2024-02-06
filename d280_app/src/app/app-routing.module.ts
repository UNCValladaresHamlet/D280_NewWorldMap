import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world/world.component'; 

//C.  Assign the map component to the default URL using an Angular routing module. 
const routes: Routes = [
  { path: '', component: WorldComponent }, // Default route
  { path: 'map', component: WorldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
