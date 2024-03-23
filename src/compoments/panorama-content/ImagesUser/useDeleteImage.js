import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteImage } from "../../servers/apiImages";

export function useDeleteImage() {
	const queryProject = useQueryClient();

	const { mutate: deletedImage, isLoading: isDeleting } =
		useMutation({
			mutationFn: (id) => deleteImage(id),
			onSuccess: () => {
				toast.success("The image has deleted succesfully");
				queryProject.invalidateQueries({
					queryKey: ["images_user", "image"],
				});
			},
		});
	return { deletedImage };
}
