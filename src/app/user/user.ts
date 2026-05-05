import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';


@Component({
  selector: 'app-user',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})
export class User {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogAddUser);
  }
}
