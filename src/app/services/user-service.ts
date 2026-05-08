import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { UserModel } from '../models/user.class';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore = inject(Firestore);
  allUsers = signal<UserInterface[]>([]);
  selectedUser = signal<UserInterface>(new UserModel());

  addUser(user: UserModel) {
    let usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef, user.toJSON());
  }

  getAllUsers() {
    let usersRef = collection(this.firestore, 'users');
    collectionData(usersRef, { idField: 'id' }).subscribe((users) => {
      this.allUsers.set(users as UserModel[]);
    });
  }

  getUserById(id: string) {
    let user = this.allUsers().find((u) => u.id === id);
    if (user) {
      this.selectedUser.set(user);
    }
  }

  updateUser(id: string, user: UserModel) {
    // Implement logic to update a user in Firestore
  }

  deleteUser(id: string) {
    // Implement logic to delete a user from Firestore
  }
}
