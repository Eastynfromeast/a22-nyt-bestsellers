"use client";

import { useEffect } from "react";
import styles from "@/styles/common.module.css";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className={styles.container}>
			<h2 className={styles.errorText}>Something went wrong!</h2>
			<p>Please go back and try again!</p>
			<button onClick={() => reset()}>Try again!</button>
		</div>
	);
}
