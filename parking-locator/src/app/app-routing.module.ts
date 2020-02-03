import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "analytics",
    loadChildren: () =>
      import("./analytics/analytics.module").then(m => m.AnalyticsModule)
  },
  {
    path: "floor-plan",
    loadChildren: () =>
      import("./floor-plan/floor-plan.module").then(m => m.FloorPlanModule)
  },
  {
    path: "**",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
