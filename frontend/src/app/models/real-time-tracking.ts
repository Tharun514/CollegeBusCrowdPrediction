export interface RealTimeTracking {

    trackingId: number;

    busId: number;

    latitude: number;

    longitude: number;

    currentSpeed: number;

    currentStop: string;

    nextStop: string;

    etaMinutes: number;

    trackingTime: string;

}