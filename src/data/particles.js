function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const particles = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  left: `${seededRandom(i * 7) * 100}%`,
  top: `${seededRandom(i * 13) * 100}%`,
  size: 2 + seededRandom(i * 3) * 3,
  delay: `${seededRandom(i * 5) * 8}s`,
  duration: `${6 + seededRandom(i * 11) * 10}s`,
  opacity: 0.15 + seededRandom(i * 17) * 0.5,
}));
