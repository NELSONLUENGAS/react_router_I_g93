import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const [newUser, setNewUser] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleTheme = () => {
		setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
	};

	const handleRegister = (user) => {
		setNewUser(user);
	};

	const handleLogin = (user) => {
		if (
			user.email.toLowerCase() === newUser.email.toLowerCase() &&
			user.password === newUser.password
		) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	};

	return (
		<AppContext.Provider
			value={{
				theme,
				toggleTheme,
				newUser,
				handleRegister,
				handleLogin,
				isLoggedIn,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;

export const useApp = () => useContext(AppContext);
