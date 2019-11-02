import React from 'react';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter, {history} from './routers/AppRouter';
import { Provider} from 'react-redux' 
import configureStore from './store/configureStore'
import {firebase} from './firebase/firebase'
import {startSetExpenses} from './actions/expenses'
import {login, logout} from './actions/auth'


const store = configureStore();

const jsx = (
	<Provider store = {store}>
		<AppRouter />
	</Provider>
)



firebase.auth().onAuthStateChanged((user) => {
	if(user){
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpenses())
		if(history.location.pathname === '/'){
			history.push('/dashboard')
		}
		
	}else {
		store.dispatch(logout())
		store.dispatch(startSetExpenses())
		history.push('/')
	}
})

function App() {
	return (
		<div className="App">
			{jsx}
		</div>
	);
}

export default App;
