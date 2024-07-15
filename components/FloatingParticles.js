import React, { useRef, useEffect } from "react";

const FloatingParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const size = Math.random() * 5 + 1;
      const x = Math.random() * (canvas.width - size * 2) + size * 2;
      const y = Math.random() * (canvas.height + size * 2) - size * 2;
      const directionX = Math.random() * 0.4 - 0.1;
      const directionY = Math.random() * 0.4 - 0.1;
      return { x, y, size, directionX, directionY };
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.directionX;
        particle.y += particle.directionY;

        // Bounce off edges
        if (
          particle.x + particle.size > canvas.width ||
          particle.x - particle.size < 0
        ) {
          particle.directionX = -particle.directionX;
        }
        if (
          particle.y + particle.size > canvas.height ||
          particle.y - particle.size < 0
        ) {
          particle.directionY = -particle.directionY;
        }

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; // Example color with transparency
        ctx.fill();

        // Remove particles that move out of view (optional)
        if (particle.y < -particle.size * 2) {
          particles.splice(index, 1);
        }
      });
      requestAnimationFrame(animateParticles);
    };

    const init = () => {
      resizeCanvas();
      particles = Array.from({ length: 100 }, createParticle); // Create initial particles
      animateParticles();
    };

    init();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default FloatingParticles;
