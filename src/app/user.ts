export class User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    password : string;
    role: string;
    confirmed : boolean;
  }
export const roles = {
    EMPLOYEE : 'کارمند',
    STUDENT : 'دانشجو',
    TEACHER : 'استاد',
    MANAGER : 'مدیر',
}