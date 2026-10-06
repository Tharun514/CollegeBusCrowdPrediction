export interface Stop {

    stopId?: number;

    routeId: number;

    stopName: string;

    latitude: number;

    longitude: number;

    sequence: number;

    isMajorStop: boolean;

    createdAt?: string;

}