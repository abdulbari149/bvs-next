"use client";
import "@/css/style.css";
import "@/css/style-timeline.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
	const pathname = usePathname();

	return (
		<>
			<nav
				className="navbar navbar-expand-custom navbar-mainbg"
				style={{ position: "fixed", width: "100%", zIndex: 100 }}
			>
				<a className="navbar-brand navbar-logo" href="/">
					<Image
						loading="lazy"
						id="logoimg"
						src="/img/BVS_Logo.png"
						alt="BVS"
						height={50}
						width={78}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					// style="padding-right: 0; margin-right: 2%; padding-left: 10px"
					style={{ paddingRight: 0, marginRight: "2%", paddingLeft: "10px" }}
				>
					<i className="fas fa-bars text-white"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						{navItems.map((item) => {
							const isActive = item.href === pathname;
							return (
								<li
									key={item.name}
									className={`nav-item ${
										item.href === pathname ? "active" : ""
									}`}
									style={{ position: "relative" }}
								>
									<Link href={item.href} className="nav-link">
										{item.name}
									</Link>
									{isActive && (
										<div
											className="hori-selector"
											style={{ height: "100%", width: "100%", zIndex: -200 }}
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
