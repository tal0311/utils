function _creatNots() {
  let notes = utilService.loadFromStorage(STORAGE_KEY)
  if (!notes || !notes.length) {
    notes = []
    notes.push({
      id: 'n101',
      type: 'keepTxtCmp',
      isPinned: true,
      info: {
        title: 'my txt title',
        content: 'Fullstack Me Baby!',
      },
      style: {
        backgroundColor: '#ffffff',
      },
    })
    notes.push({
      id: 'n10000',
      type: 'keepTxtCmp',
      isPinned: false,
      info: {
        title: 'my txt title',
        content: 'Fullstack Me Baby!',
      },
      style: {
        backgroundColor: '#ffffff',
      },
    })
    notes.push({
      id: 'n102',
      type: 'keepVideoCmp',
      info: {
        title: 'my video title',
        content: 'https://www.youtube.com/embed?v=gThS-KfIxOs&t=2599s',
      },
      style: {
        backgroundColor: '#ffffff',
      },
    })
    notes.push({
      id: 'n103',
      type: 'keepImgCmp',
      info: {
        title: 'img title',
        content: 'https://source.unsplash.com/random/200x200',
      },
      style: {
        backgroundColor: '#ffffff',
      },
    })
    notes.push({
      id: 'n104',
      type: 'keepTodoCmp',
      info: {
        label: 'Get my stuff together',
        todos: [
          { txt: 'Driving liscence', doneAt: null },
          { txt: 'Coding power', doneAt: 187111111 },
        ],
      },
      style: {
        backgroundColor: '#ffffff',
      },
    })

    utilService.saveToStorage(STORAGE_KEY, notes)
  }
  return notes
}
