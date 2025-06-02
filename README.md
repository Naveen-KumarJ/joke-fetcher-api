# 🤣 Joke Fetcher API

A simple Express-based API that fetches random jokes based on category using the [Jokes Always API](https://rapidapi.com/matheusfilipi/api/jokes-always) from RapidAPI.

---

## 📌 Features

- Fetch jokes by category
- Built with Express.js
- Uses Axios for API requests
- Supports CORS for frontend usage
- Error handling for invalid routes or API errors

---

## 🚀 API Endpoints

All endpoints are prefixed with `/api/jokes`.

| Method | Route                     | Description                      |
|--------|---------------------------|----------------------------------|
| GET    | `/api/jokes/random`       | Returns a random joke            |
| GET    | `/api/jokes/dark`         | Returns a dark joke              |
| GET    | `/api/jokes/office`       | Returns an office joke           |
| GET    | `/api/jokes/relationship` | Returns a relationship joke      |

#### ❌ Invalid Route

Returns a `404` JSON response:
```json
{
  "message": "Only /random, /dark, /office, and /relationship routes are available"
}
```

## ⚙️ Setup and Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/joke-fetcher-api.git
cd joke-fetcher-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add Environment Variables
Create a .env file in the root directory:
```
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=jokes-always.p.rapidapi.com
```
You can get your credentials by subscribing to Jokes Always API.

### 4. Start the Server
```bash
npm start
```
Or manually:
```bash
node app.js
Server runs at:
```
```bash
http://localhost:8080/api/jokes/random
```
## 🛡️ CORS Support
This API supports Cross-Origin Resource Sharing (CORS), so it can be used directly from any frontend app.

## 📦 Project Structure
```bash
joke-fetcher-api/
├── routes/
│   └── jokes.js
├── services/
│   └── jokeService.js
├── .env
├── app.js
├── package.json
└── README.md
```

## 👤 Author
Your Name – @Naveen-KumarJ