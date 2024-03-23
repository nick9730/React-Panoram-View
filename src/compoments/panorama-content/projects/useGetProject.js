import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { getProject } from "../../servers/apiProject";
import { Getuser } from "../Users/Getuser";

export function useGetProject() {
	const queryProject = useQueryClient();
	const { user } = Getuser();
	const { id } = user;

	const { data: projects, isLoading } = useQuery({
		queryFn: () => getProject(id),
		queryKey: ["project_userId"],
		refetch: () => {
			queryProject.invalidateQueries({
				queryKey: ["project_userId"],
			});
		},
	});

	return { projects, isLoading, getProject };
}
