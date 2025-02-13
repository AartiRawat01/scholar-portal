app.use(express.static('public'));

const loginForm = document.getElementById('submit');

loginForm.addEventListener('click', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    try {
        const response = await fetch('/forgotpass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        if (response.ok) {
           // window.location.href = '/otp';
            document.getElementById('message').innerText = 'Check your email.';
        } else {
            document.getElementById('message').innerText = 'Invalid email.';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

   const verify = document.getElementById('verify');

verify.addEventListener('click', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const otp = document.getElementById('otpverify').value.trim();

    console.log('hola',otp);
    try {
        const response = await fetch('/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, otp })
        });
        if (response.ok) {
           window.location.href = '/enlishment';
            //document.getElementById('message').innerText = 'Check your email.';
        } else {
            document.getElementById('message').innerText = 'Invalid email hola.';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});


    