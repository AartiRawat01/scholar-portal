//app.use(express.static('public'));


           const loginForm = document.getElementById('loginsubmit');

    loginForm.addEventListener('click', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
      
        try {
            const response = await fetch('/enlishment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                
                window.location.href = '/enlishment';
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });



