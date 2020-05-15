import React from 'react'
import styled from 'styled-components/native'
import { nanoid } from 'nanoid/non-secure'
import { emitter } from './my_modules/emitter'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../firebaseConfig'

export const auth = {
  init: () => {
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
      }
    })
  },
  getCurrentUser: () => {
    let user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  },
  createUserWithEmailAndPassword: (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((errors) => dealWithErrors(errors))
  },
  signInWithEmailAndPassword: (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((errors) => dealWithErrors(errors))
  },
}

function dealWithErrors(error: any): void {
  var errorCode = error.code
  var errorMessage = error.message
}
