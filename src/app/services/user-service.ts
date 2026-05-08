import { Injectable, inject, signal } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, docData, updateDoc } from '@angular/fire/firestore';
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
    let userDocRef = doc(this.firestore, `users/${id}`);

    docData(userDocRef, { idField: 'id' }).subscribe((user) => {
      this.selectedUser.set(new UserModel(user as UserInterface));
    });
  }

  updateUserAddress(id: string, user: UserModel) {
    let userDocRef = doc(this.firestore, `users/${id}`);
    return updateDoc(userDocRef, {
      street: user.street,
      zipCode: user.zipCode,
      city: user.city,
    });
  }

  updateUserDetail(id: string, user: UserModel) {
    let userDocRef = doc(this.firestore, `users/${id}`);
    return updateDoc(userDocRef, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }

  deleteUser(id: string) {
    // Implement logic to delete a user from Firestore
  }
}
