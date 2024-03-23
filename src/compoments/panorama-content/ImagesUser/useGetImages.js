import {
	useQuery,
	useQueryClient,
} from "@tanstack/react-query";
import { Getuser } from "../Users/Getuser";
import { GetImages } from "../../servers/apiImages";
import { useParams } from "react-router-dom";

export function useGetImages() {
	const queryProject = useQueryClient();

	const { user } = Getuser();
	const { id: user_id } = user;
	const { id: paramsId } = useParams();
	console.log(paramsId);

	const { data: Images, isLoading } = useQuery({
		queryFn: () => GetImages(user_id, paramsId),
		queryKey: ["images_user", "user_id", "paramsId", "image"],
		onSuccess: () =>
			queryProject.invalidateQueries({
				queryKey: ["images_user", "paramsId", "image"],
			}),
	});

	return { Images, isLoading };
}
