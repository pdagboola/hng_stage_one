# Express API Boilerplate

A simple Express API that returns the current date and a predefined email.

## 🚀 Features

- Express.js backend
- Modular file structure
- Date formatting helper
- Basic error handling

## 📂 Project Structure

```
📦 project-root
 ┣ 📂 controllers
 ┃ ┗ 📜 indexController.js
 ┣ 📂 helpers
 ┃ ┗ 📜 formatDate.js
 ┣ 📂 routes
 ┃ ┗ 📜 index.js
 ┣ 📜 app.js
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## 🛠 Setup Instructions

### **1️⃣ Install Dependencies**

```sh
npm install
```

### **2️⃣ Run the Server**

```sh
node app.js
```

Your app will run at `http://localhost:3030`.

### **3️⃣ API Endpoints**

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/home`  | Returns current date & email |

### **4️⃣ Sample Response**

```json
{
  "success": true,
  "data": {
    "email": "pdagboola@gmail.com",
    "current_datetime": "2025-01-31T12:00:00.000Z"
  }
}
```

## 📝 Notes

- You can customize the email inside `indexController.js`.
- To deploy, set `PORT` as an environment variable.

## 📜 License

This project is open-source under the MIT License.
