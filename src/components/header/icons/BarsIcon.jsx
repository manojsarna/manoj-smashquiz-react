export function BarsIcon({ setShowMobileIcons }) {
  return (
    <button
      onClick={() => setShowMobileIcons((prev) => !prev)}
      className="sm-icon-btn color-dm sm-icon-btn-primary"
    >
      <div className="icon">
        <i className="fas fa-bars"></i>
      </div>
    </button>
  );
}
