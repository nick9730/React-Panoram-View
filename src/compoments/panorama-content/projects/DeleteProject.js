import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { deleteProject } from "../../servers/apiProject";
import toast from "react-hot-toast";
export default function DeleteProject() {
	const queryProject = useQueryClient();

	const { isLoading: isDeleting, mutate: deletedProject } =
		useMutation({
			mutationFn: (id) => deleteProject(id),
			onSuccess: () => {
				toast.success("Project has succefully deleted");
				queryProject.invalidateQueries({
					queryKey: ["project_userId"],
				});
			},
		});

	return { isDeleting, deletedProject };
}
