import "./Note.css";

const Note = () => {
  return (
    <div className="note py_1 mb_4">
      <h4 className="h4 mb_2">Sample note Title</h4>
      <p className="mb_1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        expedita ut quam debitis suscipit veniam aspernatur cum, tempora esse a!
      </p>
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
