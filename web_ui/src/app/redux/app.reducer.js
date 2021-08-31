import { combineReducers } from 'redux';
import orderReducer from "../user/reducer/order.reducer";
import productReducer from "../user/reducer/product.reducer";
const rootReducer = combineReducers({
    orderReducer, productReducer
});
export default rootReducer;
