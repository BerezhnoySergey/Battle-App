import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Battle from "./components/Battle/Battle";
import Navigate from "./components/Navigate";
import Settings from "./components/Settings";
import Results from "./components/Battle/Results";
import { IndexPopular } from "./components/Popular";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "popular",
				element: <IndexPopular />,
			},
			{
				path: "battle",
				element: <Battle />,
			},
			{
				path: "settings",
				element: <Settings />,
			},
			{
				path: "battle/results",
				element: <Results />,
			},
			{
				path: "*",
				element: <h2>Error...</h2>,
			},
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
export default App;
