import { createContext,useState} from "react";

export const CartContext = createContext()

export const CartCustomProvider=({children})=>{
  const [cartBuy,setCartBuy]=useState([])

  const addToBuyCart =(item)=>{
      setCartBuy([...cartBuy,item])
  }

  const isInCart=(id)=>{
    return cartBuy.some((prod)=>prod.id===id)
  }
  
  const totalItemsCart=()=>{
    return cartBuy.reduce ((total,prod)=>total+prod.cantidad,0)
  }

  const totalItemsPrice=()=>{
    return cartBuy.reduce ((totalPrice,prod)=>totalPrice+(prod.cantidad*prod.precio),0)
  }

  const clearCart=()=>{
    setCartBuy([])
  }

  const removeItem=(id)=>{
    setCartBuy(cartBuy.filter((prod)=>prod.id!==id))
  }

  return(
      <CartContext.Provider value={{cartBuy,addToBuyCart,isInCart,totalItemsCart,totalItemsPrice,clearCart,removeItem}}>
          {children}
      </CartContext.Provider>

  )

}