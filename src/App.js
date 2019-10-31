import React from 'react';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import { Provider} from 'react-redux' 
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 65000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
	<Provider store = {store}>
		<AppRouter />
	</Provider>
)

function App() {
	return (
		<div className="App">
			{jsx}
		</div>
	);
}

export default App;
