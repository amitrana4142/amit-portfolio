import { particles } from '../../data/particles';

const ParticleField = () => (
  <div className="particle-field" aria-hidden="true">
    {particles.map((p) => (
      <span
        key={p.id}
        className="particle"
        style={{
          left: p.left,
          top: p.top,
          width: p.size,
          height: p.size,
          animationDelay: p.delay,
          animationDuration: p.duration,
          opacity: p.opacity,
        }}
      />
    ))}
  </div>
);

export default ParticleField;
