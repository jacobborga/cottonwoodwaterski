import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MembersOnly = () => {
	const { user } = useContext(AuthContext);

	if (user) {
		return <Outlet />
	} else {
		return <Navigate to='/login' />
	}
}

export default MembersOnly;