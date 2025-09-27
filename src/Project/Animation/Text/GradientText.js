import '../style/GradientText.css';

export default function GradientText({
  children,
  className = '',

  colors=["#40ffaa", "#0b6b6b", "334155", "#3B82F6", "#3B82F6"],
  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
