import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './pages/Registro';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState({
		username: 'pepito_2',
		mail: 'pepito@pepi.com',
	});
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/register"
					element={<Registro />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="*"
					element={<h1>Not Found</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
