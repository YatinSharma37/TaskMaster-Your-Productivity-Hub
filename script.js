document.addEventListener("DOMContentLoaded", function () {
    // Load tasks from local storage
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const prioritySelect = document.getElementById("prioritySelect");
    const dueDateInput = document.getElementById("dueDateInput");

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create list item
    const listItem = document.createElement("li");
    const dueDate = dueDateInput.value ? new Date(dueDateInput.value).toLocaleString() : "";
    const priority = prioritySelect.value;

    listItem.innerHTML = `
        <span>${taskText}</span>
        <span class="due-date">${dueDate}</span>
        <span class="priority ${priority}">${priority}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);

    // Save tasks to local storage
    saveTasks();

    // Clear input fields
    taskInput.value = "";
    dueDateInput.value = "";
}

function completeTask(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle("completed");

    // Save tasks to local storage
    saveTasks();
}

function removeTask(button) {
    const listItem = button.parentElement;
    const taskList = listItem.parentElement;
    taskList.removeChild(listItem);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.innerHTML;
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Load events from local storage
    loadEvents();
});

function addEvent() {
    const eventDescriptionInput = document.getElementById("eventDescription");
    const startTimeInput = document.getElementById("startTime");
    const endTimeInput = document.getElementById("endTime");

    const eventDescription = eventDescriptionInput.value.trim();
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    if (eventDescription === "" || startTime === "" || endTime === "") {
        alert("Please enter event details!");
        return;
    }

    const eventList = document.getElementById("eventList");

    // Create list item
    const eventItem = document.createElement("li");

    eventItem.innerHTML = `
        <span>${eventDescription}</span>
        <span>${startTime} - ${endTime}</span>
        <span class="remove-event" onclick="removeEvent(this)">Remove</span>
    `;

    eventList.appendChild(eventItem);

    // Save events to local storage
    saveEvents();

    // Clear input fields
    eventDescriptionInput.value = "";
    startTimeInput.value = "";
    endTimeInput.value = "";
}

function removeEvent(element) {
    const eventItem = element.parentElement;
    const eventList = eventItem.parentElement;
    eventList.removeChild(eventItem);

    // Save events to local storage
    saveEvents();
}

function saveEvents() {
    const eventList = document.getElementById("eventList");
    const events = eventList.innerHTML;
    localStorage.setItem("events", events);
}

function loadEvents() {
    const eventList = document.getElementById("eventList");
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
        eventList.innerHTML = savedEvents;
    }
}
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const prioritySelect = document.getElementById("prioritySelect");
    const dueDateInput = document.getElementById("dueDateInput");

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create list item
    const listItem = document.createElement("li");
    const dueDate = dueDateInput.value ? new Date(dueDateInput.value).toLocaleString() : "";
    const priority = prioritySelect.value;

    listItem.innerHTML = `
        <span>${taskText}</span>
        <span class="due-date">${dueDate}</span>
        <span class="priority ${priority}">${priority}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);

    // Increment the task count
    incrementTaskCount();

    // Save tasks to local storage
    saveTasks();

    // Clear input fields
    taskInput.value = "";
    dueDateInput.value = "";
}

function incrementTaskCount() {
    const taskCounter = document.getElementById("taskCounter");
    const currentCount = parseInt(taskCounter.textContent);
    taskCounter.textContent = `${currentCount + 1} tasks`;
}


// ... (Existing code in script.js)

