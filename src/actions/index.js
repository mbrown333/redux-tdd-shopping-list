let id = 0

export const addItem = (item) => ({
    type: 'ADD_ITEM',
    id: id++,
    item
})

export const markItemDone = (id) => ({
    type: 'MARK_ITEM_DONE',
    id
})

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter
})