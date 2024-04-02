import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Articles, Politics, Sports, Entertainment } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
