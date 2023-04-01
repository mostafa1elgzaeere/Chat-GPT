import React from 'react';
import Article from '../../components/Article/Article';
import "./Blog.css"


const Blog = () => {
    return (
        <div className='blog-container' id="blog">
            <h2 className='blog-title'>A lot is happening,<br></br> We are blogging about it.</h2>

            <div class="blog-grid-parent">
                <Article/>

            </div>


        </div>
    );
}

export default Blog;
