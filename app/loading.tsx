"use client";
import { ThreeDots } from "react-loader-spinner";
import styles from "@/styles/common.module.css";

export default function Loading() {
	return (
		<div className={styles.loadingContainer}>
			<ThreeDots
				visible={true}
				height="80"
				width="80"
				color="rgba(58, 227, 116, 1)"
				radius="9"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>{" "}
		</div>
	);
}
