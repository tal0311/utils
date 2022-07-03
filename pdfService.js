const PDFDocument = require('pdfkit')
const fs = require('fs')

function buildPDF(animals, filename = 'SaveTheAnimals.pdf') {
  // Create a document
  console.log(animals)
  const doc = new PDFDocument()
  animals.forEach((animal) => {
    doc.pipe(fs.createWriteStream(filename))
    doc.image(`./${animal.name}.png`, {
      fit: [450, 550],
      align: 'center',
      valign: 'center',
    })
    doc
      .fontSize(48)
      .text(animal.name, 100, 100)
      .underline(100, 120, 400, 40, { color: '#333' })
    doc.addPage()
  })
  doc.end()
}

module.exports = {
  buildPDF,
}
