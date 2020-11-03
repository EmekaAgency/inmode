import React from "react";

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
                  />
                  <div className="it-treats">{treat.title}</div>
                  <div className="treat-descr">{treat.text}</div>
                </div>
              );
            })}
          </div>
          <a className="request-informations" href="#">
              request informations
          </a>
        </div>
    );
}

AddonWhatTreat.defaultProps = {

}

AddonWhatTreat.propTypes = {

}

export default AddonWhatTreat;