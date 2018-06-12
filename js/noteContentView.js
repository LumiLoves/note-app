
class NoteContentView {
  constructor({ wrapperElem }) {
    this.wrapperElem = wrapperElem;
  }
  init(contentData) {
    (contentData)? this.render(contentData) : this.reset();
  }
  render(contentData) {
    const html = this._makeHtml(contentData);
    this.wrapperElem.innerHTML = html;
  }
  reset() {
    this.wrapperElem.innerHTML = '';    
  }
  _makeHtml(noteItem) {
    return `
      <div class="content_top">
        <p class="user_name ellipse">${noteItem.sender}</p>
        <p class="send_date">${noteItem.date}</p>
        <h1 class="mail_title ellipse">${noteItem.title}</h1>
      </div>
      <div class="content_bottom">${noteItem.content}</div>
    `;
  }
}