type Theme = "system" | "light";

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

	var lightQuery = window.matchMedia("(prefers-color-scheme: light)");

	lightQuery.addEventListener("change", function (e) {
		window.__setPreferredTheme(e.matches ? "light" : "system");
	});

	setTheme(preferredTheme || (lightQuery.matches ? "light" : "system"));
}

export default function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}
