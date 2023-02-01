import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { Profile } from "./components/Profile";
import { BlogPost } from "./components/BlogPost";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { AuthProvider, ProtectRoute } from "./components/auth";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route 
              path="/profile" 
              element={
                <ProtectRoute>
                  <Profile />
                </ProtectRoute>} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
