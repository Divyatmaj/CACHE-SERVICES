# Cache Services

A simple Express REST API for managing products, built with an in-memory caching layer that supports TTL expiry and automatic cache invalidation on writes.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express v5
- **Database**: JSON file (`db.json`) via `fs/promises`
- **Dev Tool**: Nodemon

## Project Structure

```
├── server.js                  # Entry point
├── db.json                    # Flat-file database
├── routes/
│   └── productRoutes.js       # URL → middleware → controller mapping
├── controllers/
│   └── productController.js   # Request/response handling
├── services/
│   └── productService.js      # Business logic
├── database/
│   └── db.js                  # File read/write operations
└── middleware/
    ├── cache.js               # In-memory cache with TTL
    └── invalidateCache.js     # Cache invalidation on writes
```

## Request Flow

```
Route → Middleware → Controller → Service → Database
```

## Caching Behaviour

- Cached responses are served with an `X-Cache: HIT` header
- Cache misses are served with an `X-Cache: MISS` header
- Each cache entry has a **1-minute TTL** — expired entries are re-fetched from the database
- Any successful `POST`, `PUT`, `PATCH`, or `DELETE` request clears the entire cache

## API Endpoints

| Method   | Endpoint          | Description         |
|----------|-------------------|---------------------|
| `GET`    | `/products`       | Get all products    |
| `GET`    | `/products/:id`   | Get product by ID   |
| `POST`   | `/products`       | Create a product    |
| `PUT`    | `/products/:id`   | Replace a product   |
| `PATCH`  | `/products/:id`   | Update a product    |
| `DELETE` | `/products/:id`   | Delete a product    |

## Getting Started

```bash
npm install
npm run server
```

Server runs on `http://localhost:3000`.
