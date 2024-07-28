import styles from "@/styles/common.module.css";

export default function NotFound() {
	return (
		<div className={styles.container}>
			<h1 className={styles.errorText}>404 - Page Not Found</h1>
		</div>
	);
}
