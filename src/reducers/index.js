import { combineReducers } from 'redux';
import user from './user';
import expensesUser from './wallet';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
const rootReducer = combineReducers({ user, expensesUser });

export default rootReducer;
