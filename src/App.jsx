import GlobalStyles from "./GlobalStyles";

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Users from "./compoments/pages/Users";
import Dashboard from "./compoments/pages/Dashboard";

import ProjectPreview from "./compoments/pages/ProjectPreview";
import Gallery from "./compoments/panorama-content/panorama/Gallery";
import Applayout from "./compoments/ui/Applayout";


import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginLayout from "./compoments/ui/LoginLayout";

import RedicredRouter from "./compoments/ui/RedicredRoute";
import PanoramaView from "./compoments/panorama-content/panorama/PanoramaView";
import { ContextProject } from "./compoments/context/ContextProjext";

import Settings from "./compoments/panorama-content/Settings/Settings";
import NotPageFound from "./compoments/pages/NotPageFound";
import Tour from "./compoments/panorama-content/Hotspot/Tour";
import SignUp from "./compoments/ui/SignUp";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// k3fmsj3MLuyfCxyN

const queryProject = new QueryClient({
});

function App() {
	return (
		<ContextProject>
			<QueryClientProvider client={queryProject}>
				<BrowserRouter>
					<GlobalStyles />
					<Routes>
						<Route
							element={
								<RedicredRouter>
									<Applayout />
								</RedicredRouter>
							}
						>
							<Route
								index
								element={<Navigate replace to="/profile" />}
							></Route>
							<Route
								path="/profile"
								element={<Users />}
							></Route>
							<Route
								path="/projects"
								element={<ProjectPreview />}
							></Route>
							<Route
								path="/projects/:id"
								element={<Gallery />}
							></Route>
							<Route
								path="/projects/:id/gallery/:id"
								element={<PanoramaView />}
							></Route>
							<Route
								path="/settings"
								element={<Settings />}
							></Route>
							<Route
							path="/projects/:id/tour/:id"
								element={<Tour />}
							></Route>
						</Route>
						<Route
							path="*"
							element={<NotPageFound />}
						></Route>
						<Route
							path="/login"
							element={<LoginLayout />}
						></Route>
						<Route
							path="/signup"
							element={<SignUp />}
						></Route>
					</Routes>
				</BrowserRouter>
				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						
						error: {
							duration: 500,
						},
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "var(--color-grey-0)",
							color: "var(--color-grey-700)",
						},
					}}
				/>
             
			</QueryClientProvider>
		</ContextProject>
	);
}

export default App;
