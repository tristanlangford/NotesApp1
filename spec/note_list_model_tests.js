function testListReturnsNotes() {
  console.log("testListReturnsNotes")
  var listNotes = new ListNotes()
  assert.isTrue(Array.isArray(listNotes.list))
}

function testCreateAndStoreNote() {
  console.log("testCreateAndStoreNote")
  var listNotes = new ListNotes()
  listNotes.createNote("new note")
  assert.isTrue(listNotes.list[0].text === 'new note')
}


testListReturnsNotes()
testCreateAndStoreNote()