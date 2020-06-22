var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      return "worked!"
    }
  }
}
function testNotesHasText() {
  var notes = new Notes("Something")
  assert.isTrue(notes.text === "Something" )
}
testNotesHasText()