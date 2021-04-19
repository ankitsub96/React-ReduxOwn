import {ADD,DELETE} from '../constants'

const messageReducer=( state=[], action)=>{
	switch(action.type){
		case ADD: return [...state, action.message];
		case DELETE: return [...state.slice(0,action.index),...state.slice(action.index+1)];
		case 'RESET': return [];
		default: return state
	}
}
export {messageReducer}
export default ``