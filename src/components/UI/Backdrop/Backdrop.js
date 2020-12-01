import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => (
	// backdrop can be added to Modal.js, App.js div, or layout.js aux (POR is at modal.js)
	props.show ? <div
		className={classes.Backdrop}
		onClick={props.clicked}></div> : null
);

export default backdrop;