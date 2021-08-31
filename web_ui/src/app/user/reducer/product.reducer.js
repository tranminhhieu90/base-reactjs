import {
    LOAD_PRODUCT,
} from '../constants/common';

const INIT_STATE =
{
    product: null
};

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOAD_PRODUCT:
            state = {
                ...state, product: action.product
            };
            return state

        default: return state;
    }
};

export default productReducer;
