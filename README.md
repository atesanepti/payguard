# Next.js Project Setup Instructions

This README provides a step-by-step guide to set up and run the Next.js project locally or in production.

---

## Prerequisites

Ensure the following software is installed on your machine:

1. **Node.js**: Download from [https://nodejs.org/](https://nodejs.org/) (LTS version recommended).
2. **npm**: Comes with Node.js. Alternatively, you can use **yarn**.
3. **Git**: Download from [https://git-scm.com/](https://git-scm.com/).

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/atesanepti/payguard.git
cd <repository_name>
```

### 2. Install Dependencies

```bash
npm install
yarn install //or
```

### 3. Set Up Environment Variables

```bash
DATABASE_URL="postgresql://<DATABASE_USER>:<DATABASE_PASSWORD>@<DATABASE_HOST>/<DATABASE_NAME>?sslmode=require"

DATABASE_URL_UNPOOLED="postgresql://<DATABASE_USER>:<DATABASE_PASSWORD>@<DATABASE_HOST>/<DATABASE_NAME>?sslmode=require"

NEXT_PUBLIC_SUPABASE_URL="https://<YOUR_SUPABASE_PROJECT>.supabase.co"

NEXT_PUBLIC_SUPABASE_ANON_KEY="<SUPABASE_ANON_KEY>"

NEXT_SECRET_SUPABASE_KEY="<SUPABASE_SERVICE_ROLE_KEY>"

NEXT_URL="http://localhost:3000"
```

### 4. Run the Development Server

```bash
npm run dev
yarn dev //or
```
