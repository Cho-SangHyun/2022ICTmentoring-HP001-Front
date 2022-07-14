import React from 'react';
import Navbar from '../navbar/navbar';
import styles from "./main.module.css";

const Main = (props) => {
	return(
		<div className={styles.main}>
			<Navbar />
		</div>
	);
};


export default Main;