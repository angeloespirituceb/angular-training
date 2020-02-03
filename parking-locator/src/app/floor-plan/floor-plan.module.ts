import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DxVectorMapModule } from "devextreme-angular";

import { FloorPlanRoutingModule } from "./floor-plan-routing.module";
import { FloorPlanComponent } from "./floor-plan.component";
import { FloorPlanService } from "../service/floorplan.service";

@NgModule({
  declarations: [FloorPlanComponent],
  imports: [CommonModule, FloorPlanRoutingModule, DxVectorMapModule],
  providers: [FloorPlanService]
})
export class FloorPlanModule {}
