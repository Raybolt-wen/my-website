// components/CardWidget.jsx
import AnimatedWidget from './AnimatedWidget';

export default function CardWidget() {
  return (
    <AnimatedWidget
      style={{
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <h3>Animated Card</h3>
      <p>Hover to see magic</p>
    </AnimatedWidget>
  );
}
