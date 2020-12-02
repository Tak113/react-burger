import React from 'react';

import MioLogo from '../../assets/images/burger-logo-Mio.png';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css'

const logo = (props) => (
	<div className={classes.Logo}>
		{/*<img src={MioLogo} alt="MioBurger" />*/}
		<img src={burgerLogo} alt="MioBurger" className={classes.LogoBurger} />
	</div>
);

export default logo;