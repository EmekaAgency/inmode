import axios from "axios";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
// import { scrapingInstagramPosts } from "../../functions/instagram";
// import { InstagramPosts } from "../../functions/instagram";
import { InstaPost } from "../../functions/instagram";

const FollowInstagram = ({insta_id}:FollowInstagram) => {

    const [datas] = React.useState(useStaticQuery(graphql`
        {
            allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 4, filter: {username: {eq: "1317505554"}}) {
                edges {
                    node {
                        comments
                        likes
                        caption
                        localFile {
                            childImageSharp {
                                fluid {
                                    srcWebp
                                    srcSetWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `).allInstaNode.edges);

    // console.log(scrapingInstagramPosts(insta_id));
    // console.log(InstagramPosts(insta_id));
    
    // const [pics, setPics] = React.useState([]);

    // let _headers = new Headers();
    // _headers.append('Allow-Origin', '*');
    // _headers.append('Accept', '*/*');
    // let fetch_get:RequestInit = {
    //     method: 'GET',
    //     headers: _headers,
    //     mode: 'no-cors',
    // };

    // fetch(`https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${insta_id}","first":100,"after":null}`, fetch_get).then(response => {
    // axios.get(`https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${insta_id}","first":100,"after":null}`).then(response => {
    //     const photos = [];
    //     console.log(response);
    //     try {
    //         response.data.data.user.edge_owner_to_timeline_media.edges.forEach(edge => {
    //         if (edge.node) {
    //             photos.push(edge.node);
    //         }
    //         });
    //         console.log(photos);
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }).catch(err => {
    //     console.warn(`\nCould not fetch instagram posts. Error status ${err}`);
    //     return null;
    // });

    // async function getInstagramPictures (profileName) {
    //     const baseUrl = "https://www.instagram.com";
    //     const profileUrl = `${baseUrl}/${profileName}`;
    //     const jsonDataUrl = `${profileUrl}/?__a=1`;
      
    //     const response = await fetch(jsonDataUrl, fetch_get);
    //     const jsonData = await response.json();
    //     const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

    //     if (response.ok) {
    //         const photos:string[] = [];
    //         try {
    //             let _current:Insta_ThumbnailRessource_Interface | undefined;
    //             pictures.forEach((edge:Insta_Edge_Interface, index) => {
    //                 if(index >= 4) {
    //                     return null;
    //                 }
    //                 if (edge.node && edge.node.thumbnail_resources.length > 0) {
    //                     _current = edge.node.thumbnail_resources.pop();
    //                     _current != undefined && photos.push(_current.src);
    //                 }
    //             });
    //             return photos.filter(e => e);
    //         }
    //         catch(err:any) {
    //             console.log(err);
    //             return [];
    //         }
    //         return pictures;
    //     } else {
    //         throw new Error(pictures);
    //     }
    // }

    
    // async function loadPics() {
    //     console.log(`loadPics(${insta_id})`);
    //     // let _result = await InstaPost();
    //     try {
    //         setPics(await getInstagramPictures('inmodeaesthetics'));
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
        // console.log(`result => `);
        // console.log(_result);
        // setPics(_result);
    // }

    // React.useEffect(() => {
    //     console.log('React.useEffect()');
    //     console.log(pics);
    //     if(pics.length == 0 || pics != null) {
    //         loadPics();
    //     }
    // }, []);

    return (
        <div className="follow-instagram">
            {/* <div className="container"> */}
                <h2>
                    <a href="https://www.instagram.com/inmode.france" target="_blank" rel="noreferrer" title="Suivez-nous sur Instagram">
                        Suivez nous sur Instagram
                    </a>
                </h2>
                <div className="wrapper">
                    {datas && datas.map((post, key) => {
                        return(
                            <div key={key} className="elem">
                                <img
                                    className="background-image"
                                    src={post.node.localFile.childImageSharp.fluid.srcWebp}
                                    srcSet={post.node.localFile.childImageSharp.fluid.srcSetWebp}
                                    alt={`insta-${key + 1}`}
                                />
                                <a href="https://www.instagram.com/inmodeaesthetics/" className="zone-link" target="_blank" rel="noreferrer" title="Suivez Inmode sur Instagram"></a>
                            </div>
                        );
                    })}
                </div>
            {/* </div> */}
        </div>
    );
};

interface FollowInstagram {
    insta_id: string | number;
};

export default FollowInstagram;