import React, { useEffect } from "react";
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewList from "./pages/ViewList";
import VoteList from "./pages/VoteList";
import Layout from "./components/Layout";

function App() {
  useEffect(() => {
    document.title = "ZotTier";
  }, []);

  return (
    <Router>
      <Layout>
        <div className="content">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="browse" element={<Browse />} />
            <Route path="view-list/:id" element={<ViewList />} />
            <Route path="vote-list/:id" element={<VoteList />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
