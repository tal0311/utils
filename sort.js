// var gSortBy = { rate: -1, name: 1, price: 1 }
// sortBy(books, gSortBy)

function sortBy(items, sortBy,) {
    if (!Object.keys(sortBy).length) return
    Object.keys(sortBy).forEach((key) => {
        // [rate, name, price]
        const isInts = ['price', 'rate']
        isInts.includes(key)
            ? items.sort((a, b) => (a[key] - b[key]) * sortBy[key])
            : items.sort((a, b) => a[key].localeCompare(b[key]) * sortBy[key])
    })
}

// var gSortBy = { key: 'rate', dir: -1 }
function sortBy(items, sortBy,) {
    if (!sortBy.key) return
    const isInts = ['price', 'rate']
    isInts.includes(key)
        ? items.sort((a, b) => (a[sortBy.key] - b[sortBy.key]) * sortBy.dir)
        : items.sort((a, b) => a[sortBy.key].localeCompare(b[sortBy.key]) * sortBy.dir)
}
