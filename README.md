# 🚀 PathFinder Backend

## 📌 Overview

PathFinder Backend is the server-side application that powers the PathFinder Route Optimization Platform.

It provides:

* User Authentication
* JWT Authorization
* Route Calculation APIs
* Route History Management
* PostgreSQL Database Integration
* Dijkstra Algorithm Implementation

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* JWT (JSON Web Token)
* bcrypt

### Algorithm

* Dijkstra's Shortest Path Algorithm

---

## ✨ Features

### Authentication

* User Registration
* User Login
* Protected Routes

### Route Optimization

* Shortest Path Calculation
* Distance Calculation
* Path Reconstruction

### Route History

* Save Route History
* Fetch Previous Routes

### Database

* PostgreSQL Integration
* Persistent Storage

---

## 🚀 Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pathfinder
JWT_SECRET=your_secret_key
```

### Start Server

```bash
node server.js
```

---

## 📡 API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Routes

* POST `/api/routes/calculate-route`

### History

* GET `/api/history`

### Protected

* GET `/api/profile`

---

## 🧠 Algorithm Used

### Dijkstra Algorithm

Used to calculate:

* Shortest Distance
* Optimal Path
* Route Reconstruction

Example Output:

```json
{
  "distance": 5,
  "path": ["A", "C", "D"]
}
```

---

## 📚 Key Learnings

* REST API Development
* JWT Authentication
* PostgreSQL Integration
* Route Optimization Algorithms
* Backend Architecture
* Database Design

---

## 👨‍💻 Author

**Mohammed Yehaya**

Backend developed as part of the PathFinder Full Stack Route Optimization Platform.
