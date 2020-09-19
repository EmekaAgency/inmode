import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MenusContext from "./menus-context";
import { header_process } from '../../functions/header_process';
import { footer_process } from '../../functions/footer_process';
import { process_menu_datas } from '../../functions/process_menu_datas';

const MenusProvider = ({ requested = "", children }) => {
    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
                edges {
                    node {
                        variant
                        url
                        under
                        type
                        position
                        name
                        mysqlId
                        container
                    }
                }
            }
            allMysqlHeaderBottom {
                edges {
                    node {
                        variant
                        url
                        under
                        type
                        position
                        name
                        mysqlId
                        container
                    }
                }
            }
            allMysqlFooter {
                edges {
                    node {
                        variant
                        url
                        under
                        type
                        position
                        name
                        mysqlId
                        container
                    }
                }
            }
        }
    `);

    const [menusHeaderTop] = React.useState(process_menu_datas(datas.allMysqlHeaderTop.edges, 'HeaderTop'));
    const [menusHeaderBottom] = React.useState(process_menu_datas(datas.allMysqlHeaderBottom.edges, 'HeaderBottom'));
    const [menusFooter] = React.useState(footer_process(process_menu_datas(datas.allMysqlFooter.edges, 'Footer')));
    
    return (
        <MenusContext.Provider
            value={{
                'header_top': menusHeaderTop,
                'header_bottom': menusHeaderBottom,
                'footer': menusFooter
            }}
        >
            {children}
        </MenusContext.Provider>
    );
}

export default MenusProvider;