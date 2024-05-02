import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const query = graphql`
    query ($slug: String!){
        contentfulBlogPost (slug:{eq: $slug}){
            title
            publishDate(formatString: "MMMM Do, YYYY")
            body{
                raw
            }
        }
    }
`


const Blog = (props) => {
    
    // console.log(JSON.parse(props.data.contentfulBlogPost.body.raw));
    // console.log(JSON.parse());

    const options = {
        renderNode: {
            "embedded-asset-block" : (node) => {
                console.log(node,"nodeeeee");
            }
        }
    }

    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishDate}</p>
            {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
        </Layout>
    )
}

export default Blog
