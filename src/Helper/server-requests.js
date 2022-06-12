import axios from "axios";
import toast from "react-hot-toast";

export const getVideos = async (setIsLoading, setVideos) => {
  try {
    setIsLoading(true);
    const res = await axios.get("/api/videos");
    setVideos(res.data.videos);
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

export const login = async (
  email,
  password,
  dispatch,
  navigate,
  toPreviousRoute
) => {
  try {
    const res = await axios.post("/api/auth/login", { email, password });
    dispatch({ type: "LOGIN", payload: res.data });
    navigate(toPreviousRoute);
    toast.success("Logged in successfully!");
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 404) {
      toast.error(error.response.data.errors[0]);
    } else {
      toast.error(error.message);
    }
    console.error(error);
  }
};

export const logout = async (dispatch, navigate) => {
  try {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    toast.success("Logged out successfully!");
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};
