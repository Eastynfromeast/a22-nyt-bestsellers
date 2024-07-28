"use client";

import styles from "@/styles/theme-switch.module.css";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState(global.window?.__theme || "light");
	const isDark = theme === "system";
	const toggleTheme = () => {
		global.window?.__setPreferredTheme(isDark ? "light" : "system");
	};

	useEffect(() => {
		global.window.__onThemeChange = setTheme;
	}, [theme]);

	return (
		<div className={styles.switchWrapper}>
			<button className={styles.btn} onClick={toggleTheme}>
				<span>{theme}</span>
				{theme === "light" ? "☀️" : "🌙"}
			</button>
		</div>
	);
}
