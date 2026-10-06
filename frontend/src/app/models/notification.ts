export interface Notification {

    notificationId?: number;

    studentId?: number;

    busId?: number;

    title: string;

    message: string;

    type: string;

    status: string;

    isRead?: boolean;

    createdAt?: string;

    readAt?: string;

}