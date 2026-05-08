import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { UserModel } from '../models/user.class';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-dialog-edit-address',
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
  templateUrl: './dialog-edit-address.html',
  styleUrls: ['./dialog-edit-address.scss'],
})
export class DialogEditAddress {
  isLoading = signal(false);
  dialog = inject(MatDialogRef<DialogEditAddress>);
  data = inject(MAT_DIALOG_DATA);
  user = new UserModel(this.data);
  userService = inject(UserService);

  async saveAddress() {
    this.isLoading.set(true);
    try {
      await this.userService.updateUserAddress(this.user.id, this.user);
      this.isLoading.set(false);
      this.dialog.close(true);
    } catch (error) {
      console.error('Error updating user address:', error);
      this.isLoading.set(false);
    }
  }
}
