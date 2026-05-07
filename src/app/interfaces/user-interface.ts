export interface UserInterface {
    id: string;
    firstName: string;
    lastName:string;
    email: string;
    birthDate: Date | null;
    street: string;
    zipCode: number | null;
    city: string;
}
