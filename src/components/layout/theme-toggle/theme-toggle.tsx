"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { Button, ButtonProps } from "@mijn-ui/react-button";

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ ...props }: ButtonProps) => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return;

	if (resolvedTheme === "dark") {
		return (
			<Button onClick={() => setTheme("light")} iconOnly {...props}>
				<LuSun fontSize={16} />
			</Button>
		);
	}
	if (resolvedTheme === "light") {
		return (
			<Button onClick={() => setTheme("dark")} iconOnly {...props}>
				<LuMoon fontSize={14} />
			</Button>
		);
	}
};

export default ThemeToggler;
