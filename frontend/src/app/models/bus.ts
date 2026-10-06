export interface Bus {

    busId?: number;

    busNo: string;

    registrationNumber: string;

    capacity: number;

    currentLat: number;

    currentLng: number;

    status: string;

    driverId: number;

    routeId: number;

    speed: number;

    currentStop: string;

    nextStop: string;

    createdAt?: string;

}