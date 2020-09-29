import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state: string;
  tva: number;
  id: number;
  name: string = "Default Name";
  ca: string;
  comment: string;
   constructor(obj?: Partial<Client>) {
     if (obj) {
        Object.assign(this,obj);
     }
   }
}
