import { Routes, Route } from "react-router";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./Store/auth-context";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!authCtx.isAuthenticated && (
          <Route path="/auth" element={<AuthPage />} />
        )}

        {authCtx.isLoggedin && <Route path="/profile" element={<ProfilePage />} />}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
