import React from "react";

interface ILayoutProps {
	children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
	return (
		<div className="flex flex-col gap-y-4">
			<nav className="text-xs p-1 bg-red-500">
				I am a reusable nav bar
			</nav>
			{children}
		</div>
	);
};

export default Layout;
