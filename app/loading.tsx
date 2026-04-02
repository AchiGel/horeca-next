export default function Loading() {
  return (
    <div className="loader-wrap">
      <div className="cup">
        <div className="steam">
          <span />
          <span />
          <span />
        </div>
        <div className="cup-rim" />
        <div className="cup-body">
          <div className="cup-liquid" />
          <div className="cup-handle" />
        </div>
        <div className="cup-saucer" />
      </div>

      <p className="loader-title">გთხოვთ დაიცადოთ…</p>

      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
