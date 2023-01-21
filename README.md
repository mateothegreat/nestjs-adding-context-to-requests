# Adding context to nest.js requests

See https://matthewdavis.io/adding-context-to-your-requests-with-nest-js.

## Running locally

Install dependencies and start the server:

```bash
npm install
npm start
```

Send a test request to http://localhost:3000 or via `curl`:

```bash
curl -sH 'Authorization: Bearer somejwttokenhere' http://localhost:3000
```

You should see:

```bash
../nestjs-adding-context-to-requests 🌱 main [!] ➜ curl -sH 'Authorization: Bearer somejwttokenhere' http://localhost:3000 | jq
{
  "id": 123,
  "email": "matthew@matthewdavis.io",
  "website": "https://matthewdavis.io",
  "secret": "super"
}
```
