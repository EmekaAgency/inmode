import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import axios from 'axios';
import Layout from '../components/layout';
import StrapiCreatePage from '../components/Tests/strapi-create';
import StrapiDeletePage from '../components/Tests/strapi-delete';
import StrapiLoadPage from '../components/Tests/strapi-load';
import StrapiUpdatePage from '../components/Tests/strapi-update';

const TestPage = ({  }) => {

    return (
        <Layout>
            <StrapiCreatePage/>
            <StrapiUpdatePage/>
            <StrapiLoadPage/>
            <StrapiDeletePage/>
        </Layout>
    );
};

export default TestPage;