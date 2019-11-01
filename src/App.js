import React from 'react';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import { Provider} from 'react-redux' 
import configureStore from './store/configureStore'
import './firebase/firebase'
import {startSetExpenses} from './actions/expenses'


const store = configureStore();

const jsx = (
	<Provider store = {store}>
		<AppRouter />
	</Provider>
)
store.dispatch(startSetExpenses())

function App() {
	return (
		<div className="App">
			{jsx}
		</div>
	);
}

export default App;
