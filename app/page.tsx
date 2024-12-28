import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<p className="text-black">Test page</p>
			<Button>Click me</Button>
			<UserButton />
		</div>
	);
}
