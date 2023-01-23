import axios from 'axios';
import { useEffect, useContext, createContext } from 'react';

const AppContext = createContext();

const API = 'products.json';

const AppProvider = ({ children }) => {

    const getProducts = async(url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value='emon'>
            {children}
        </AppContext.Provider>);
};

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };