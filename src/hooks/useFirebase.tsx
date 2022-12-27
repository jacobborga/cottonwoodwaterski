import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { auth } from "../database/firebase";

export default function useFirebase() {
	const [user, setUser] = useState<User | undefined>();
	const [error, setError] = useState<any>();

	const login = (email: string, password: string, callback?: VoidFunction) => {
		signInWithEmailAndPassword(auth, email, password).then(userCred => {
			setUser(userCred.user);
			if (callback) callback();
		}).catch((error: any) => {
			setError(error);
		});
	}

	const logout = (callback?: VoidFunction) => {
		signOut(auth).then(() => {
			setUser(undefined);
			if (callback) callback();
		}).catch((error: any) => {
			setError(error);
		});
	}

	const register = (email: string, password: string, callback?: VoidFunction) => {
		createUserWithEmailAndPassword(auth, email, password).then(userCred => {
			setUser(userCred.user);
			if (callback) callback();
		}).catch((error: any) => {
			setError(error);
		});
	}

	useEffect(() => {
		console.log(error);
	}, [error]);

	return { user, login, logout, register };
}