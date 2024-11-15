# 📚 Education App API Documentation

## 🔍 Overview

The Educ App API is a RESTful service for managing educational content and users. Built with Express.js and Firebase Firestore, it provides secure endpoints for schools, courses, and user management.

## 📋 Table of Contents

- [Setup & Installation](#setup--installation)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [API Endpoints](#api-endpoints)
  - [Schools](#schools)
  - [Education Levels](#education-levels)
  - [Subjects](#subjects)
  - [Users](#users)
  - [Lessons](#lessons)

## 🚀 Setup & Installation

### Prerequisites

- Node.js and npm
- Firebase project with Firestore and Authentication
- Firebase Admin SDK service account

### Quick Start

1. **Clone & Install**
```bash
git clone <repository_url>
cd <project_folder>
npm install
```

2. **Environment Setup**
Create `.env` file:
```env
PORT=5000
FIREBASE_PROJECT_ID=your-firebase-project-id
FIREBASE_CLIENT_EMAIL=your-firebase-client-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
```

3. **Start Server**
```bash
# Development
npm run dev

# Production
npm start
```

## 🔐 Authentication

All endpoints require Firebase Authentication token.

**Header Format:**
```http
Authorization: Bearer YOUR_FIREBASE_ID_TOKEN
```

## ⚠️ Error Handling

Standard error responses:

```json
{
  "error": "Error message here"
}
```

**Status Codes:**
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## 🎯 API Endpoints

### Schools

#### Create School
`POST /api/schools`

*Request:*
```json
{
  "name": "Springfield High School",
  "address": "123 Main St, Springfield",
  "contactInfo": {
    "phone": "123-456-7890",
    "email": "contact@springfieldhigh.edu"
  }
}
```

#### Get Schools
`GET /api/schools`

### Education Levels

#### Create Level
`POST /api/levels`

*Request:*
```json
{
  "schoolId": "schoolId",
  "name": "Grade 1",
  "description": "First grade level",
  "order": 1
}
```

### Subjects

#### Create Subject
`POST /api/subjects`

*Request:*
```json
{
  "levelId": "levelId",
  "name": "Mathematics",
  "description": "Basic mathematics"
}
```

### Users

#### Create User
`POST /api/users`

*Request:*
```json
{
  "email": "user@example.com",
  "role": "student",
  "schoolId": "schoolId",
  "displayName": "John Doe"
}
```

### Lessons

#### Create Lesson
`POST /api/lessons`

*Multipart Form Data:*
- `files`: Multiple file uploads (PDFs, videos)
- `subjectId`: Subject ID
- `levelId`: Level ID
- `tutorId`: Tutor ID
- `title`: Lesson title
- `description`: Lesson description
- `order`: Sort order

*Response:*
```json
{
  "id": "lessonId",
  "title": "Lesson Title",
  "description": "Lesson Description",
  "content": [
    {
      "type": "pdf",
      "url": "https://firebase-storage-url/file1.pdf"
    },
    {
      "type": "video",
      "url": "https://firebase-storage-url/file2.mp4"
    }
  ],
  "createdAt": "timestamp"
}
```

## 📝 Notes

- All timestamps are in ISO 8601 format
- File uploads are stored in Firebase Storage
- API version: v1
- Rate limits: 100 requests per minute

---

*For detailed error codes and response schemas, please refer to our [Error Documentation](./errors.md).*
