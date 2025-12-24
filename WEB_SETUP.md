# Web Interface Setup Guide

This guide will help you set up and run the Task Manager web interface.

## Prerequisites

- Node.js installed
- Supabase account with a project set up
- The `tasks` table created in your Supabase database (see main README.md)

## Setup Steps

### 1. Configure Supabase Credentials

Open `public/index.html` and find these lines (around line 153):

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Replace them with your actual Supabase credentials:

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

**Where to find your credentials:**
1. Go to your Supabase project dashboard
2. Click on the Settings icon (gear) in the sidebar
3. Go to "API" section
4. Copy the "Project URL" and "anon public" key

### 2. Start the Web Server

Run the following command in your terminal:

```bash
npm run server
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

### 3. Open the Web Interface

Open your web browser and navigate to:

```
http://localhost:3000
```

## Features

The web interface allows you to:

- ✅ **Add new tasks** with a title and description
- ✅ **View all tasks** in a beautiful, modern interface
- ✅ **Mark tasks as complete** with a single click
- ✅ **Delete tasks** when they're no longer needed
- ✅ **Real-time updates** - changes are reflected immediately

## Troubleshooting

### Error: "Error loading tasks"

- Check that your Supabase credentials are correct in `public/index.html`
- Ensure the `tasks` table exists in your Supabase database
- Check your browser console for specific error messages

### Server won't start

- Make sure port 3000 is not already in use
- Try specifying a different port: `PORT=8080 npm run server`

### Tasks not appearing

- Verify your Supabase Row Level Security (RLS) policies
- Check that you have data in the `tasks` table
- Open browser developer tools and check the Console tab for errors

## Alternative: Open HTML Directly

If you prefer not to run a server, you can open `public/index.html` directly in your browser. However, you may encounter CORS issues with some browsers. Using the built-in server is recommended.

## Security Note

The `SUPABASE_ANON_KEY` is safe to expose in client-side code as it's designed for public use. However, make sure you have proper Row Level Security (RLS) policies set up in Supabase to protect your data.
