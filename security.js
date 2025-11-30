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
});
