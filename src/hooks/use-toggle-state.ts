import { useCallback, useState } from "react";

export function useToggleState(initialState: boolean) {
	const [state, setState] = useState(initialState);

	const toggle = useCallback(() => {
		setState((prev) => !prev);
	}, []);

	return [state, toggle] as const;
}
