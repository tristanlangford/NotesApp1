function testNotesTextGetFormatted() {
    console.log("testNotesTextGetFormatted")
    var viewModel = new NoteListView(new ListNotes())
    viewModel.addNote("something")
    var html = "<ul><li><div>something</div></li>"
    assert.isTrue(viewModel.viewList() === html )
  }
  testNotesTextGetFormatted()

  function testNotesTextGetFormattedNoNotes() {
    console.log("testNotesTextGetFormattedNoNotes")
    var viewModel = new NoteListView(new ListNotes())
    var html = "<ul><li><div>Notes Empty</div></li>"
    assert.isTrue(viewModel.viewList() === html )
  }
testNotesTextGetFormattedNoNotes()

function testNotesTextGetFormattedMoreThanOne() {
    console.log("testNotesTextGetFormattedMoreThanOne")
    var viewModel = new NoteListView(new ListNotes())
    viewModel.addNote("something")
    viewModel.addNote("something else")
    var html = "<ul><li><div>something</div></li><ul><li><div>something else</div></li>"
    assert.isTrue(viewModel.viewList() === html )
  }
  testNotesTextGetFormattedMoreThanOne()