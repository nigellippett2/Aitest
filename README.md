# Supabase Task Manager

A small test project demonstrating how to add and manage tasks using Supabase.

## Setup

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from Project Settings > API

### 2. Create the Tasks Table

Run this SQL in the Supabase SQL Editor:

```sql
CREATE TABLE tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Allow all operations for anonymous users (for testing)
CREATE POLICY "Allow all operations" ON tasks
  FOR ALL
  USING (true)
  WITH CHECK (true);
```

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anon/public key

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Example

```bash
npm start
```

## API

The task manager provides these functions:

- `addTask(title, description)` - Add a new task
- `getAllTasks()` - Get all tasks
- `completeTask(taskId)` - Mark a task as completed
- `deleteTask(taskId)` - Delete a task

## Project Structure

```
├── src/
│   ├── index.js          # Example usage script
│   ├── supabaseClient.js # Supabase client configuration
│   └── taskManager.js    # Task CRUD operations
├── .env.example          # Environment variables template
├── package.json
└── README.md
```
