"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/header.module.css";

export default function Header() {
	const path = usePathname();
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.headerWrapper}>
				<ul className={styles.navItems}>
					<li className={styles.navItem}>
						<Link href="/">Home</Link>
						{path === "/" && <span className={styles.navDot}>dot</span>}
					</li>
					<li className={styles.navItem}>
						{path === "/about-us" && <span className={styles.navDot}>dot</span>}
						<Link href="/about-us">About Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
