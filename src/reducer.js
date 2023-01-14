// reducer just listening what actions are dispatched into data layer
export const initialState={
    basket:[],
    user:null
}
export const getBasketTotal=(basket)=>{
    return basket?.reduce((amount,item)=>item.price+amount,0);
}

export const reducer=(state,action)=>{
    console.log(state)
    switch(action.type){
        case'add-to-basket': 
           return {
            ...state,
            basket:[...state.basket,action.item]
           }
        case'remove-from-basket':
           const index= state.basket.findIndex((basketItem)=> basketItem.id==action.id)
           let newBasket=[...state.basket]
           if(index>=0){
            newBasket.splice(index,1)
           }else{
            console.warn(`can't remove product (id:${action.id}) as its not in basket`)
           }
           return {
            ...state,
            basket:newBasket
           }
        default:
            return state;
    }
}

