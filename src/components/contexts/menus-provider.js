import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MenusContext from "./menus-context";
import { header_process } from '../../functions/header_process';
import { footer_process } from '../../functions/footer_process';
import { process_menu_datas } from '../../functions/process_menu_datas';

const _TYPES = ['text', 'image', 'button', 'card'];
const _VARIANTS = ['single', 'title', 'content', 'dk_title', 'side_menu'];

const MenusProvider = ({ requested = "", children }) => {
    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
                nodes {
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
            allMysqlHeaderBottom {
                nodes {
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
            allMysqlFooter {
                nodes {
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
            header_top: allStrapiMenu(filter: {container: {eq: "header_top"}}) {
                nodes {
                    strapiId
                    title
                    url
                    type
                    variant
                    container
                    parent_menu
                    internal_link
                    menus {
                        id
                        title
                        url
                        type
                        variant
                    }
                    products {
                        id
                        position
                        MenuParams {
                            title
                            url
                            type
                            variant
                        }
                        Icon {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                    }
                    treatments {
                        id
                        MenuParams {
                            title
                            url
                            type
                            variant
                        }
                    }
                    icon {
                        childImageSharp {
                            fluid {
                                srcWebp
                                srcSetWebp
                            }
                        }
                        publicURL
                    }
                    icon_hover {
                        childImageSharp {
                            fluid {
                                srcWebp
                                srcSetWebp
                            }
                        }
                        publicURL
                    }
                }
            }
            header_bottom: allStrapiMenu(filter: {container: {eq: "header_bottom"}}) {
                nodes {
                    strapiId
                    title
                    url
                    type
                    variant
                    container
                    parent_menu
                    internal_link
                    menus {
                        id
                        title
                        url
                        type
                        variant
                    }
                    products {
                        id
                        position
                        MenuParams {
                            title
                            url
                            type
                            variant
                        }
                        Icon {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                    }
                    treatments {
                        id
                        MenuParams {
                            title
                            url
                            type
                            variant
                        }
                    }
                    icon {
                        childImageSharp {
                            fluid {
                                srcWebp
                                srcSetWebp
                            }
                        }
                        publicURL
                    }
                    icon_hover {
                        childImageSharp {
                            fluid {
                                srcWebp
                                srcSetWebp
                            }
                        }
                        publicURL
                    }
                }
            }
            footer: strapiFooter {
                logo {
                    childImageSharp {
                        fluid {
                            srcWebp
                            srcSetWebp
                        }
                    }
                }
                address
                phone
                mail
                social {
                    icon {
                        publicURL
                        childImageSharp {
                            fluid {
                                srcWebp
                                srcSetWebp
                            }
                        }
                    }
                    name
                    url
                    position
                }
                navigation {
                    name
                    url
                }
            }
            allStrapiProduct(filter: {Addons: {elemMatch: {Page_addon: {eq: true}}}}) {
                nodes {
                    strapiId
                    position
                    Addons {
                        id
                        MenuParams {
                            title
                            url
                            type
                            variant
                        }
                    }
                }
            }
            allStrapiTreatment {
                nodes {
                    strapiId
                    MenuParams {
                        title
                        url
                        type
                        variant
                    }
                }
            }
        }
    `);

    const array_to_object = (_array) => {
        if(!_array) {
            return {};
        }
        return Object.fromEntries(
            _array.map((elem) => {
                return [elem.strapiId || elem.id, elem];
            })
        );
    }

    const recursive_process = (_object, main) => {
        Object.keys(_object).map((elem) => {
            if(_object[elem].menus.length) {
                _object[elem].menus = _object[elem].menus.map((menu) => {
                    return {
                        ...menu,
                        'menus': menu.menus || [],
                        'products': menu.products || [],
                        'treatments': menu.treatments || [],
                        'id': menu.id || menu.strapiId,
                        'parent': elem
                    };
                })
                recursive_process(array_to_object(_object[elem].menus, main));
            }
            if(_object[elem].products.length) {
                let temp = new Array(_object[elem].products.length);
                for(let i = 0; i < _object[elem].products.length; i++) {
                    temp[_object[elem].products[i].position - 1] = _object[elem].products[i];
                }
                _object[elem].menus = _object[elem].menus.concat(temp.map((product) => {
                    product.menus = datas.allStrapiProduct.nodes.map((_product) => {
                        let temp = [];
                        if(JSON.stringify([product.id, product.strapiId].sort()) === JSON.stringify([_product.id, _product.strapiId].sort())) {
                            for(const addon in _product.Addons) {
                                temp.push({
                                    ..._product.Addons[addon].MenuParams,
                                    'id': _product.Addons[addon].id || _product.Addons[addon].strapiId,
                                    'menus': _product.Addons[addon].menus || [],
                                    'products': _product.Addons[addon].products || [],
                                    'treatments': _product.Addons[addon].treatments || [],
                                });
                            };
                        }
                        return temp;
                    }).filter(elem => elem.length)[0];
                    recursive_process(array_to_object(product.menus, main));
                    return {
                        ...product.MenuParams,
                        'menus': product.menus || [],
                        'products': product.products || [],
                        'treatments': product.treatments || [],
                        'icon': product.Icon.childImageSharp.fluid || null,
                        'id': product.id || product.strapiId,
                        'parent': elem
                    };
                }));
            }
            if(_object[elem].treatments.length) {
                _object[elem].menus = _object[elem].menus.concat(_object[elem].treatments.map((treatment) => {
                    return {
                        ...treatment.MenuParams,
                        'menus': treatment.menus || [],
                        'products': treatment.products || [],
                        'treatments': treatment.treatments || [],
                        'id': treatment.id || treatment.strapiId,
                        'parent': elem
                    };
                }));
            }
        });
    }

    const resolve_dependance = (_object, main) => {
        Object.keys(_object).map((menu) => {
            if(_object[menu].parent_menu) {
                _object[menu].menus.map((_elem) => {
                    if(main[_elem.id || _elem.strapiId] && main[_elem.id || _elem.strapiId].title === _elem.title) {
                        _elem.menus = main[_elem.id || _elem.strapiId].menus;
                    }
                });
            }
        })
    }

    const process_menu = (list) => {
        let temp = array_to_object(list);
        recursive_process(temp, temp);
        resolve_dependance(temp, temp);
        return Object.entries(temp).map((menu) => {
            menu[1].products = [];
            menu[1].treatments = [];
            if(menu[1].parent_menu) {
                return menu[1];
            }
            return false;
        }).filter(menu => menu);
    }

    const [menusHeaderTop] = React.useState(process_menu(datas.header_top.nodes));
    const [menusHeaderBottom] = React.useState(process_menu(datas.header_bottom.nodes.map(elem => elem)));

    // const header_top_request = request_db("SELECT * FROM menus WHERE container = 'header-top';", );
    // const header_bottom_request = request_db("SELECT * FROM menus WHERE container = 'header-bottom';", );
    // const footer_request = request_db("SELECT * FROM menus WHERE container LIKE \'footer%\';", );

    // const [menusHeaderTop] = React.useState(process_menu_datas(datas.allMysqlHeaderTop.nodes, 'HeaderTop'));
    // const [menusHeaderBottom] = React.useState(process_menu_datas(datas.allMysqlHeaderBottom.nodes, 'HeaderBottom'));
    // const [menusFooter] = React.useState(footer_process(process_menu_datas(datas.allMysqlFooter.nodes, 'Footer')));
    const [menusFooter] = React.useState(datas.footer);
    
    return (
        <MenusContext.Provider
            value={{
                'header_top': menusHeaderTop,
                'header_bottom': menusHeaderBottom,
                'footer': menusFooter,

            }}
        >
            {children}
        </MenusContext.Provider>
    );
}

export default MenusProvider;