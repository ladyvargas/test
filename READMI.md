# Score Calculator API

A Node.js REST API that calculates scores based on specific rules for arrays of numbers.

## Rules
The API calculates a total score based on the following rules:
1. Add 1 point for every even number in the array
2. Add 3 points for every odd number in the array, except for the number "5"
3. Add 5 points every time the number "5" appears in the array

## Installation

1. Clone the repository
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory (optional)
```
PORT=3000
NODE_ENV=development
```

4. Start the server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Documentation

### Calculate Score
Calculate the score for an array of numbers based on the specified rules.

**Endpoint:** POST `/api/calculate-score`

**Request Body:**
```json
{
  "numbers": [1, 2, 3, 4, 5]
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "numbers": [1, 2, 3, 4, 5],
    "score": 13
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Se requiere un array de números en el campo 'numbers'"
}
```

### Health Check
Check if the API is running.

**Endpoint:** GET `/api/health`

**Success Response (200):**
```json
{
  "status": "OK",
  "timestamp": "2025-01-28T12:00:00.000Z"
}
```

## Example Usage

Using curl:
```bash
# Calculate score
curl -X POST http://localhost:3000/api/calculate-score \
-H "Content-Type: application/json" \
-d '{"numbers": [1, 2, 3, 4, 5]}'

# Health check
curl http://localhost:3000/api/health
```

Using JavaScript fetch:
```javascript
// Calculate score
fetch('http://localhost:3000/api/calculate-score', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    numbers: [1, 2, 3, 4, 5]
  })
})
.then(response => response.json())
.then(data => console.log(data));

// Health check
fetch('http://localhost:3000/api/health')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Running Tests
```bash
npm test
```