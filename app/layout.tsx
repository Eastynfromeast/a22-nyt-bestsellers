import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/header";
import styles from "@/styles/common.module.css";
import Footer from "@/components/footer";
import { sourceCodePro } from "@/utils/font";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: {
		template: "%s | A22 NYT BestSellers",
		default: "Nulnu's NYT BestSellers",
	},
	description: "Assignment 22 - Practice it all! ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sourceCodePro.className}>
				<ThemeProvider>
					<Header />
					<div className={styles.container}>{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
