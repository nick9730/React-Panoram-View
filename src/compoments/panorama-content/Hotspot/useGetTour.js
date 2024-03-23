import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { GetTour } from "../../servers/apiTour";

export function useGetTour() {
	const queryProject = useQueryClient();

	const { id: ParamsID } = useParams();

	const { data, isLoading } = useQuery({
		queryFn: () => GetTour(ParamsID),
		queryKey: [
			"tour",
			"ParamsID",
			"project_userId",
			"paramsID",
			"images_user",
		],
		refetch: () =>
			queryProject.invalidateQueries({
				queryKey: [
					"tour",
					"ParamsID",
					"project_userId",
					"paramsID",
					"images_user",
				],
			}),
	});

	queryProject.prefetchQuery({
		queryKey: [
			"tour",
			"ParamsID",
			"project_userId",
			"paramsID",
			"images_user",
		],
		queryFn: () => GetTour(ParamsID),
	});

	return { data, isLoading };
}
