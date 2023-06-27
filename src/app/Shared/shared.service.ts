import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationComponent } from './components/modals/notification/notification.component';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dialogRef?: MatDialogRef<NotificationComponent>;

  constructor(private dialog: MatDialog) { }

  showNotification(isSuccess: boolean, title: string, message: string) {
    const dialogConfig = this.dialog.open(NotificationComponent, {
      data: {
        isSuccess,
        title,
        message
      }
    });

    this.dialogRef = dialogConfig;
  }
}

