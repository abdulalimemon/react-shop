import axios from 'axios';
import { useEffect, useContext, createContext, useReducer } from 'react';
import reducer from '../reducer/ProductReducer';

const AppContext = createContext();

const API = 'products.json';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: 'SET_LOADING'});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: 'SET_API_DATA', payload: products });
        } catch (error) {
            dispatch({ type: 'SET_API_ERROR'});
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };