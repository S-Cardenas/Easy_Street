# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Properties

- `GET /api/properties`
  - properties index/search
  - accepts `borough_name` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/properties`
- `GET /api/properties/:id`
- `PATCH /api/properties/:id`
- `DELETE /api/properties/:id`

### Bookmarks

- `GET /api/bookmarks`
- `POST /api/bookmarks`
- `GET /api/bookmarks/:id`
- `PATCH /api/bookmarks/:id`
- `DELETE /api/bookmarks/:id`
- `GET /api/bookmarks/:id/properties`
  - index of all properties for a bookmarks
  - accepts pagination params (if I get there)
