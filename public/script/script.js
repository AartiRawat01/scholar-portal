let loginsubmit = document.getElementById('loginsubmit');



loginsubmit.addEventListener('DOMContentLoaded', function() {

   
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('hola');
        try {
            console.log('hola');
            const response = await fetch('/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            console.log('hola');

            if (response.ok) {
                // Redirect to home screen
                window.location.href = '/changepassword';
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});

