import "./Card.css";
import { useState } from "react";
import { formatViewsCount, useClickOutside } from "../../Helper";
import { useNavigate } from "react-router-dom";

const Card = ({ video }) => {
  const navigate = useNavigate();
  const [showMoreCardOptions, setShowMoreCardOptions] = useState(false);
  const domNode = useClickOutside(() => setShowMoreCardOptions(false));

  return (
    <div className="card">
      <div className="container_top">
        <div
          className="card_img"
          onClick={() => navigate(`/explore/${video._id}`)}>
          <img
            src={video.thumbnail}
            alt="Video Title"
            className="img_responsive"
          />
        </div>
        <div className="heading_card">
          <img
            className="avatar avatar_circle"
            src={video.creatorProfile}
            alt="Avatar"
          />
          <div className="video_details flex_col ml_2">
            <p className="txt_semibold">
              {video.title.length > 40
                ? video.title.slice(0, 42) + "..."
                : video.title}
            </p>
            <div className="video_card_bottom mt_3">
              <p className="block">
                {video.creator.length > 30
                  ? video.creator.slice(0, 30) + "..."
                  : video.creator}
              </p>
              <div className="video_details mt_1">
                <span className="video_views">{`${formatViewsCount(
                  video.views
                )} views`}</span>
                <span className="video_upload_date">
                  {new Date(video.uploaded).toDateString().slice(4)}
                </span>
              </div>
            </div>
          </div>
          <div ref={domNode} className="vertical_button">
            <button
              className="btn"
              onClick={() => setShowMoreCardOptions((prev) => !prev)}>
              <span className="material-icons icon">more_vert</span>
            </button>
            {showMoreCardOptions && (
              <div className="more_card_options">
                <ul className="list_style_none">
                  <li className="txt_sm">
                    <i className="fas fa-plus mx_1"></i>
                    Add to watchLater
                  </li>
                  <li className="txt_sm">
                    <i className="fas fa-plus mx_1"></i>Add to playlist
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
