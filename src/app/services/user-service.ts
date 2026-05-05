import { Injectable,inject } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { UserModel } from '../models/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore = inject(Firestore);

  addUser(user: UserModel) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, user.toJSON());
  }
}
