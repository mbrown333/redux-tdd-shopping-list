import React from 'react'
import AddItem from '../containers/AddItem'
import ShoppingItemListContainer from '../containers/ShoppingItemListContainer'
import ShoppingListFilter from '../containers/ShoppingListFilter'

const App = () => (
    <div>
        <AddItem />
        <ShoppingItemListContainer />
        <ShoppingListFilter />
    </div>
)

export default App