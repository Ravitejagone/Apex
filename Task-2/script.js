document.getElementById('contactFormElement').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (!name || !email) {
        alert('All fields are required.');
        event.preventDefault();
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
    
});

document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task === '') {
        alert('Please enter a task.');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = task;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
});

const sideMenu = document.getElementById('menu');

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-230px';
}
