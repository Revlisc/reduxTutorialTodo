import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false },
    { activity: 'Second ToDo', complete: true },
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CLEAR_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }
    case ActionTypes.CREATE_TASK:
      // TASK implement the final action type
      return {...state, todo: [...state.todo, action.payload]}
    case ActionTypes.DELETE_TASKS:
      return {todo: []}
    case ActionTypes.DELETE_ONE:
      //const start = state.todo.slice(0, action.payload);
      //const end = state.todo.slice(action.payload + 1);
      //const final = start.concat(end);
      return {
        ...state,
        todo: state.todo.filter((item, idx) => idx !== action.payload)
        
      }
    default:
      return state
  }
}
