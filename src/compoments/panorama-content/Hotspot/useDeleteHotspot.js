import { deleteHotpot } from "../../servers/apiHotspots";
import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteHotspot() {
	const queryProject = useQueryClient();

	const { mutate: deletedHotspot, isLoading: isDeleting } =
		useMutation({
			mutationFn: (id) => deleteHotpot(id),
			onSuccess: () => {
				toast.success("The hotspot has deleted succesfully");
				queryProject.invalidateQueries({
					queryKey: ["hotspot"],
				});
			},
		});
	return { deletedHotspot, isDeleting };
}
