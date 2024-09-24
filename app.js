// Get references to DOM elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a task
function addTask() {
  const taskText = taskInput.value;
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Create the complete button (initially "Complete")
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  
  // When the complete button is clicked
  completeBtn.onclick = function() {
    // Check if task is already completed
    if (completeBtn.textContent === 'Complete') {
      // Ask the user for confirmation before marking the task as completed
      const confirmation = confirm(`Have you completed the task: "${taskText}"?`);
      
      if (confirmation) {
        // If confirmed, mark the task as complete
        completeBtn.textContent = '✔';
        completeBtn.style.color = 'green';
      }
    } else {
      // Option to revert back to "Complete"
      completeBtn.textContent = 'Complete';
      completeBtn.style.color = ''; // Reset to default color
    }
  };
  
  // Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };
  
  // Add the buttons to the list item
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  
  // Append the new task to the task list
  taskList.appendChild(li);
  
  // Clear the input field
  taskInput.value = '';
}
