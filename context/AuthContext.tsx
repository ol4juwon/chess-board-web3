import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
// import { auth } from "../provider/config";
// import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
	case "LOGIN":
		return {
			...state,
			user: action.payload,
		};
	case "LOGOUT":
		return {
			...state,
			user: null,
		};
	case "AUTH_READY":
		return {
			...state,
			user: action.payload,
			authIsReady: true,
		};
	default:
		return state;
	}
};

interface Props {
    children: any;
}
export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		authIsReady: false
	});

	useEffect(() => {
		// const unsub =	onAuthStateChanged(auth, (user) => {
		// 	dispatch({type: "AUTH_READY", payload: user});
		// 	unsub();
		// });
	}, []);
	console.log("Auth user?", state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};