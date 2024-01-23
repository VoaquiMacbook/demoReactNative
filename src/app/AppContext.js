import React, { useState, useContext, createContext } from 'react'

// tạo context
export const AppContext = createContext()
// tạo dữ liệu dùng chung cho app
export const AppProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [cart, setCart] = useState([]);
    return (
        <AppContext.Provider value={{ isLogin, setIsLogin, cart, setCart }}>
            {props.children}
        </AppContext.Provider>
    )
}
