import {
    ADD_CART,
} from '../constants/common';

const INIT_STATE =
{
    toggle: true
};

const orderReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CART:
            state = {
                toggle: !INIT_STATE.toggle
            };
            return state

        default: return state;
    }
};

export default orderReducer;
