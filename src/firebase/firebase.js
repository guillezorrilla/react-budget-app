import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAzYJglSesYJY6QU8mOFpkyUjpEtlkfbVE',
	authDomain: 'budget-app-19f21.firebaseapp.com',
	databaseURL: 'https://budget-app-19f21.firebaseio.com',
	projectId: 'budget-app-19f21',
	storageBucket: 'budget-app-19f21.appspot.com',
	messagingSenderId: '1049801188875',
	appId: '1:1049801188875:web:96c8bfd6da32eae962c90e'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider ,database as default}



// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 976123498763
// });

//   database.ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((error) => {
//       console.log('Error: ', error)
//   })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
//   database.ref().set({
//       name: 'Guillermo Zorrilla',
//       age: 24,
//       isSingle: false,
//       location: {
//           city: 'Madrid',
//           country: 'Spain'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((error) => {
//       console.log('Error: ', error)
//   })

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was remove')
// }). catch((error) => {
//     console.log('Error: ', error)
// })

// database.ref().update({
//     name: 'Ignacio',
//     age: 27,
//     isSingle: null,
//     job: 'VFX Especialist',
//     location: {
//         city: 'Vancouver',
//         country: 'Canada'
//     }
// })
