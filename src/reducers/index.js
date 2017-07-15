import { combineReducers } from 'redux'
import shoppingList from './shoppingList'
import listFilter from './listFilter'

const shoppingListApp = combineReducers({
  items: shoppingList,
  filter: listFilter
})

export default shoppingListApp