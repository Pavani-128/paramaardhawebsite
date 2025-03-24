import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageServices from './Pages/ManageServices';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/services" element={<ManageServices />} />
            </Routes>
        </Router>
    );
}

export default App;
