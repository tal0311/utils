const state={
todos:[]
}

progressPercentage(state)
progressPercentage({ todos }) {
      if (!todos) return
      const doneTodosCount = todos.reduce((acc, todo) => {
        if (todo.isDone) acc++
        return acc
      }, 0)
      return (doneTodosCount / todos.length) * 100
    },
