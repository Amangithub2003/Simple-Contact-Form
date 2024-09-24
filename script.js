// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create a new submission element
    const submission = document.createElement('div');
    submission.className = 'submission';
    submission.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Display the submission in the admin panel
    document.getElementById('admin-data').appendChild(submission);

    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});
