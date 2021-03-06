import store from '@/store'
import router from '@/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyA2LHKgdr2GQb_QUBYfhMOaxgOuGjw1z5E',
  authDomain: 'airui-a4b63.firebaseapp.com',
  databaseURL: 'https://airui-a4b63.firebaseio.com',
  projectId: 'airui-a4b63',
  storageBucket: 'airui-a4b63.appspot.com',
  messagingSenderId: '1039460737420',
}

export default {
  install: (Vue, options) => {
    const firebaseApp = firebase.initializeApp(config)
    const auth = firebaseApp.auth()
    Vue.prototype.$auth = {
      login: async (username, pass) => {
        return auth.signInWithEmailAndPassword(username, pass)
      },
      logout: async () => {
        router.push('/system/login')
        await auth.signOut()
      },
    }
    auth.onAuthStateChanged(user => {
      store.commit('UPDATE_USER', { user })
    })
  },
}
