import axios from "axios";

const getVideos = async (setIsLoading, setVideos) => {
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

export { getVideos };
