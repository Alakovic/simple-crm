import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserModel } from '../models/user.class';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  providers: [provideNativeDateAdapter()],

  imports: [
    CommonModule,
    MatDialogActions,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss'],
})
export class DialogAddUser {
  user: UserModel = new UserModel();
  userService = inject(UserService);
  isLoading = signal(false);
  dialog = inject(MatDialogRef<DialogAddUser>);

  async saveUser() {
    this.isLoading.set(true);
    try {
      await this.userService.addUser(this.user);
      this.isLoading.set(false);
      this.user = new UserModel();
      this.dialog.close();
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }
}
