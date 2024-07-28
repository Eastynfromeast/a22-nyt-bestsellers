type Theme = "light" | "system";

declare global {
	interface Window {
		__theme: Theme;
		__onThemeChange: (theme: Theme) => void;
		__setPreferredTheme: (theme: Theme) => void;
	}
}

function code() {
	window.__onThemeChange = function () {};

	function setTheme(newTheme: Theme) {
		window.__theme = newTheme;
		preferredTheme = newTheme;
		document.documentElement.dataset.theme = newTheme;

		window.__onThemeChange(newTheme);
	}

	var preferredTheme;

	try {
		preferredTheme = localStorage.getItem("theme") as Theme;
	} catch (err) {}

	window.__setPreferredTheme = function (newTheme: Theme) {
		setTheme(newTheme);
		try {
			localStorage.setItem("theme", newTheme);
		} catch (err) {}
	};

	var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

	darkQuery.addEventListener("change", function (e) {
		window.__setPreferredTheme(e.matches ? "system" : "light");
	});

	setTheme(preferredTheme || (darkQuery.matches ? "system" : "light"));
}

export default function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}
