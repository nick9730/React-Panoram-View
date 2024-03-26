import { updateHotspot } from "../../servers/apiHotspots";

import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateTour } from "../../servers/apiTour";

export function useAddTour() {
	const queryProject = useQueryClient();

	const { mutate: AddTour, isLoading } = useMutation({
		mutationFn: ({ id, newTour }) => updateTour(id, newTour),
		onSuccess: () => {
			toast.success("Tour has succefully created");
			queryProject.invalidateQueries({
				querykey: ["tour"],
			});
		},
	});

	return { AddTour, isLoading };
}
