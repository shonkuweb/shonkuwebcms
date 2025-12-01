document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }

    // Attempt to block Print Screen
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled!');
        e.preventDefault();
    }

    // Mac Screenshot shortcuts (Cmd+Shift+3, Cmd+Shift+4)
    if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4')) {
        e.preventDefault();
        alert('Screenshots are disabled!');
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled!');
    }
});
