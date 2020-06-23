function testPageHasNotes() {
    console.log("testPageHasNotes")
    var noteController = new NoteController(new ListNotes())
    noteController.addNotesToView()
    var html = "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
    assert.isTrue(document.getElementById("app").innerHTML === html )
  }
  testPageHasNotes()