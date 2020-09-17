// import { graphql, useStaticQuery } from "gatsby";
// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import FixedMenu from "../components/fixed-menu";
// import { footer_process } from "../functions/footer_process";
// import { header_process } from "../functions/header_process";
// import Slides from "../components/home/slides";
// import Unknown404 from "../components/404/unknown-404";

// const NotFoundPage = () => {
//   const datas = useStaticQuery(graphql`
//     {
//       allMysqlHeaderBottom {
//         edges {
//           node {
//             container
//             name
//             position
//             type
//             under
//             url
//             variant
//             mysqlId
//           }
//         }
//       }
//     }
//   `).allMysqlHeaderBottom.edges;

//   return (
//     <Layout
//       process_header={{'header-top': true, 'header-bottom': true}}
//       header_process_functions={{'header-top': header_process, 'header-bottom': header_process}}
//       process_footer={{'footer': true}}
//       footer_process_functions={{'footer': footer_process}}
//     >
//       <FixedMenu
//         datas={datas}
//         process={true}
//         process_function={header_process}
//       />
//       <SEO title="404"/>
//       <Unknown404/>
//       {/* <Slides from="404"/> */}
//     </Layout>
//   );
// }

// export default NotFoundPage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
