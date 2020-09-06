import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { process_slide_datas } from "../../functions/process_slide_datas";

const Slides = ({from}) => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlSlidesProducts {
                edges {
                    node {
                        type
                        short_descr
                        price
                        parents
                        name
                        mysqlId
                        img_path
                        descr
                    }
                }
            }
        }
    `);

    const slides = process_slide_datas(datas.allMysqlSlidesProducts.edges, from);

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