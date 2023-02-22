import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component"; //import component that consumes the data
import hello from "./reducers/hello"; //import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer"; //import new reducer
// import {createStore} from "redux"; //import createStore to store data from reducers
import {configureStore} from '@reduxjs/toolkit'; //instead of createStore, import configureStore function
import Todos from "./todos-component"; //import new component to render todos
import {Provider} from "react-redux"; //import Provider which will deliver the data
const store = configureStore({  //combine all reducers into single store
    reducer: {hello, todos} //each available through these namespaces
});


const ReduxExamples = () => {
  return(
    <Provider store={store}>  {/*Provider delivers data in store to child elements */}
     <div>
       <h2>Redux Examples</h2>
       <HelloReduxExampleComponent/> {/* component consumes the data*/}
       <Todos/> {/*render todos component*/}
     </div>
   </Provider>
  );
};

export default ReduxExamples;