import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private contactCollection: AngularFirestoreCollection<any>;

  constructor(afs: AngularFirestore) {
    this.contactCollection = afs.collection<any>('contacts');
  }
  saveMessage(newContact: any): void {
    this.contactCollection.add(newContact);
  }
}
