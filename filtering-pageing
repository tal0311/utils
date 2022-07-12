var state = {
  filterBy: {},
  todos: [],
  pageSize: 2,
  pageIdx:0
};

filteredTodos(state);

function filteredTodos({ filterBy, todos, pageSize, pageIdx }) {
  if (!todos) return;

  const regex = new RegExp(filterBy.title, "i");
  let filteredTodos = todos.filter((todo) => regex.test(todo.title));

  if (filterBy.isDone !== null) {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.isDone === filterBy.isDone
    );
  }

  if (filterBy.toSort) {
    filteredTodos.sort((t1, t2) => t1.title.localeCompare(t2.title));
  }
  console.log(filteredTodos);

// make sure to have pageIdx
  const startIdx = pageIdx * pageSize;

  filteredTodos = filteredTodos.slice(startIdx, startIdx + pageSize);
  console.log(filteredTodos);
  return filteredTodos;
}
