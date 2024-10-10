import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../src/components/actualComponents/Search";
import UserDetailsData from "./components/actualComponents/userDetailsData";

// Define the main App component
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/user/:username" element={<UserDetailsData />} /> {/* Use UserDetailsData here */}
            </Routes>
        </Router>
    );
}

// Export the App component to be used in other parts of this app
export default App;
