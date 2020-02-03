import { Component, OnInit } from "@angular/core";
import {
  FloorPlanService,
  FeatureCollection
} from "../service/floorplan.service";

@Component({
  selector: "app-floor-plan",
  templateUrl: "./floor-plan.component.html",
  styleUrls: ["./floor-plan.component.less"]
})
export class FloorPlanComponent implements OnInit {
  projection: any;
  roomsData: FeatureCollection;
  buildingData: FeatureCollection;

  ngOnInit() {}

  constructor(service: FloorPlanService) {
    this.roomsData = service.getRoomsData();
    this.buildingData = service.getBuildingData();
    this.projection = {
      to(coordinates) {
        return [coordinates[0] / 100, coordinates[1] / 100];
      },
      from(coordinates) {
        return [coordinates[0] * 100, coordinates[1] * 100];
      }
    };
  }

  customizeLayer(elements) {
    elements.forEach(function(element) {
      const color =
        element.attribute("availability") === true ? "transparent" : "red";
      element.applySettings({
        color: color
      });
    });
  }

  customizeTooltip(arg) {
    if (arg.layer.name === "rooms")
      return {
        text: "Square: " + arg.attribute("square") + " ft&#178"
      };
  }
}
