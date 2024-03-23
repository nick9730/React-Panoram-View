import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { Getuser } from "../Users/Getuser";
import {
	GetImages,
	GetOneImage,
} from "../../servers/apiImages";
import { useParams } from "react-router-dom";
import { useProjects } from "../../context/ContextProjext";
import { useEffect } from "react";

export function useGetOneImage(id) {
	const queryProject = useQueryClient();
	const { user } = Getuser();
	const { id: user_id } = user;
	const Item = JSON.parse(localStorage.getItem("project_id"));
	const { id: paramsId } = useParams();

	let ImageID;

	if (id) {
		ImageID = id;
	} else {
		ImageID = paramsId;
	}

	const { data: image, isLoading } = useQuery({
		queryFn: () => GetOneImage(user_id, Item, ImageID),
		queryKey: ["image", "user_id", "paramsId"],
		refetch: () =>
			queryProject.invalidateQueries({
				queryKey: ["image", "user_id", "paramsId"],
			}),
	});

	return { image, isLoading, ImageID };
}
