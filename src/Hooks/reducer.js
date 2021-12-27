
const actions={
    GET_TODO_REQUEST: "GET_TODO_REQUEST",
    GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
    GET_TODO_FAILURE: "GET_TODO_FAILURE",
    ADD_TODO: "ADD_TODO",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    TOGGLE_TODO_ITEM: "TOGGLE_TODO_ITEM"
}


export const reducer=(state,action)=>{

    switch(action.type){
        case actions.GET_TODO_REQUEST: {
            return {
              ...state,
              isLoading: true
            };
          }
          case actions.GET_TODO_SUCCESS: {
            return {
              ...state,
              todo: action.payload.todo,
              isLoading: false
            };
          }
          case actions.GET_TODO_FAILURE: {
            return {
              ...state,
              isLoading: false,
              isError: true
            };
          }

        case actions.ADD_TODO:{
            return{
                ...state,
                todo: [...state.todo,action.payload]
            }
        }
        case actions.REMOVE_TODO_ITEM:{
            return{
                ...state,
                todo: state.todo.filter((item)=> item.id !== action.payload?.id)
            }
        }
        case actions.TOGGLE_TODO_ITEM: {
            return{
                ...state,
                todo: state.todo.map((item)=> 
                item.id === action.payload.id 
                ? {...item , status : !item.status}: item)
            }
        }
        default:
            return state;
    }
}