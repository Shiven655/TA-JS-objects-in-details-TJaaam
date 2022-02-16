class Book {
    constructor(title, catagory, author, isRead, finishedDate) {
      this.title = title;
      this.catagory = catagory;
      this.author = author;
      this.isRead = isRead;
      this.finishedDate = finishedDate;
    }
    markBookAsRead(data = false) {
      return (this.isRead = data);
    }
    Date(data) {
      this.finishedDate = data;
      return this.finishedDate;
    }
  }