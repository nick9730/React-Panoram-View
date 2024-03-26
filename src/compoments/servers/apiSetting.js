import supabase from "./supabase";

export async function getSettings(id) {
	const { data: settings, error } = await supabase
		.from("settings")
		.select("*", "user(*)")
		.eq("user_id", id);

	if (error) {
		throw new Error("Projects cound not be loaded");
	}
	return settings;
}

export async function updateSettings(id, newSettings) {
	const { data, error } = await supabase
		.from("settings")
		.update({ ...newSettings })
		.select("*", "user(*)")
		.eq("user_id", id);

	if (error) {
		throw new Error("Projects could not be edited");
	}

	return data;
}

export async function insertSetting(id, newSettings) {
	console.log(newSettings);
	const { data, error } = await supabase
		.from("settings")
		.insert([{ ...newSettings }])
		.select();

	if (error) {
		throw new Error("Projects could not be edited");
	}

	return data;
}
