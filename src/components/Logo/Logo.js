import React from 'react';

import MioLogo from '../../assets/images/burger-logo-Mio.png';
// import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'

const logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		{/*<img src={MioLogo} alt="MioBurger" />*/}
		<img src={MioLogo} alt="MioBurger" className={classes.LogoBurger} />
	</div>
);

export default logo;