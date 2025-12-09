// ============================================
// Security Measures (Basic Client-Side Protection)
// ============================================

// Prevent Right-Click Context Menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Prevent Developer Tools & Source View Shortcuts
document.addEventListener('keydown', function (e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }

    // Attempt to block Print Screen Key
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(''); // Clear clipboard
        alert('Screenshots are disabled!');
        e.preventDefault();
    }

    // Mac Screenshot shortcuts (Cmd+Shift+3, Cmd+Shift+4)
    if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4')) {
        e.preventDefault();
        alert('Screenshots are disabled!');
    }
});

// Additional listener for Print Screen removal (keyup)
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled!');
    }
});
