import { inject, InjectionToken } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { environment } from '../../../environments/environment.development';

export const FIREBASE_APP = new InjectionToken<FirebaseApp>('FirebaseApp', {
  providedIn: 'root',
  factory: () => initializeApp(environment.firebaseConfig),
});

export const FIREBASE_AUTH = new InjectionToken<Auth>('FirebaseAuth', {
  providedIn: 'root',
  factory: () => getAuth(inject(FIREBASE_APP)),
});

export const FIREBASE_DB = new InjectionToken<Firestore>('FirebaseDb', {
  providedIn: 'root',
  factory: () => getFirestore(inject(FIREBASE_APP)),
});
