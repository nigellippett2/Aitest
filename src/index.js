import { addTask, getAllTasks, completeTask, deleteTask } from './taskManager.js';

async function main() {
  try {
    // Example: Add a new task
    console.log('Adding a new task...');
    const newTask = await addTask(
      'Learn Supabase',
      'Complete the Supabase tutorial and build a sample project'
    );
    console.log('Task created:', newTask);

    // Example: Get all tasks
    console.log('\nFetching all tasks...');
    const tasks = await getAllTasks();
    console.log('All tasks:', tasks);

    // Example: Complete a task (uncomment to use)
    // if (newTask && newTask.id) {
    //   console.log('\nMarking task as completed...');
    //   const completedTask = await completeTask(newTask.id);
    //   console.log('Completed task:', completedTask);
    // }

    // Example: Delete a task (uncomment to use)
    // if (newTask && newTask.id) {
    //   console.log('\nDeleting task...');
    //   await deleteTask(newTask.id);
    //   console.log('Task deleted successfully');
    // }

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
