export interface Route {

  routeId?: number;

  routeName: string;

  routeCode: string;

  startPoint: string;

  endPoint: string;

  distance: number;

  expectedTime: number;

  isActive: boolean;

  createdAt?: string;

}