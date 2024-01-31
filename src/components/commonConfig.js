import { useReducer, useContext, createContext } from 'react';

function reducer(state, action) {
    if (action.type === 'setBackgroundColor') {
        console.log(action);
        return {
            color: action.payload.color,
        };
    }
    throw Error('Unknown action.');
}

export function useCustomParams() {
    const [state, dispatch] = useReducer(reducer, { color: 'light' });
    return [state, dispatch];
}

export const ThemeContext = createContext(null);
