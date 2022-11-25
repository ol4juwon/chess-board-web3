import React, { useEffect } from "react";
import { createContext, useReducer } from "react";
// import { auth } from "../provider/config";
// import { onAuthStateChanged } from "firebase/auth";

export const GameContext = createContext();

export const gameReducer = (state: any, action: { type: any; payload: any; }) => {
	switch (action.type) {
	case "JOIN_GAME":
		return {
			...state,
			game: action.payload,
		};
	case "SPECTATE_GAME":
		return {
			...state,
			game: null,
		};
	case "ADD_GAME":
		return {
			...state,
			game: action.payload,
			authIsReady: true,
		};
	default:
		return state;
	}
};

interface Props {
    children: any;
}
export const GameProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(gameReducer, {
		game: [],
		gameIsReady: false
	});

	useEffect(() => {
		// const unsub =	onAuthStateChanged(auth, (user) => {
		// 	dispatch({type: "AUTH_READY", payload: user});
		// 	unsub();
		// });
	}, []);
	console.log("Game state?", state);

	return (
		<GameContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
};