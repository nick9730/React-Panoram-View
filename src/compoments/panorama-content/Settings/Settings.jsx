import { useGetSetting } from "./useGetSettings";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import SettingForm from "./SettingForm";

const StyledClip = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
	height: 50vh;
	justify-content: center;
	align-items: center;
`;

const BodySettings = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default function Settings() {
	const { settings, isLoading } = useGetSetting();

	if (!settings) return;

	return (
		<>
			{isLoading ? (
				<StyledClip>
					<ClipLoader
						size={80}
						color="rgba(54, 215, 183, 1)"
						margin={260}
					/>
				</StyledClip>
			) : (
				<BodySettings>
					<SettingForm settings={settings} />
				</BodySettings>
			)}
		</>
	);
}
