import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";
import styles from "@/styles/common.module.css";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en" className={inter.className}>
			<body className={styles.container}>
				<Header />
				{children}
			</body>
		</html>
	);
}
