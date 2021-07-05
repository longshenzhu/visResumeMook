import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import RcReduxModel from 'rc-redux-model';

//👇引入model
import globalModel from "./globalModel";

//👇调用RcReduxModel 实例化一下；得到最后的reduxModel
const reduxModel = new RcReduxModel([globalModel]);

//
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
