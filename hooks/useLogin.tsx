import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (address: any, balance: any) => {
		setError(null);
		setLoading(true);

		try {
// try{
    const user = {address, balance}
					dispatch({ type: "LOGIN", payload: user });
                    localStorage.setItem('user', JSON.stringify(user));
					console.log(user);
			
        //     }catch((error: { code: any; message: any; }) => {
		// 			const errorCode = error.code;
		// 			const errorMessage = error.message;
		// 			dispatch({ type: "LOGOUT" });
		// 			// setError({errorMessage, errorCode});
		// 			// ..
		// 		});

		// 	if (!isCancelled) {
		// 		setLoading(false);
		// 		setError(null);
		// 	}
		}catch (err) {
			if(!isCancelled) {
				setError(err.message);
				setLoading(false);
			}
		}
	};
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { error, loading, login };
};