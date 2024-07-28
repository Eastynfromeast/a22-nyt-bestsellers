"use client";

import Typewriter from "typewriter-effect";
import styles from "@/styles/about-us.module.css";
import PageTitle from "@/components/pageTitle";
import { ThemeProvider } from "next-themes";

const aboutUsTitle = "About Us";

const aboutUsText = `Welcome to Nulnu's explorer for The New York Times Best Seller list. <br/>We hope you find the book that makes your heart starts beating faster!`;

export default function AboutUs() {
	return (
		<>
			<ThemeProvider>
				<div className={styles.container}>
					<PageTitle title="About Us" />
					<Typewriter
						onInit={typewriter => {
							typewriter.typeString(aboutUsText).pauseFor(2000).start();
						}}
					/>
				</div>
			</ThemeProvider>
		</>
	);
}
