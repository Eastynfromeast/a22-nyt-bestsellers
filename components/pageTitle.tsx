import { pressStart2p } from "@/utils/font";

interface IPageTitle {
	title: string;
}

export default function PageTitle({ title }: IPageTitle) {
	return <h1 className={pressStart2p.className}>{title}</h1>;
}
