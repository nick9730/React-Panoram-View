import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { Getuser } from "../Users/Getuser";
import { GetAllImages } from "../../servers/apiImages";
import { useProjects } from "../../context/ContextProjext";

export function useGetAllimages() {
	const queryProject = useQueryClient();

	const { user } = Getuser();
	const { id: user_id } = user;
	const get = localStorage.getItem("project_id");
	const Item = JSON.parse(get);

	const { data: images, isLoading } = useQuery({
		queryFn: () => GetAllImages(user_id, Item),
		queryKey: ["images_ALL", "project_id"],
		refetch: () =>
			queryProject.invalidateQueries({
				queryKey: ["images_ALL", "project_id"],
			}),
	});

	return { images, isLoading };
}
