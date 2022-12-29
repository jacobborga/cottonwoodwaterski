import { createContext, ReactNode, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../database/firebase';

export interface AuthContextT {
	user: User | undefined | null;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextT>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>();

	onAuthStateChanged(auth, updatedUser => {
		setUser(updatedUser);
	}, err => console.log(err));

	const login = async (email: string, password: string) => {
		try {
			const userCred = await signInWithEmailAndPassword(auth, email, password);
			setUser(userCred.user);
		} catch (err: any) {
			console.log(err);
		}
	}

	const register = async (email: string, password: string) => {
		try {
			const userCred = await createUserWithEmailAndPassword(auth, email, password);
			setUser(userCred.user);
		} catch (err) {
			console.log(err);
		}
	}

	const logout = async () => {
		try {
			signOut(auth);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		console.log(user);
	}, [user])

	const data = { user, login, register, logout };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider;