export interface BusOccupancy {

    id?: number;

    busId?: number;

    occupied?: number;

    available?: number;

    occupancyPercentage?: number;

    crowdLevel?: string;

    updatedTime?: string;

}