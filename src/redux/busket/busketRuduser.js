const defaultState = {
  basket :  [],
  // total:0
}

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const SUM_INITIALIZATION = 'SUM_INITIALIZATION'
export const TOTAL_INCREMENT = 'TOTAL_INCREMENT'




export const basketReducer = (state = defaultState,action)=>{
switch (action.type) {
    // case SUM_INITIALIZATION:
    //   return{...state, total:action.payload}
    case ADD_PRODUCT:
        const addProduct =()=>{
            const productId = action.payload.id;
            console.log(state.basket,'user' ,action.payload);
            const hasId = state.basket.find((product) => product.id === productId);
            if (hasId === undefined) {
              return [...state.basket, action.payload]
            }
            if (hasId !== undefined) {
              return [...state.basket];
            }
        }
        return {
            ...state,
            basket:addProduct(),
            // total:state.total + action.payload.price
        }
    case REMOVE_PRODUCT:
      return {...state, basket: state.basket.filter(product=> product.id !== action.payload.id)}
    case TOTAL_INCREMENT:
      return {...state, total: state.total}
     

    default:
      return state
}}

export const addProductAction = (payload) =>({type:ADD_PRODUCT, payload})
export const removeProductAction = (payload) =>({type:REMOVE_PRODUCT, payload})
export const sumInitialAction = (payload) =>({type:SUM_INITIALIZATION, payload})
// export const total = (payload) =>({type:SUM_INITIALIZATION, payload})