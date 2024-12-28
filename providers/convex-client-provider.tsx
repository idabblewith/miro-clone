"use client";

import {
	AuthLoading,
	Authenticated,
	ConvexReactClient,
	Unauthenticated,
} from "convex/react";
import { Loading } from "@/components/auth/loading";
import { ClerkProvider, SignInButton, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
	children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl as string);
const pubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
console.log(pubKey);
console.log(convexUrl);

export const ConvexClientProvider = ({
	children,
}: ConvexClientProviderProps) => {
	return (
		<ClerkProvider publishableKey={pubKey}>
			<ConvexProviderWithClerk useAuth={useAuth} client={convex}>
				<AuthLoading>
					<Loading />
				</AuthLoading>
				<Unauthenticated>
					<SignInButton />
				</Unauthenticated>
				<Authenticated>{children}</Authenticated>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
};
