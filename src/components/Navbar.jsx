import React from "react";

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg shadow-lg mb-5 bg-white rounded fw-bold">
				<a className="navbar-brand ms-3" href="/">
					SHEY PIZZA
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<a className="nav-link text-info" href="/login">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-info" href="/cart">
								Cart
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
