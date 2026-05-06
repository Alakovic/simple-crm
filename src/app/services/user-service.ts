import { Injectable,inject,signal } from '@angular/core';
import { Firestore,collection,addDoc,collectionData } from '@angular/fire/firestore';
import { UserModel } from '../models/user.class';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore = inject(Firestore);
  allUsers = signal<UserInterface[]>([]);

  addUser(user: UserModel) {
    let usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, user.toJSON());
  }

  getAllUsers() {
    let usersRef = collection(this.firestore, 'users');
    collectionData(usersRef, { idField: 'id' })
    .subscribe((users) => {
      this.allUsers.set(users as UserModel[]);
    });
  }

  getUserById(id: string) {
    // Implement logic to retrieve a user by ID from Firestore
  }

  updateUser(id: string, user: UserModel) {
    // Implement logic to update a user in Firestore
  }

  deleteUser(id: string) {
    // Implement logic to delete a user from Firestore
  }
}
