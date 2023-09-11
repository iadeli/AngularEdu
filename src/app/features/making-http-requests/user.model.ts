export interface User {
    id: number;
    name: string;
    email: string;
    message?: string;
}

export class Userimpl implements User {
    id!: number;
    name!: string;
    email!: string;
    message?: string | undefined;
}