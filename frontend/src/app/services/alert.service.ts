import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    async confirmDelete(item: string): Promise<boolean> {
        const result = await Swal.fire({
            title: `Delete ${item}?`,
            text: 'This action cannot be undo!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'Cancel'
        });

        return result.isConfirmed;
    }
    async confirm(title: string, text: string): Promise<boolean> {

        const result = await Swal.fire({

            title,

            text,

            icon: 'question',

            showCancelButton: true,

            confirmButtonColor: '#3085d6',

            cancelButtonColor: '#d33',

            confirmButtonText: 'Yes',

            cancelButtonText: 'Cancel'

        });

        return result.isConfirmed;

    }

    success(message: string) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
            timer: 800,
            showConfirmButton: false
        });
    }

    error(message: string) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message
        });
    }

    warning(message: string) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: message
        });
    }

    info(message: string) {
        Swal.fire({
            icon: 'info',
            title: 'Information',
            text: message
        });
    }
}