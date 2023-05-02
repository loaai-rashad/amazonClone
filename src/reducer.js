export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
        return{ 
           ...state,
        basket: [...state.basket, action.item],
    };
        case 'REMOVE_FROM_BASKET':
        //logic for removing from basket 

        // we cloned the basket
          let newBasket = [...state.basket];

          //we check to see if product exists 
          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
 
          if (index >= 0) {
           // item exists in basket, remove it 
            newBasket.splice(index, 1);

          } else{
            console.warn(
                `Cant remove product (id: ${action.id}) as it's not on basket `
            );
          }


        return{ ...state, basket: newBasket };
        default:
          return state; 
    }
}

export default reducer;