import { auth, provider, signInWithPopup, onAuthStateChanged } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.google-sign-in-btn');

    // Check if user is already logged in
    // Check if user is already logged in
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            if (user.email === 'shonkuweb@gmail.com') {
                // User is signed in and authorized
                window.location.href = 'dashboard.html';
            } else {
                // User signed in but unauthorized
                alert('Unauthorized email. Access denied.');
                await auth.signOut();
            }
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
