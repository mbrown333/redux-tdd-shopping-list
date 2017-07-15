const shoppingList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
          return [
            ...state,
            {
              id: action.id,
              item: action.item,
              done: false
            }
          ]
        case 'MARK_ITEM_DONE':
          return state.map(item => {
            if (item.id === action.id) {
              return {
                ...item,
                done: !item.completed
              }
            } else {
              return item
            }
          })
        default:
            return state
    }
}

export default shoppingList