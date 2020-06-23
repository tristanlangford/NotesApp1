function NoteListView(NoteListModel) {
    this._noteListModel = NoteListModel
}

NoteListView.prototype.addNote = function(text) {
    this._noteListModel.createNote(text)
}

NoteListView.prototype.viewList = function() {
    var arrayOfNotes = [];
    if (this._noteListModel.list.length > 0) {
        this._noteListModel.list.forEach(note => {
            arrayOfNotes.push("<ul><li><div>" + note.text + "</div></li>")
        })
        return arrayOfNotes.join("")
    } else {
        return "<ul><li><div>Notes Empty</div></li>"
    }
}