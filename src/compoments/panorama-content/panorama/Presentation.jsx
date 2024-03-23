import styled from "styled-components";

import { IconContext } from "react-icons";
import { useGetImages } from "../ImagesUser/useGetImages";
import GetItemImages from "../ImagesUser/GetItemImages";
import Heading from "../../ui/Heading";

const StyledPresentation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 40%;
	background-color: none;
`;

export default function Presentation() {
	//   const {appearProject,currentProject} = useProjects()
	// const {id:IdParams} = useParams()

	// // const {project}= useProjects();
	// let data = [];

	// useEffect(
	//   function(){
	//     appearProject(IdParams)
	//     data.push(currentProject);

	//   },
	//   [appearProject,IdParams,currentProject]
	// )

	const { Images, isLoading } = useGetImages();

	return (
		<IconContext.Provider
			value={{
				color: "black",
				size: "3rem",
				style: { background: "none" },
			}}
		>
			<StyledPresentation>
				<h1 style={{ color: "wheat" }}>All Images</h1>
				{Images?.map((images, index) => (
					<GetItemImages
						index={index}
						images={images}
						key={images.id}
					/>
				))}
				{/* {
  
currentProject?.original &&
  //  <ImageGallery slideDuration={1000} originalAlt="nikos"  showBullets={true} showThumbnails={true} slideInterval={true} items={data}/>
 }  */}
			</StyledPresentation>
		</IconContext.Provider>
	);
}
