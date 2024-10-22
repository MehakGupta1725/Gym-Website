document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    const form = event.target;

    // Validate the form here if necessary

    // Display a message after submission
    const messageDiv = document.getElementById('formMessage');
    messageDiv.innerHTML = '<p>Thank you for your submission!</p>';
    messageDiv.style.color = 'green';

    // Submit the form programmatically
    form.submit();
});
