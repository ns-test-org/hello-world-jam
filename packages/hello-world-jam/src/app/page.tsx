'use client';

import { useEffect, useRef, useState } from 'react';

export default function PacmanGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game constants
    const CELL_SIZE = 30;
    const COLS = 20;
    const ROWS = 15;
    canvas.width = COLS * CELL_SIZE;
    canvas.height = ROWS * CELL_SIZE;

    // Pacman state
    let pacman = { x: 1, y: 1, direction: 'right', mouthOpen: true };
    let dots: boolean[][] = [];
    let ghosts = [
      { x: 18, y: 1, color: '#FF0000', dx: -1, dy: 0 },
      { x: 18, y: 13, color: '#FFB8FF', dx: -1, dy: 0 },
      { x: 1, y: 13, color: '#00FFFF', dx: 1, dy: 0 },
    ];

    // Initialize dots
    for (let row = 0; row < ROWS; row++) {
      dots[row] = [];
      for (let col = 0; col < COLS; col++) {
        dots[row][col] = true;
      }
    }

    // Keyboard controls
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) return;
      switch (e.key) {
        case 'ArrowUp':
          pacman.direction = 'up';
          break;
        case 'ArrowDown':
          pacman.direction = 'down';
          break;
        case 'ArrowLeft':
          pacman.direction = 'left';
          break;
        case 'ArrowRight':
          pacman.direction = 'right';
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Game loop
    let animationFrame: number;
    let lastTime = 0;
    const FPS = 10;

    const gameLoop = (currentTime: number) => {
      if (currentTime - lastTime < 1000 / FPS) {
        animationFrame = requestAnimationFrame(gameLoop);
        return;
      }
      lastTime = currentTime;

      // Move Pacman
      const newPos = { ...pacman };
      switch (pacman.direction) {
        case 'up':
          newPos.y = Math.max(0, pacman.y - 1);
          break;
        case 'down':
          newPos.y = Math.min(ROWS - 1, pacman.y + 1);
          break;
        case 'left':
          newPos.x = Math.max(0, pacman.x - 1);
          break;
        case 'right':
          newPos.x = Math.min(COLS - 1, pacman.x + 1);
          break;
      }
      pacman = { ...newPos, mouthOpen: !pacman.mouthOpen };

      // Collect dots
      if (dots[pacman.y]?.[pacman.x]) {
        dots[pacman.y][pacman.x] = false;
        setScore((s) => s + 10);
      }

      // Move ghosts
      ghosts = ghosts.map((ghost) => {
        let newX = ghost.x + ghost.dx;
        let newY = ghost.y + ghost.dy;

        // Bounce off walls
        if (newX < 0 || newX >= COLS) {
          ghost.dx *= -1;
          newX = ghost.x;
        }
        if (newY < 0 || newY >= ROWS) {
          ghost.dy *= -1;
          newY = ghost.y;
        }

        // Random direction change
        if (Math.random() < 0.1) {
          const directions = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
          ];
          const dir = directions[Math.floor(Math.random() * directions.length)];
          ghost.dx = dir.dx;
          ghost.dy = dir.dy;
        }

        return { ...ghost, x: newX, y: newY };
      });

      // Check collision with ghosts
      for (const ghost of ghosts) {
        if (ghost.x === pacman.x && ghost.y === pacman.y) {
          setGameOver(true);
          return;
        }
      }

      // Draw everything
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw dots
      ctx.fillStyle = '#FFD700';
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          if (dots[row][col]) {
            ctx.beginPath();
            ctx.arc(
              col * CELL_SIZE + CELL_SIZE / 2,
              row * CELL_SIZE + CELL_SIZE / 2,
              3,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }
      }

      // Draw Pacman
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      const centerX = pacman.x * CELL_SIZE + CELL_SIZE / 2;
      const centerY = pacman.y * CELL_SIZE + CELL_SIZE / 2;
      const radius = CELL_SIZE / 2 - 2;

      if (pacman.mouthOpen) {
        let startAngle = 0.2;
        let endAngle = 2 * Math.PI - 0.2;
        if (pacman.direction === 'right') {
          startAngle = 0.2;
          endAngle = 2 * Math.PI - 0.2;
        } else if (pacman.direction === 'left') {
          startAngle = Math.PI + 0.2;
          endAngle = Math.PI - 0.2;
        } else if (pacman.direction === 'up') {
          startAngle = Math.PI * 1.5 + 0.2;
          endAngle = Math.PI * 1.5 - 0.2;
        } else if (pacman.direction === 'down') {
          startAngle = Math.PI * 0.5 + 0.2;
          endAngle = Math.PI * 0.5 - 0.2;
        }
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
      } else {
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      }
      ctx.fill();

      // Draw ghosts
      ghosts.forEach((ghost) => {
        ctx.fillStyle = ghost.color;
        const gx = ghost.x * CELL_SIZE + CELL_SIZE / 2;
        const gy = ghost.y * CELL_SIZE + CELL_SIZE / 2;
        ctx.beginPath();
        ctx.arc(gx, gy, CELL_SIZE / 2 - 2, Math.PI, 0);
        ctx.lineTo(gx + CELL_SIZE / 2 - 2, gy + CELL_SIZE / 2 - 2);
        ctx.lineTo(gx + CELL_SIZE / 4, gy);
        ctx.lineTo(gx, gy + CELL_SIZE / 2 - 2);
        ctx.lineTo(gx - CELL_SIZE / 4, gy);
        ctx.lineTo(gx - CELL_SIZE / 2 + 2, gy + CELL_SIZE / 2 - 2);
        ctx.closePath();
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(gx - 5, gy - 3, 3, 0, Math.PI * 2);
        ctx.arc(gx + 5, gy - 3, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0000FF';
        ctx.beginPath();
        ctx.arc(gx - 5, gy - 3, 1.5, 0, Math.PI * 2);
        ctx.arc(gx + 5, gy - 3, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!gameOver) {
        animationFrame = requestAnimationFrame(gameLoop);
      }
    };

    animationFrame = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      cancelAnimationFrame(animationFrame);
    };
  }, [gameOver]);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">PACMAN</h1>
        <p className="text-xl text-white">Score: {score}</p>
        <p className="text-sm text-gray-400 mt-2">Use arrow keys to move</p>
      </div>

      <canvas
        ref={canvasRef}
        className="border-4 border-blue-600 rounded-lg shadow-2xl"
      />

      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500 mb-4">GAME OVER</h2>
            <p className="text-2xl text-white mb-6">Final Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center">
        <p className="text-gray-500 text-sm">Created with ❤️</p>
      </footer>
    </div>
  );
}



