import { Injectable } from "@angular/core";

export class FeatureCollection {
  type: string;
  features: Feature[];
}

export class Feature {
  type: string;
  properties?: FeatureProperty;
  geometry: FeatureGeometry;
}

export class FeatureProperty {
  availability: boolean;
  name: string;
}

export class FeatureGeometry {
  type: string;
  coordinates: number[][][];
}

let buildingData: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10, -80],
            [-80, -80],
            [-80, 80],
            [40, 80],
            [40, -20],
            [100, -20],
            [100, -80],
            [30, -80],
            [30, -74],
            [34, -74],
            [34, -68],
            [40, -68],
            [40, -74],
            [94, -74],
            [94, -26],
            [40, -26],
            [34, -26],
            [34, 74],
            [-74, 74],
            [-74, 30],
            [10, 30],
            [10, 24],
            [-74, 24],
            [-74, -24],
            [10, -24],
            [10, -30],
            [-74, -30],
            [-74, -74],
            [10, -74]
          ]
        ]
      }
    }
  ]
};

let roomsData: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        availability: true,
        name: "Paking Slot 1",
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-74, -30], [0, -30], [0, -74], [-74, -74]]]
      }
    },
    {
      type: "Feature",
      properties: {
        availability: true,
        name: "Parking Slot 2",
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-74, 24], [0, 24], [0, -24], [-74, -24]]]
      }
    },
    {
      type: "Feature",
      properties: {
        availability: false,
        name: "Parking Slot 3",
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[-74, 74], [0, 74], [0, 30], [-74, 30]]]
      }
    },
    {
      type: "Feature",
      properties: {
        availability: false,
        name: "Parking Slot 4",
      },
      geometry: {
        type: "Polygon",
        coordinates: [[[40, -26], [94, -26], [94, -74], [40, -74]]]
      }
    }
  ]
};

@Injectable()
export class FloorPlanService {
  getBuildingData(): FeatureCollection {
    return buildingData;
  }
  getRoomsData(): FeatureCollection {
    return roomsData;
  }
}
