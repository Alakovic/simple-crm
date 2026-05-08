import { Component, inject, Input } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service';
import { UserModel } from '../models/user.class';

@Component({
  selector: 'app-userdetail',
  imports: [MatCardModule],
  templateUrl: './userdetail.html',
  styleUrls: ['./userdetail.scss'],
})
export class UserDetail {
  userID:string = '';
  userService = inject(UserService);
 constructor(private route: ActivatedRoute) {}

 ngOnInit() {
  this.userID = this.route.snapshot.paramMap.get('id') || '';
  this.userService.getUserById(this.userID);
 }

 



}
