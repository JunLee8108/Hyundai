import { carAllData } from "./CarData";

function GalleryModal(props) {
  return (
    <div className="gallery-modal">
      <div className="gallery-modal-flexbox1">
        <img
          src={carAllData[props.id].imgGallery[props.imageNum]}
          onClick={() => {
            props.handleModal();
          }}
        />
      </div>
      <div className="gallery-modal-flexbox2">
        <button
          onClick={() => {
            props.handleModal();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GalleryModal;
