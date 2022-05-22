import "./Note.css";

const Note = () => {
  return (
    <div className="note py_1 mb_4">
      <h4 className="h4 mb_2">Sample note Title</h4>
      <h5 className="h5 mb_1 gray_subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        expedita ut quam debitis suscipit veniam aspernatur cum, tempora esse a!
      </h5>
      <div className="note_actions">
        <button>
          <i className="fas fa-edit fa-xl"></i>
        </button>
        <button>
          <i className="far fa-trash-alt fa-xl mx_2"></i>
        </button>
      </div>
    </div>
  );
};

export { Note };
