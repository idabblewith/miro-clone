"use client";

import { ReactNode } from "react";
import {
	LiveblocksProvider,
	RoomProvider,
	ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";

import { Layer } from "@/types/canvas";

interface RoomProps {
	children: ReactNode;
	roomId: string;
	fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
	return (
		<LiveblocksProvider
			// For local development (can share link without being invited to the org)
			// publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!}
			throttle={16}
			// For production (requires being invited to the org to view room)
			authEndpoint={`/api/liveblocks-auth`}
		>
			<RoomProvider
				id={roomId}
				initialPresence={{
					cursor: null,
					selection: [],
					pencilDraft: null,
					penColor: null,
				}}
				initialStorage={{
					layers: new LiveMap<string, LiveObject<Layer>>(),
					layerIds: new LiveList([]),
				}}
			>
				<ClientSideSuspense fallback={fallback}>
					{() => children}
				</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
};
