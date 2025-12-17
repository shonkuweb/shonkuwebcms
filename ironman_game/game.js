const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Game State
const gameState = {
    isRunning: true,
    speed: 5
};

// Assets
const ironManImg = new Image();
ironManImg.src = 'assets/ironman.png';

const bgImg = new Image();
bgImg.src = 'assets/background.png';

// Player (Iron Man)
const player = {
    x: 100,
    y: 0, // Will be set to center in init
    width: 60,  // Approx size, adjust based on sprite
    height: 80,
    velocity: 0,
    gravity: 0.5,
    lift: -8,
    draw: function () {
        // Draw image if loaded, otherwise rect
        if (ironManImg.complete) {
            ctx.drawImage(ironManImg, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    },
    update: function () {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Floor collision
        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
        }
        // Ceiling collision
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    },
    fly: function () {
        this.velocity = this.lift;
    }
};

// Background
const background = {
    x: 0,
    draw: function () {
        if (!bgImg.complete) return;

        // Calculate scale to fill height
        const scale = canvas.height / bgImg.height;
        const scaledWidth = bgImg.width * scale;

        // Move background
        this.x -= gameState.speed;
        if (this.x <= -scaledWidth) {
            this.x = 0;
        }

        // Draw two copies for seamless loop
        ctx.drawImage(bgImg, this.x, 0, scaledWidth, canvas.height);
        ctx.drawImage(bgImg, this.x + scaledWidth, 0, scaledWidth, canvas.height);

        // If screen is wider than 2 images, might need a 3rd logic, but this usually covers 16:9
        if (this.x + scaledWidth * 2 < canvas.width) {
            ctx.drawImage(bgImg, this.x + scaledWidth * 2, 0, scaledWidth, canvas.height);
        }
    }
};

// Controls
function handleInput(e) {
    player.fly();
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
        handleInput();
    }
});
window.addEventListener('mousedown', handleInput);
window.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent scrolling
    handleInput();
});

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    background.draw();

    player.update();
    player.draw();

    requestAnimationFrame(gameLoop);
}

// Initialize
player.y = canvas.height / 2;
gameLoop();
