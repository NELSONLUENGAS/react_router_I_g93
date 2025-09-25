import { Link } from 'react-router-dom';
import { useApp } from '../context/AppProvider';

const NavBar = () => {
	const { theme, toggleTheme } = useApp();
	return (
		<nav
			className={
				theme === 'light'
					? 'navbar navbar-expand-lg bg-info'
					: 'navbar navbar-expand-lg bg-info-subtle'
			}
		>
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

					<div className="d-flex">
						<button
							className="p-2 boder border-0 h-100 w-100 rounded-circle d-flex justify-content-center align-items-center"
							onClick={toggleTheme}
						>
							{theme === 'light' ? (
								<i className="fa-solid fa-moon fs-3"></i>
							) : (
								<i className="fa-solid fa-sun fs-3"></i>
							)}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
