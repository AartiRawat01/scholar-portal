  
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('programdetails');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                const formData = new FormData(form);
                const formObject = {};

                formData.forEach((value, key) => {
                    formObject[key] = value;
                });

                console.log('Form Object:', formObject);

                fetch('/programdetails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formObject)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                        alert('Form is successfully submitted!');

                        // Redirect after 2 seconds
                        setTimeout(() => {
                            window.location.href = '/home';
                        }, 2000);

                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        });
    

