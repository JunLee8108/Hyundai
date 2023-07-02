import { carAllData, trimDescription } from "./CarData";

function EachTrimDescription(props) {
  if (props.trimNum == 0) {
    return (
      <div className="detail-bottom-container-mobile">
        <div className="detail-bottom-flex-container-mobile">
          <div className="detail-bottom-flexbox-mobile">
            <h1>{carAllData[props.id].trim[props.trimNum]}</h1>
            <h4>{trimDescription[props.trimNum]}</h4>
            <h2>${carAllData[props.id].price[props.trimNum]}</h2>
            <p>Starting MSRP</p>
            <center>
              <h3>Key Features</h3>
            </center>
            {carAllData[props.id].SEKey.map(function (a, i) {
              return <p key={i}>‣ {carAllData[props.id].SEKey[i]}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else if (props.trimNum == 1) {
    return (
      <div className="detail-bottom-container-mobile">
        <div className="detail-bottom-flex-container-mobile">
          <div className="detail-bottom-flexbox-mobile">
            <h1>{carAllData[props.id].trim[props.trimNum]}</h1>
            <h4>{trimDescription[props.trimNum]}</h4>
            <h2>${carAllData[props.id].price[props.trimNum]}</h2>
            <p>Starting MSRP</p>
            <center>
              <h3>Key Features</h3>
            </center>
            {carAllData[props.id].SELKey.map(function (a, i) {
              return <p key={i}>‣ {carAllData[props.id].SELKey[i]}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detail-bottom-container-mobile">
        <div className="detail-bottom-flex-container-mobile">
          <div className="detail-bottom-flexbox-mobile">
            <h1>{carAllData[props.id].trim[props.trimNum]}</h1>
            <h4>{trimDescription[props.trimNum]}</h4>
            <h2>${carAllData[props.id].price[props.trimNum]}</h2>
            <p>Starting MSRP</p>
            <center>
              <h3>Key Features</h3>
            </center>
            {carAllData[props.id].LimitedKey.map(function (a, i) {
              return <p key={i}>‣ {carAllData[props.id].LimitedKey[i]}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default EachTrimDescription;
