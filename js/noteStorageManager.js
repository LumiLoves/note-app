
class noteStorageManager {
  // highlight
  getHighlightItem() {
    return localStorage.getItem('note-highlight-id');
  }
  saveHighlightItem(id) {
    localStorage.setItem('note-highlight-id', id);
  }

  // removed item
  getRemovedItems() {
    return JSON.parse(localStorage.getItem('note-removed-items'));
  }
  saveRemovedItem(id) {
    const currentItems = this.getRemovedItems() || [];
    currentItems.push(id);
    localStorage.setItem('note-removed-items', JSON.stringify(currentItems));    
  }
}

