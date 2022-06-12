import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Toaster } from "react-hot-toast";
import { RequiresAuth } from "./components/RequiresAuth";
import {
  Home,
  History,
  Liked,
  Login,
  Playlist,
  Signup,
  WatchLater,
  Error,
  SingleVideoPage,
} from "./screens";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:id" element={<SingleVideoPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
