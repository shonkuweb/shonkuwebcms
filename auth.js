import { auth, provider, signInWithPopup, onAuthStateChanged } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.google-sign-in-btn');

    // Check if user is already logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, redirect to dashboard
            window.location.href = 'dashboard.html';
        }
    });

    if (loginButton) {
        loginButton.addEventListener('click', async () => {
            try {
                loginButton.disabled = true;
                loginButton.textContent = 'Signing in...';

                await signInWithPopup(auth, provider);
                // Redirect happens in onAuthStateChanged
            } catch (error) {
                console.error("Login failed", error);
                alert('Login failed: ' + error.message);
                loginButton.disabled = false;
                loginButton.textContent = 'Sign in with Google';
            }
        });
    }
});
