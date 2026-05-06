import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import {MatCardModule} from '@angular/material/card';
import { UserService } from '../services/user-service';


@Component({
  selector: 'app-user',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})
export class User {
  dialog = inject(MatDialog);
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getAllUsers();
  }

  openDialog(): void {
    this.dialog.open(DialogAddUser);
  }
}
