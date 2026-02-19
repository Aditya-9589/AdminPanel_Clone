import React from 'react'
import { useParams } from 'react-router-dom'
import BlogListPage from '../../components/blogs/pages/BlogListPage'
import BlogDetailPage from '../../components/blogs/pages/BlogDetailPage'

const BlogsWrapper = () => {

    // <BlogListPage />

    const { slug } = useParams();

    if (slug) {
        return <BlogDetailPage />;
    }

    return <BlogListPage />;

}

export default BlogsWrapper;