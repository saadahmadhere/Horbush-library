import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Home,
  History,
  Liked,
  Login,
  Playlist,
  Signup,
  WatchLater,
  Error,
} from "./screens";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
