import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { UpdateUser } from "../../servers/apiAuth";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	const { mutate: updateUser1, isLoading: isUpdating } =
		useMutation({
			mutationFn: UpdateUser,
			onSuccess: ({ user }) => {
				toast.success("User account successfully updated");
				queryClient.setQueryData(["user"], user);
			},
			onError: (err) => toast.error(err.message),
		});

	return { updateUser1, isUpdating };
}
