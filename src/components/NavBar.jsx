
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div className="d-flex justify-content-between w-100">
					<div>
						<Link
							className="navbar-brand"
							to="/"
						>
							Home
						</Link>
						<Link
							className="navbar-brand"
							to="/register"
						>
							Register
						</Link>
						<Link
							className="navbar-brand"
							to="/login"
						>
							Login
						</Link>
					</div>

					<div
						className=""
						id="navbarSupportedContent"
					>
						<form
							className="d-flex"
							role="search"
						>
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-success"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
