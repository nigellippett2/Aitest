import { supabase } from './supabaseClient.js';

/**
 * Add a new task to the database
 * @param {string} title - The task title
 * @param {string} description - Optional task description
 * @returns {Promise<object>} The created task
 */
export async function addTask(title, description = '') {
  const { data, error } = await supabase
    .from('tasks')
    .insert([
      {
        title,
        description,
        completed: false,
        created_at: new Date().toISOString()
      }
    ])
    .select();

  if (error) {
    throw new Error(`Failed to add task: ${error.message}`);
  }

  return data[0];
}

/**
 * Get all tasks from the database
 * @returns {Promise<array>} Array of tasks
 */
export async function getAllTasks() {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to get tasks: ${error.message}`);
  }

  return data;
}

/**
 * Mark a task as completed
 * @param {string} taskId - The task ID
 * @returns {Promise<object>} The updated task
 */
export async function completeTask(taskId) {
  const { data, error } = await supabase
    .from('tasks')
    .update({ completed: true })
    .eq('id', taskId)
    .select();

  if (error) {
    throw new Error(`Failed to complete task: ${error.message}`);
  }

  return data[0];
}

/**
 * Delete a task from the database
 * @param {string} taskId - The task ID
 * @returns {Promise<void>}
 */
export async function deleteTask(taskId) {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', taskId);

  if (error) {
    throw new Error(`Failed to delete task: ${error.message}`);
  }
}
