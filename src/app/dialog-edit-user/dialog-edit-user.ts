import { Component, inject, signal } from '@angular/core';
import { UserModel } from '../models/user.class';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [
    MatProgressBar,
    MatDialogActions,
    MatDialogContent,
    MatFormField,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './dialog-edit-user.html',
  styleUrls: ['./dialog-edit-user.scss'],
})
export class DialogEditUser {
  isLoading = signal(false);
  dialog = inject(MatDialogRef<DialogEditUser>);
  data = inject(MAT_DIALOG_DATA);
  user = new UserModel(this.data);
  userService = inject(UserService);

 async saveUser() {
    this.isLoading.set(true);
    try {
      await this.userService.updateUserDetail(this.user.id, this.user);
      this.isLoading.set(false);
      this.dialog.close(true);
    } catch (error) {
      console.log("Error",error);
      
    }
    
  }
}
