document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const loginButton = document.querySelector('.sign-in-btn');
    const passwordInput = document.getElementById('password');

    // Handle Login Button Click
    loginButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        // Verify password against local config
        if (enteredPassword === CONFIG.password) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Incorrect Password');
        }
    });

    // Allow pressing Enter to login
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loginButton.click();
        }
    });

    // Toggle password visibility (Text/Password)
    const togglePasswordButton = document.querySelector('.toggle-password');
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Optional: Toggle eye icon opacity or change icon if needed
        togglePasswordButton.style.opacity = type === 'text' ? '1' : '0.7';
    });
});
