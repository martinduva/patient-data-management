## Getting Started

First, install dependencies:

```bash
pnpm install
```

Second, create a .env file and populateas follows:

```md
USERS_MOCKAPI_URL=https://63bedcf7f5cfc0949b634fc8.mockapi.io/users
NEXT_PUBLIC_EDIT_PATIENT_ACTIVE=false
```

_NOTE: The NEXT_PUBLIC_EDIT_PATIENT_ACTIVE acts as a feature flag for enabling the edit patient information feature._

Lastly, run the project (development server):

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
