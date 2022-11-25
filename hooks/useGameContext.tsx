import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export const useGameContext = ():any => {
    const context = useContext(GameContext);

       
	if(!context){
		throw new Error("useAuthContext must be used within a AuthProvider");
	}
    
	return context;
}