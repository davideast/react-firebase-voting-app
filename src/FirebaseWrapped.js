import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';

export default function FirebaseWrapped({ config }) {
  return (
    <FirebaseAppProvider firebaseConfig={config}>
      <App />
    </FirebaseAppProvider>
  );
}
