# Taskly

<p align="center">
  <img src="taskly.png" width="180" alt="Taskly Logo">
</p>

<h1 align="center">Taskly</h1>

<p align="center">
  Modern Full Stack Task Manager built with Django REST Framework & React.
</p>

---

## Features

- JWT Authentication
- Create, Edit and Delete Tasks
- Task Status Management
- Deadline Support
- Search Tasks
- Filter by Status
- Sort Tasks
- Responsive UI
- Loading States
- Empty State Animation
- Toast Notifications
- Delete Confirmation
- Automatic JWT Refresh
- Protected Routes

---

## Tech Stack

### Backend

- Django
- Django REST Framework
- PostgreSQL
- Simple JWT
- DRF Spectacular (Swagger)
- Django Filter

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Toastify
- Framer Motion
- Lucide Icons
- Lottie Animations

---

## Installation

### Clone repository

```bash
git clone https://github.com/RealRick37/taskly.git
cd taskly
```

---

### Backend

```bash
cd backend

python -m venv env
```

Windows

```bash
env\Scripts\activate
```

Linux/macOS

```bash
source env/bin/activate
```

Install packages

```bash
pip install -r requirements.txt
```

Run migrations

```bash
python manage.py migrate
```

Run server

```bash
python manage.py runserver
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file.

```
SECRET_KEY=your_secret_key

DEBUG=True

DB_NAME=task_manager
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

---

## API Documentation

Swagger:

```
http://127.0.0.1:8000/api/docs/
```

---

## Folder Structure

```
backend/

frontend/
```
