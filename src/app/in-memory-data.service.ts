import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User , roles } from './user';
import { Injectable } from '@angular/core';
import { Case , topics, status } from './case';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, username: 'mshadab', password: '11111111', firstName: 'Mohamad', lastName: 'Shadab', role: roles.STUDENT, confirmed : true }, //TODO: correct user id
      { id: 12, username: 'mkariminia', password: '11111111', firstName: 'Mojtaba', lastName: 'Kariminia', role: roles.STUDENT , confirmed : true },
      { id: 13, username: 'rghafori', password: '11111111', firstName: 'Reza', lastName: 'Ghafori', role: roles.EMPLOYEE , confirmed : false },
      { id: 14, username: 'saliakbari', password: '11111111', firstName: 'Sadegh', lastName: 'Aliakbari', role: roles.TEACHER , confirmed : false },
      { id: 15, username: 'mshamsfard', password: '11111111', firstName: 'Mehrnosh', lastName: 'Shamsfard', role: roles.MANAGER , confirmed : true },
    ]
    const cases = [
      { id : 11, userId : 11, date : Date(), topic : topics.COMPLAINT, content : 'سلام. این شکایت من است', responsibleId : 13, status : status.OPEN },
      { id : 12, userId : 12, date : Date(), topic : topics.REQUEST, content : 'سلام. این درخواست من است', responsibleId : 14, status : status.OPEN },
    ]
    return {users};
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