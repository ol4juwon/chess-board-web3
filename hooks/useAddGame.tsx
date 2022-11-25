import { useEffect, useState } from "react";
import { useGameContext } from "./useGameContext";
export const useAddGame = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { dispatch } = useGameContext();

	const addGame = async ({id ,ended, limit, currency, entryFee, privacy,created_on}: any) => {
		setError(null);
		setLoading(true);
		const game = {id ,ended, limit, currency, entryFee, privacy,created_on};
dispatch({type: 'ADD_GAME', payload: game})
		try {
			// signInWithEmailAndPassword(auth, email, password)
			// 	.then((userCredential) => {

			// 		// Signed in
			// 		const user = userCredential.user;
			// 		dispatch({ type: "LOGIN", payload: user });
			// 		console.log(user);
			// 	// ...
			// 	})
			// 	.catch((error) => {
			// 		const errorCode = error.code;
			// 		const errorMessage = error.message;
			// 		dispatch({ type: "LOGOUT" });
			// 		setError({errorMessage, errorCode});
			// 		// ..
			// 	});

			if (!isCancelled) {
				setLoading(false);
				setError(null);
			}
		}
		catch (err) {
			if(!isCancelled) {
				setError(err.message);
				setLoading(false);
			}
		}
	};
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { error, loading, addGame };
};