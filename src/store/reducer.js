
const createReducer = handlers => (state, action) => {
    if (!handlers.hasOwnProperty(action.type)) {
      return state;
    }
  
    return handlers[action.type](state, action);
  };
  
  const user={
      setUser(state,action){
        localStorage.setItem('userdata',JSON.stringify(action.payload))
          return {
              ...state,
              user:action.payload
          }
      },
      removeUser(state,action){
        localStorage.removeItem('userdata')
        return {
          ...state,
          user:action.payload
      }
      }
  }
  export default createReducer({
    'setUser': user.setUser,
    'removeUser':user.removeUser
  });
  