import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User , roles } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, username: 'mshadab', password: '11111111', firstName: 'Mohamad', lastName: 'Shadab', role: roles.STUDENT }, //TODO: correct user id
      { id: 11, username: 'mkariminia', password: '11111111', firstName: 'Mojtaba', lastName: 'Kariminia', role: roles.STUDENT },
      { id: 12, username: 'rghafori', password: '11111111', firstName: 'Reza', lastName: 'Ghafori', role: roles.EMPLOYEE },
      { id: 11, username: 'saliakbari', password: '11111111', firstName: 'Sadegh', lastName: 'Aliakbari', role: roles.TEACHER },
      { id: 11, username: 'mshamsfard', password: '11111111', firstName: 'Mehrnosh', lastName: 'Shamsfard', role: roles.MANAGER },
    ]
    const db = {users}
    return {db};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the user array is empty,
  // the method below returns the initial number (11).
  // if the user array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}