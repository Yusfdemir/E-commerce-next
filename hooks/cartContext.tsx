"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useState ,useEffect} from "react";
import toast from "react-hot-toast";

interface CartContextProps{
    productCartQty:number
    addToBasket:(product:CardProductProps)=>void;
    removeFromCart:(product:CardProductProps)=>void;
    cartPrdcts:CardProductProps[] | null
}

const CartContext =createContext<CartContextProps | null>(null)

interface Props{
    [propName:string]:any
}

export const CartContextProvider = (props:Props)=>{

    const[productCartQty,setProductCartQty]=useState(0)
    const [cartPrdcts,setCartPrdcts]=useState<CardProductProps[] | null>(null)

    useEffect(() => {
      let getItem:any = localStorage.getItem("cart")
      let getItemParse:CardProductProps[] | null = JSON.parse(getItem)
      setCartPrdcts(getItemParse)
    }, [])
    
    const addToBasket = useCallback((product:CardProductProps)=>{
        setCartPrdcts(prew => {
            let updatedCart;
            if(prew){
                updatedCart=[...prew,product]
            }else{
                updatedCart=[product]
            }
            toast.success("Ürün Sepete Eklendi...")
            localStorage.setItem("cart",JSON.stringify(updatedCart))
            return updatedCart
        })
    },[cartPrdcts])

    const removeFromCart = useCallback((product:CardProductProps)=>{
        
    },[])
    
    let value= {
    productCartQty,
    addToBasket,
    removeFromCart,
    cartPrdcts
    }

    return (
        <CartContext.Provider value={value} {...props}/>
    )
}


const cartContext = () => {
    const context = useContext(CartContext)
    if(context == null){
        throw new Error("Bir hata durumu mevcut")
    }
    return context
}

export default cartContext