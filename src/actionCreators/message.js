import {ADD,DELETE} from '../constants'

const addMessage= message=>{
	return {type: ADD, message}
}

const deleteMessage= index=>{
	return {type: DELETE, index}
}
 
export {addMessage, deleteMessage}
export default ''