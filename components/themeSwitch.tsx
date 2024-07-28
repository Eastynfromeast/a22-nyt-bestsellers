import { useTheme } from "next-themes";

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
		<div>
			<button onClick={onClickThemeSwitch}>Switch Theme</button>
		</div>
	);
}
