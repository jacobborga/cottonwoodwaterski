import { User } from "firebase/auth";
import { useOutletContext } from "react-router-dom"

interface ContextT {
	user: User | undefined | null;
}

const useUser = () => {
	return useOutletContext<ContextT>();
}

export default useUser;