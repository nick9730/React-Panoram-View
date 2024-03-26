import { updateHotspot } from "../../servers/apiHotspots";

import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { updateTour } from "../../servers/apiTour";

export function useAddTour() {
	const queryProject = useQueryClient();

	const { mutate: AddTour, isLoading } = useMutation({
		mutationFn: ({ id, newTour }) => updateTour(id, newTour),
		onSuccess: () => {
			queryProject.invalidateQueries({
				querykey: ["tour"],
			});
		},
	});

	return { AddTour, isLoading };
}
