import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const Project = createContext();

function ContextProject({ children }) {
	const [files, setFiles] = useState();
	const [index_id, setIndex] = useState();
	const [project_id, setProject_id] = useState();
	const [type, setType] = useState("ggg");
	const [addTour, setAddTour] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassWord] = useState("");

	useEffect(() => {
		const projectid = JSON.parse(
			localStorage.getItem("project_id")
		);
		if (projectid) {
			setProject_id(projectid);
		}
	}, [setProject_id]);

	return (
		<Project.Provider
			value={{
				files,
				setFiles,
				index_id,
				setIndex,
				project_id,
				setProject_id,
				type,
				setType,
				addTour,
				setAddTour,
				password,
				setPassWord,
				email,
				setEmail,
			}}
		>
			{children}
		</Project.Provider>
	);
}

function useProjects() {
	const contect = useContext(Project);
	if (contect === undefined) throw new Error("Den bghke");
	return contect;
}

export { ContextProject, useProjects };
