const NavBar= function(){
    return (
        <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Start Bootstrap</h4>
            <div>
                <span className="text-muted">CORE</span>
            </div>
            <div>
                <a>Dashboard</a>
            </div>
            <div>
                <span className="text-muted">INTERFACE</span>
            </div>
            <div>
                <a>Layouts</a>
            </div>
            <div>
                <a>Pages</a>
            </div>
            <div>
                <span className="text-muted">ADDONS</span>
            </div>
            <div>
                <a>Charts</a>
            </div>
            <div>
                <a>Tables</a>
            </div>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    )
}

export default NavBar;