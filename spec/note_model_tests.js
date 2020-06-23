function testNotesHasText() {
  console.log("testNotesHasText")
  var notes = new Notes("Something")
  assert.isTrue(notes.text === "Something" )
}
testNotesHasText()
