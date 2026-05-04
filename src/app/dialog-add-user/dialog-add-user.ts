import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogActions,MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  imports: [CommonModule, MatDialogActions, MatDialogContent],
  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss'],
})
export class DialogAddUser {}
