export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    role: roles;
  }
export enum roles{
    EMPLOYEE,
    STUDENT,
    TEACHER,
    MANAGER
}