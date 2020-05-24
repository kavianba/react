export const addItem = function(text) {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: Date.now(),
      value: text,
      completed: false
    }
  }
}

export const markAsComplete = function(id, items) {
  const elementsIndex = items.findIndex(item => item.id == id )
  let newArray = [...items]

  newArray[elementsIndex] = {...newArray[elementsIndex], completed: true}

  return {
    type: 'MARK_COMPLETE',
    payload: newArray
  };
}

export const markAsUnComplete = function(id, items) {
  const elementsIndex = items.findIndex(item => item.id == id )
  let newArray = [...items]

  newArray[elementsIndex] = {...newArray[elementsIndex], completed: false}

  return {
    type: 'MARK_UNCOMPLETE',
    payload: newArray
  };
}

export const filterItem = function(filter) {
  return {
    type: 'FILTER',
    payload: filter
  }
}