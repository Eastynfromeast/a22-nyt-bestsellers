"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/header.module.css";
import ThemeSwitch from "./themeSwitch";
import { ThemeProvider } from "next-themes";

export default function Header() {
	const path = usePathname();

	return (
		<header className={styles.headerContainer}>
			<ThemeProvider>
				<nav className={styles.headerWrapper}>
					<ul className={styles.navItems}>
						<li>
							<ThemeSwitch />
						</li>
						<li className={styles.navItem}>
							<Link href="/">Home</Link>
							{path === "/" && <span className={styles.navDot}>dot</span>}
						</li>
						<li className={styles.navItem}>
							<Link href="/about-us">About Us</Link>
							{path === "/about-us" && <span className={styles.navDot}>dot</span>}
						</li>
					</ul>
				</nav>
			</ThemeProvider>
		</header>
	);
}
