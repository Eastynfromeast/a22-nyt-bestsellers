import { useTheme } from "next-themes";
import styles from "@/styles/theme-switch.module.css";

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme();
	const onClickThemeSwitch = () => {
		if (theme === "system") {
			setTheme("light");
		} else {
			setTheme("system");
		}
	};

	return (
		<div className={styles.switchWrapper}>
			<button className={styles.btn} onClick={onClickThemeSwitch}>
				<span>{theme === "system" ? "dark" : theme}</span>
				{theme === "light" ? "☀️" : "🌙"}
			</button>
		</div>
	);
}
