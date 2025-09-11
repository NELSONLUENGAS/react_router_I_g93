import { useState } from 'react';

import Formulario from '../components/Formulario';
import SocialButton from '../components/SocialButton';
import Alert from '../components/Alert';
import LoginForm from '../components/LoginForm';

const Login = () => {
	const [alert, setAlert] = useState({ error: '', msg: '', color: '' });
	return (
		<>
			<div className="container border border-light-subtle rounded-5 bg-white p-5 mt-5">
				<h1 className="fs-1">Iniciar Sesión</h1>
				<div className="d-flex gap-3 justify-content-center my-3">
					<SocialButton icon="fa-brands fa-facebook" />
					<SocialButton icon="fa-brands fa-github" />
					<SocialButton icon="fa-brands fa-linkedin-in" />
				</div>
				<p>O usa tu email para Iniciar sesión</p>
				<LoginForm setAlert={setAlert} />
				{alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
			</div>
		</>
	);
};

export default Login;
