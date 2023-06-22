import { useParams } from "react-router-dom";

function CarDetail() {
    let {id} = useParams();

    return (
      <div>
        <h1>Car Detail {id}</h1>
      </div>
    );
  }
  
  export default CarDetail;
  