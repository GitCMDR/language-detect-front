import { IDENTIFY_TEXT } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case IDENTIFY_TEXT:
            return [ action.payload.data, ...state ];
    }

    return state;
}