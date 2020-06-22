function testListReturnsNotes() {
  var listNotes = new ListNotes()
  console.log(listNotes.list)
  assert.isTrue(Array.isArray(listNotes.list))
}
testListReturnsNotes()
