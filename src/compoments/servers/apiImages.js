import { createClient } from "@supabase/supabase-js";
import { supabaseUrl } from "./supabase";

const supabase = createClient(
	"https://dvkoqbueyvehekvjnxjl.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2a29xYnVleXZlaGVrdmpueGpsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTE4MTU5NCwiZXhwIjoyMDE2NzU3NTk0fQ.U05P2g04SnW9vaGXE8tDPsvcgbDi7D-yGdlS8Uex_78"
);

export async function GetImages(user_id, project_id) {
	const { data, error } = await supabase
		.from("images_user")
		.select("*", "user(*)")
		.eq("user_id", user_id)
		.eq("project_id", project_id);

	if (error) throw new Error("Couldnt load the data");
	return data;
}

export async function GetOneImage(
	user_id,
	project_id,
	image_id
) {
	const { data, error } = await supabase
		.from("images_user")
		.select("*", "user(*)")
		.eq("user_id", user_id)
		.eq("project_id", project_id)
		.eq("id", image_id);

	if (error) throw new Error("Couldnt load the data");
	return data;
}

export async function UploadImages(file, user_id) {
	const fileName = `firstimage - ${user_id}`;
	console.log(file, fileName);
	const { data, error } = await supabase.storage
		.from("images")
		.upload(fileName, file);
	if (error) throw new Error("cant upload");
	return data;
}

export async function UpdateImages(
	newImage,
	user_id,
	IdParams
) {
	console.log(newImage);
	const fileName = `firstimage-${user_id}-${IdParams}-${Math.random()}`;
	const filepath = `${supabaseUrl}/storage/v1/object/public/images/${fileName}`;
	const { error: storageError } = await supabase.storage
		.from("images")
		.upload(fileName, newImage.image);
	const { data: images, error } = await supabase
		.from("images_user")
		.insert({ ...newImage, image: filepath })
		.select();

	if (storageError) {
		throw new Error("cant insert your Image");
	}
	if (error) throw new Error("cant insert new infos");
	return images;
}

export async function GetAllImages(user_id, project_id) {
	const { data, error } = await supabase
		.from("images_user")
		.select("*", "user(*)")
		.eq("user_id", user_id)
		.eq("project_id", project_id);

	if (error) throw new Error("Couldnt load the data");
	return data;
}

export async function deleteImage(id) {
	const { data, error } = await supabase
		.from("images_user")
		.delete()
		.eq("id", id);
	console.log(id);

	if (error) throw new Error("Image hasn t deleted");
	return data;
}

export async function AddInfos(id, newInfos) {
	const { data, error } = await supabase
		.from("images_user")
		.update({ ...newInfos })
		.eq("id", id)
		.select()
		.single();

	if (error) throw new Error("Infos hasn t updated");
	return data;
}
