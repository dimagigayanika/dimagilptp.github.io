document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual API endpoint
    fetch('/api/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Login failed');
        }
    })
    .then(data => {
        // Handle successful login (e.g., redirect to admin dashboard)
        alert('Login successful!');
        window.location.href = 'admin.html'; // Redirect to the admin dashboard
    })
    .catch((error) => {
        alert(error.message);
    });
});