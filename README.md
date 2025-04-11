# 📚 Book Directory API (Node.js & Express)

The **Book Directory API** is a simple RESTful API built with **Node.js** and **Express.js**. It allows users to manage a collection of books through basic **CRUD** (Create, Read, Update, Delete) operations.

Ideal for learning how to build APIs with Express, this project stores book information and can be tested using tools like **Postman**.

---

## ✨ Features

- 📖 **Get all books** in the directory  
- ➕ **Add a new book** with title, author, publisher, published date, and ISBN  
- 🔄 **Update book details** using its ISBN  
- 🗑️ **Delete a book** by its ISBN

---

## 📌 Installation & Setup

### ✅ Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/) (optional, for testing)

---

### 🛠️ Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/book-directory-api.git
   cd book-directory-api
Install Dependencies

bash
Copy
Edit
npm install
Start the Server

bash
Copy
Edit
npm start
The API will now run at:

arduino
Copy
Edit

🔗 API Endpoints
1️⃣ Get All Books
GET /books
Returns a list of all books in the directory.

2️⃣ Add a New Book
POST /books
Adds a new book to the collection.

Required Fields:

title

author

publisher

publishedDate

isbn

Example Request Body:

json
Copy
Edit
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "publishedDate": "1925-04-10",
  "isbn": "9780743273565"
}
3️⃣ Update a Book
PUT /books/:isbn
Updates the details of a book by its ISBN.

Example Request Body:

json
Copy
Edit
{
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald",
  "publisher": "Scribner",
  "publishedDate": "1925-04-10",
  "isbn": "9780743273565"
}
4️⃣ Delete a Book
DELETE /books/:isbn
Deletes a book from the collection using its ISBN.

⚙️ Useful Commands
Command	Description
npm install	Install all dependencies
npm start	Start the server
npm run dev	Start the server with Nodemon (dev)
👨🏽‍💻 Author
Nasiphi Siphesihle Ndzumo



