import React from "react";
import RequestInformation from "../RequestInformation";

const AddonWhatTreat = ({ datas }) => {
    
  if(!datas || datas.length === 0) {
      return false;
  }

    return (
        <div id="what-treat" className="addon-what-treat">
          <div className="title">{datas.title}</div>
          <div className="treats">
            {datas.what_treats.map((treat, key) => {
              return (
                <div key={key} className="treat-part">
                  <img
                    src={treat.picture.childImageSharp.fluid.srcWebp}
                    alt="addon-what-treat"
                  />
                  <div className="it-treats">{treat.title}</div>
                  <div className="treat-descr">{treat.text}</div>
                </div>
              );
            })}
          </div>
            <RequestInformation/>
        </div>
    );
}

AddonWhatTreat.defaultProps = {

}

AddonWhatTreat.propTypes = {

}

export default AddonWhatTreat;