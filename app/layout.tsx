import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";
import styles from "@/styles/common.module.css";

const sourceCodePro = Source_Code_Pro({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });

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
		<html lang="en" className={sourceCodePro.className}>
			<body>
				<div className={styles.container}>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
