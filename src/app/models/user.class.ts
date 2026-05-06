import { UserInterface } from '../interfaces/user-interface';

export class UserModel implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  street: string;
  zipCode: number | null;
  city: string;

  constructor(data?: Partial<UserInterface>) {
    this.id = data?.id ?? '';
    this.firstName = data?.firstName ?? '';
    this.lastName = data?.lastName ?? '';
    this.birthDate = data?.birthDate ?? null;
    this.street = data?.street ?? '';
    this.zipCode = data?.zipCode ?? null;
    this.city = data?.city ?? '';
  }

  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}
