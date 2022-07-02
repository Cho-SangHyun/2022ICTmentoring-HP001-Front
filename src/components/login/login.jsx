import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.css";

const Login = (props) => {
	const navigate = useNavigate();

	const idRef = useRef();
	const passwordRef = useRef();

	const login = (event) => {
		event.preventDefault();
		console.log(`login -- id:${idRef.current.value}, pw:${passwordRef.current.value}`);
		navigate('/main');
	};

	return(
		<div className={styles.login}>
			<form className={styles.form}>
				<input className={styles.input} type="text" name="id" placeholder='ID' ref={idRef} />
				<input className={styles.input} type="password" name="password" placeholder='PASSWORD' ref={passwordRef} />
				<button onClick={login}>로그인</button>
			</form>
		</div>
	);
};

export default Login;