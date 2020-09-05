import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { process_slide_datas } from "../../functions/process_slide_datas";

const Slides = ({from}) => {

    const datas = useStaticQuery(graphql`
        {
          allMysqlSlidesProducts {
            edges {
              node {
                name
                type
                short_descr
                price
                mysqlId
                descr
                img_path
              }
            }
          }
          allMysqlSlidesAddons {
            edges {
              node {
                name
                type
                short_descr
                product_id
                price
                mysqlId
                descr
                addon_id
              }
            }
          }
        }
    `);

    const slides = process_slide_datas(datas.allMysqlSlidesProducts.edges, datas.allMysqlSlidesAddons.edges, from);

    return (
        <div className={`slides-${from}`}>
        </div>
    );
}

Slides.propTypes = {

};

Slides.defaultProps = {

};

export default Slides;