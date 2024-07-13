import React from "react";

interface IUserIdPageProps {
	params: {
		userId: string;
	};
}

export const UserIdPage = ({ params }: IUserIdPageProps) => {
	return <div>UserIdPage: {params.userId}</div>;
};

export default UserIdPage;
