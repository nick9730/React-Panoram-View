import { getSettings } from "../../servers/apiSetting";
import { Getuser } from "../Users/Getuser";
import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";

export function useGetSetting() {
	const { user } = Getuser();
	const { id } = user;

	const queryProject = useQueryClient();

	const { data: settings, isLoading } = useQuery({
		queryFn: () => getSettings(id),
		queryKey: ["settings"],
		onSuccess: () =>
			queryProject.invalidateQueries({
				queryKey: ["settings", "user_id"],
			}),
	});

	return { settings, isLoading };
}
