export default function dateFormatter(Memberdate: string) {
	const date = new Date(Memberdate);
	const formattedDate = date.toLocaleDateString("en-ca");
	return formattedDate;
}
