import "./Card.css";

const Card = () => {
  const videoTitle =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta porro velit deleniti et aliquid minus hic culpa molestias ut aut    tempora officiis asperiores esse, architecto eligendi, blanditiis,    ipsum voluptatem! Quaerat!";
  return (
    <div className="card">
      <div className="container_top">
        <div className="card_img">
          <img
            src="https://i.ytimg.com/vi/ycI0VQbtd2U/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCGawAFA-xB2MGxmPrnBZcJFvijgw"
            alt="video name goes here"
            className="img_responsive"
          />
        </div>
        <div className="heading_card">
          <img
            className="avatar avatar_circle"
            src="https://yt3.ggpht.com/gdzGJfQ7DZPNgCJHdGTetR9wI6Bdc7XhZVuz2VfM0dOb311b0nvGrgMuOoLnI5wtRJQrYeRvCQ=s88-c-k-c0x00ffffff-no-rj"
            alt="girl"
          />
          <div className="video_details flex_col ml_2">
            <p className="txt_semibold">
              {videoTitle.length > 40
                ? videoTitle.slice(0, 42) + "..."
                : videoTitle}
            </p>
            <div className="video_card_bottom mt_3">
              <p className="block">Name of creator</p>
              <div className="video_details mt_1">
                <span className="video_views">999 views</span>
                <span className="video_upload_date">11 months ago</span>
              </div>
            </div>
          </div>
          <button className="btn">
            <span className="material-icons icon">more_vert</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
