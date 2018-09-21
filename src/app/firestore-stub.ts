import { BehaviorSubject, Observable } from 'rxjs';

export const FirestoreStub = {
  authState: new BehaviorSubject({ foo: 'bar' }),
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
};
