import { useState } from 'react';

interface FormT {
	email: string;
	password: string
}

export default function useForm() {
	const [values, setValues] = useState<FormT>({ email: '', password: '' });

	const setEmail = (email: string) => {
		setValues(prevValues => ({ ...prevValues, email: email }));
	}

	const setPassword = (password: string) => {
		setValues(prevValues => ({ ...prevValues, password: password }));
	}

	return { values, setEmail, setPassword };
}