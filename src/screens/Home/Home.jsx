import { useEffect, useState } from "react";
import { Chip, Card } from "../../components";
import { Loader, getVideos } from "../../Helper";
import "./Home.css";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos(setIsLoading, setVideos);
  }, []);

  return (
    <main className="main_home">
      <Chip />
      <div className="home_card">
        {isLoading ? (
          <Loader />
        ) : (
          videos.map((video) => <Card video={video} key={video._id} />)
        )}
      </div>
    </main>
  );
};

export { Home };
