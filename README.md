# 🔧 User CRUD Module

This project provides a **CRUD (Create, Read, Update, Delete)** interface for user management using **HTML**, **CSS**, and **JavaScript**, integrated with **Firebase** for backend services.

## 📂 Project Structure

```
pages/
└── home/
    └── CRUD/
        ├── index.html
        ├── index.js
        ├── usuario-create.html
        └── usuario-create.js
```

## 📌 Introduction

This module is part of a larger web application, focusing on **user CRUD operations**. It allows the user to:

* Create new users
* View existing users
* Update user data
* Delete users

All operations are connected to **Firebase** for authentication and data persistence.

## 📚 Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Dependencies](#dependencies)
* [Configuration](#configuration)
* [Examples](#examples)
* [Troubleshooting](#troubleshooting)
* [License](#license)

---

## 🚀 Installation

1. Clone this repository:

   ```bash
   git clone https://your-repo-url.git
   ```
2. Ensure Firebase is set up in your project.
3. Include Firebase scripts in your HTML files or via `firebase-init.js`.
4. Place the contents inside your project’s `pages/home/CRUD` directory.

---

## 🧩 Usage

* Open `index.html` to see the list of users.
* Use `usuario-create.html` to create or update user data.
* JavaScript logic is in:

  * `index.js` for listing and managing users
  * `usuario-create.js` for creating and updating user entries

---

## ✨ Features

* Firebase-powered real-time database support
* Create, Read, Update, Delete operations
* Modular structure (each operation has its own file)
* Clean UI with basic HTML/CSS

---

## 📦 Dependencies

* Firebase JavaScript SDK
* HTML5 & CSS3
* Vanilla JavaScript

You can configure Firebase in `firebase-init.js`.

---

## ⚙️ Configuration

Update your Firebase config inside `firebase-init.js` like this:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

---

## 💡 Examples

* Navigate to `/CRUD/index.html` to view users
* Go to `/CRUD/usuario-create.html` to add or modify users

---

## 🛠️ Troubleshooting

* **Firebase not loading?**

  * Double-check your Firebase config and script includes
* **No data showing?**

  * Ensure database rules allow read/write
  * Check Firebase console for errors or restrictions

---

## 👥 Contributors

This module was developed by the project team. Contributions welcome via pull requests.

---

## 📝 License

This project is licensed under the MIT License. See `LICENSE` file for more details.

---

Let me know if you'd like this README tailored further for your **entire project**, not just the CRUD module.
