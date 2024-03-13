import { Route, Routes, Navigate } from "react-router-dom";
// Route is a component that renders some UI when its path matches the current URL. 
// Routes is a component that contains all the possible routes of the application. 
// Navigate is a component that navigates to a new location when rendered.
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import EmailVerify from "./components/EmailVerify";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
	);
}

export default App;