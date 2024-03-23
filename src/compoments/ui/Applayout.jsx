import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./SideBar";

import ClipLoader from "react-spinners/ClipLoader";
import { useGetProject } from "../panorama-content/projects/useGetProject";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
	border-radius: 2px;
	overflow: hidden;
	background-color: hsl(240, 13%, 16%);
`;
// password of supabase === VOhQHilvH5srUp0O

const Main = styled.main`
	background-color: hsl(244, 13%, 21%);
	padding: 4rem 4.8rem 6.4rem;
	overflow-y: scroll;
	overflow-x: hidden;
	border-radius: 20px;
	width: 100%;
	margin: 10px;
`;
const Container = styled.div`
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row-reverse;
	gap: 3.2rem;
	border-radius: 20px;
	flex-basis: 500px;
`;
const FullPage = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #23232e;
`;

export default function Applayout() {
	const { projects, isLoading } = useGetProject();

	if (isLoading)
		return (
			<FullPage>
				<ClipLoader
					color="rgba(54, 215, 183, 1)"
					size={10}
					margin={90}
				/>
			</FullPage>
		);
	return (
		<StyledAppLayout>
			<Sidebar />
			<Header />

			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}
