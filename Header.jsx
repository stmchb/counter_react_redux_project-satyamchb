const Header = ({ children }) => {
  return (
    <div className="container-fluid pb-3">
      <div className="d-grid gap-3" style={{ "gridTemplateColumns": "1fr 2fr", width: "100%", margin: '25px 330px' }}>
        <div className="bg-body-tertiary border rounded-4" style={{ height: "50vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Header;
