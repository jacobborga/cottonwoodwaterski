import { useState } from 'react';

export default function useError() {
	const [error, setError] = useState<Error | undefined>();

	// Seems redundant but needed for props in MUI components for error flag
	const isError = (): boolean => {
		if (error) return true;
		else return false;
	}

	return { error, setError, isError };
}