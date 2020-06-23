function ListNotes() {
  this.list = []
};

ListNotes.prototype.list = function() {
  return this.list
};

ListNotes.prototype.createNote = function(text) {

  this.list.push(new Notes(text))
}
