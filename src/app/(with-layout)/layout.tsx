import { Footer, Navbar } from "@/container/shared";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
