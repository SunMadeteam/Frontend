const defaultState = {
    favorite :  [],
  }
  
  export const ADD_FAVORITE = 'ADD_FAVORITE'
  export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
  
  export const favoriteReducer = (state = defaultState,action)=>{
  switch (action.type) {

      case ADD_FAVORITE:
          const addFavorite =()=>{
              const productId = action.payload.id;
              console.log(state.bas,'user' ,action.payload);
              const hasId = state.favorite.find((product) => product.id === productId);
              if (hasId === undefined) {
                return [...state.favorite, action.payload]
              }
              if (hasId !== undefined) {
                return [...state.favorite];
              }
          }
          return {
              ...state,
              favorite:addFavorite(),
          }
      case REMOVE_FAVORITE:
        return {...state, favorite: state.favorite.filter(product=> product.id !== action.payload)}
 
      default:
        return state
  }}
  
  export const addFavoriteAction = (payload) =>({type:ADD_FAVORITE, payload})
  export const removeFavoriteAction = (payload) =>({type:REMOVE_FAVORITE, payload})