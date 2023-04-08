async function query(filterBy = { txt: "" }, sort = { sortBy: "", dir: 1 }) {
  try {
    let todos = gTodos
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, "i")
      todos = gTodos.filter((t) => regex.test(t.title))
    }
    if (sort.sortBy) {
      sortTodos(todos, { ...sort })
    }
    return Promise.resolve(todos)
  } catch (error) {
    console.log(error)
  }
}

const TodoType = {
  id: "1",
  title: "delectus aut autem",
  completed: false,
  createdAt: 1680986111714,
  category: "critical"
}

function sortTodos(todos, { sortBy, dir }) {
  console.log(typeof TodoType[sortBy])

  if (!(sortBy in TodoType)) {
    throw new Error(`Invalid sort key: ${sortBy}`)
  }
  typeof TodoType[sortBy] !== "string"
    ? todos.sort((t1, t2) => t1[sortBy] - t2[sortBy] * dir)
    : todos.sort((t1, t2) => t1[sortBy].localeCompare(t2[sortBy]) * dir)
}
