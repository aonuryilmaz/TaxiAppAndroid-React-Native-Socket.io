import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import {createLogger} from 'redux-logger';

import createSocketIoMiddleware from 'redux-socket.io';

import io from 'socket.io-client/dist/socket.io';

let socket=io('http://10.0.2.2:3000',{jsonp:false});
let socketIoMiddleware=createSocketIoMiddleware(socket,"server/")

const log=createLogger({diff:true,collapsed:true})

export default (initialState={})=>{
    const middleware=[thunk,log,socketIoMiddleware];
    const enhancers=[];

    const store=createStore(makeRootReducer(),initialState,compose(
        applyMiddleware(...middleware),...enhancers)
    );
    return store;
}