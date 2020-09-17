import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const HeaderTop = ({ process = false, process_function = null }) => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
                edges {
                    node {
                        container
                        name
                        position
                        type
                        under
                        url
                        variant
                        mysqlId
                    }
                }
            }
        }
    `).allMysqlHeaderTop.edges;

    // Client-side Runtime Data Fetching
    // const [starsCount, setStarsCount] = useState(0);

    // const request_datas = require_menu('header-top');

    // console.log(request_datas);

    // useEffect(() => {
    //     // get data from GitHub api
    //     fetch(request_datas.request, request_datas.params)
    //     .then(response => response.json()) // parse JSON from request
    //     .then(resultData => {
    //         console.log(resultData);
    //     })
    // }, [])

    
    const [menus] = React.useState(process && process_function ? process_function(process_menu_datas(datas)) : process_menu_datas(datas));

    return (
        <div id="header-top" className="header-top">
            {menus && menus.map((menu, key) => {
                return (<Menu key={key} prop_key={key} menu={menu}/>);
            })}
        </div>
    );
}

HeaderTop.propTypes = {
}

HeaderTop.defaultProps = {
}
  
export default HeaderTop;
