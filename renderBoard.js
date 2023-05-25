
function renderBoard(board) {
 // console.log('board:', board
 var strHTML = ''
 for (var i = 0; i < board.length; i++) {
  strHTML += '<tr>'
  for (var j = 0; j < board.length; j++) {
   var cell = board[i][j]
   var className = 'cell cell' + i + '-' + j
   strHTML += `<td onclick="onCellClicked(${i}, ${j})" class="${className}">${cell.content}</td>`
  }
  strHTML += '</tr>'

 }
