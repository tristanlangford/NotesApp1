function NoteController(noteListModel) {
    this._noteListModel = noteListModel;
    this._noteListModel.createNote("Favourite drink: seltzer");
    this._noteListView = new NoteListView(this._noteListModel)
}

NoteController.prototype.addNotesToView = function() {
    document.getElementById("app").innerHTML = this._noteListView.viewList()
}

