import { useState } from 'react';
import { useApp } from '../context/AppProvider';

const LoginForm = ({ setAlert }) => {
	const { handleLogin, isLoggedIn } = useApp();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const validarDatos = (e) => {
		e.preventDefault();

		if (email === '' || password === '') {
			setAlert({
				error: true,
				msg: 'Completa todos los campos !',
				color: 'danger',
			});
			return;
		}

		handleLogin({ email, password });

		if (isLoggedIn) {
			setAlert({
				error: false,
				msg: 'Inicio de sesión exito!',
				color: 'success',
			});

			setEmail('');
			setPassword('');
		} else {
			setAlert({
				error: true,
				msg: 'Credenciales erroneas',
				color: 'danger',
			});
		}
	};

	return (
		<>
			<form
				className="formulario"
				onSubmit={validarDatos}
			>
				<div className="form-group mb-3">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="tuemail@ejemplo.com"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className="form-group mb-3">
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Contraseña"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<div className="d-grid gap-2">
					<button
						type="submit"
						className="btn btn-success"
					>
						Iniciar sesión
					</button>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
