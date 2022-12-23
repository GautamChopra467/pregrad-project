import {configureStore} from "@reduxjs/toolkit" ;
import healthReducer from "./reducers";

const store = configureStore({
    reducer : healthReducer
})

export default store ;