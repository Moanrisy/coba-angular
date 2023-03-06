import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildAComponent } from "./sample-route/component-a/child-a/child-a.component";
import { ChildBComponent } from "./sample-route/component-a/child-b/child-b.component";
import { ComponentAComponent } from "./sample-route/component-a/component-a.component";
import { ComponentBComponent } from "./sample-route/component-b/component-b.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sample-route/sample-route.module').then((m) => m.SampleRouteModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
