import React, { useCallback } from "react";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute = ({ children, ...props }) => {
	const { authenticated } = props;

	const render = useCallback(
		() => (authenticated ? children : <Redirect to="/login" />),
		[authenticated, children]
	);

	return <Route {...props} render={render} />; 
};

export default PrivateRoute;
