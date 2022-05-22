import { useParams } from "react-router-dom";
import "./SingleVideoPage.css";
import { Note } from "../../components";

const SingleVideoPage = () => {
  const { id } = useParams();
  return (
    <div className="single_video_display mx_1 my_1">
      <div className="video_container">
        <iframe
          width="100%"
          height={400}
          src={"https://www.youtube.com/embed/EPXz7700lfY"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="video_player"></iframe>
        <div className="video_actions flex">
          {/* <button className="btn">
            <i className="fas fa-thumbs-up fa-lg mr_1"></i>Like
          </button> */}
          <button className="btn">
            <i className="far fa-thumbs-up fa-lg mr_1"></i>Like
          </button>
          <button className="btn">
            <i className="fas fa-bookmark fa-lg mr_1"></i>Watch Later
          </button>
          <button className="btn">
            <i className="fas fa-folder-plus fa-lg mr_1"></i>Add to playlist
          </button>
        </div>
        <div className="video_creator flex_align__center mt_2">
          <img
            className="avatar avatar_circle"
            src="https://yt3.ggpht.com/ytc/AKedOLRkQQQepdHNQ30TP5ywVn7paxmZc5MAynPnkzLg6g=s176-c-k-c0x00ffffff-no-rj"
            alt="Avatar"
          />
          <h3 className="h3">Powerful JRE</h3>
        </div>
      </div>
      <section className="video_notes px_3 py_3">
        <form className="flex_col ">
          <h2 className="h2 mb_2">Notes</h2>
          <input type="text" placeholder="Title" className="mb_2 px_2 py_1" />
          <textarea
            placeholder="Description"
            cols="30"
            rows="10"
            className="mb_2 px_2 py_1"></textarea>
          <div className="form_buttons flex">
            <button type="submit" className="btn btn_save_note px_7 py_2">
              Save
            </button>
            <button className="btn btn_discard_note px_6 py_2 ml_4">
              Discard
            </button>
          </div>
        </form>
        <div className="notes my_4">
          <Note />
          <Note />
          <Note />
        </div>
      </section>
    </div>
  );
};

export { SingleVideoPage };
