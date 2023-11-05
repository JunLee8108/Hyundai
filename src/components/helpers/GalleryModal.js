import { carAllData } from "./CarData";
import "../CarDetail.css";

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
            alt="car"
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
