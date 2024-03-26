import { insertSetting } from "../../servers/apiSetting";
import { Getuser } from "../Users/Getuser";
import toast from "react-hot-toast";
import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";

export function useInsertSetting() {
	const queryProject = useQueryClient();

	const { mutate: InsertSetting, isLoading } = useMutation({
		mutationFn: ({ id, newSetting }) =>
			insertSetting(id, newSetting),
		onSuccess: () => {
			queryProject.invalidateQueries({
				queryKey: ["settings"],
			});
		},
	});

	return { InsertSetting, isLoading };
}
