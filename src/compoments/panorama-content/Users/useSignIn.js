import { GetLogin } from "../../servers/apiAuth";
import toast from "react-hot-toast";
import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignIn() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: login, isLoading } = useMutation({
		mutationFn: ({ email, password }) =>
			GetLogin({ email, password }),
		onSuccess: (user) => {
			queryClient.setQueryData(["user"], user.user);
			navigate("/profile", { replace: true });
		},
		onError: (err) => {
			console.log("ERROR", err);
			toast.error("Provided email or password are incorrect");
		},
	});

	return { login, isLoading };
}
