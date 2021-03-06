import {ADD_TO_CART,REMOVE_TO_CART} from "../constants/cartConstants"
 
export const addToCartReducer=(state={cartItems:[]},action)=>{
    switch (action.type)
    {
        case ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartItems.find(x=>x.product===item.product)
             
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map(x=>x.product===item.product?item:x)
                }
            }
            else{
                return {...state,cartItems:[...state.cartItems,item]}
            }
        case REMOVE_TO_CART:
            return{
                ...state,cartItems:state.cartItems.filter((x)=>x.product!==action.payload)
            }  
        default:
            return state    
    }
}
