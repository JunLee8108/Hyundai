import { carAllData } from "./CarData";

function GalleryModal(props) {
  return (
    <div
      className="gallery-modal-bg"
      onClick={() => {
        props.handleModal();
        document.body.style.overflow = "unset";
      }}
    >
      <div className="gallery-modal">
        <div className="gallery-modal-flexbox1">
          <img
            src={carAllData[props.id].imgGallery[props.imageNum]}
            onClick={() => {
              props.handleModal();
              document.body.style.overflow = "unset";
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
