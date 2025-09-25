import { useState } from 'react';

import Formulario from '../components/Formulario';
import SocialButton from '../components/SocialButton';
import Alert from '../components/Alert';
import { useApp } from '../context/AppProvider';

const Registro = () => {
	const { theme } = useApp();
	const [alert, setAlert] = useState({ error: '', msg: '', color: '' });
	return (
		<div
			className={
				theme === 'light'
					? 'bg-white container-fluid bg-white'
					: 'bg-black container-fluid'
			}
		>
			<div className="container border border-light-subtle rounded-5 bg-white p-5">
				<h1 className="fs-1">Crea una cuenta</h1>
				<div className="d-flex gap-3 justify-content-center my-3">
					<SocialButton icon="fa-brands fa-facebook" />
					<SocialButton icon="fa-brands fa-github" />
					<SocialButton icon="fa-brands fa-linkedin-in" />
				</div>
				<p>O usa tu email para registrarte</p>
				<Formulario setAlert={setAlert} />
				{alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
			</div>
		</div>
	);
};

export default Registro;
