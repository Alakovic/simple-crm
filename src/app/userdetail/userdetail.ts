import { Component, inject} from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddress } from '../dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-userdetail',
  imports: [MatCardModule,MatIcon,MatMenuModule,MatButtonModule],
  templateUrl: './userdetail.html',
  styleUrls: ['./userdetail.scss'],
})
export class UserDetail {
  userID: string = '';
  userService = inject(UserService);
  dialog = inject(MatDialog);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userID = this.route.snapshot.paramMap.get('id') || '';
    this.userService.getUserById(this.userID);
  }

  

  editMenu() {
    this.dialog.open(DialogEditAddress, {
      data:this.userService.selectedUser()
    });
  }

  editUserDetail() {
    this.dialog.open(DialogEditUser, {
      data:this.userService.selectedUser()
    });
  }
}
