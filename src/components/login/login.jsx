import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.css";

const Login = ({authService}) => {
	const navigate = useNavigate();

	const idRef = useRef();
	const passwordRef = useRef();

	const login = (event) => {
		event.preventDefault();
		authService.login(idRef.current.value, passwordRef.current.value, () => {navigate("/main")});
	};

	return(
		<div className={styles.login}>
			<form className={styles.form}>
				<input
					className={styles.input} 
					type="text" 
					name="id" 
					placeholder='ID' 
					ref={idRef} 
				/>
				<input 
					className={styles.input} 
					type="password" 
					name="pw" 
					placeholder='PASSWORD' 
					ref={passwordRef} 
				/>
				<button onClick={login}>로그인</button>
			</form>
		</div>
	);
};

export default Login;