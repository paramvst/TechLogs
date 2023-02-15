import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavbarItem } from '../components';
import { getBlog } from '../services/blogservice';
import Blogpage from './Blogpage';

const Blog = () => {
  const [blog, setBlog] = useState({})
  const { id } = useParams();
  useEffect(() => {
    loadBlog();
  },[]);

  const loadBlog = async () => {
    const {status, data} = await getBlog(id);

    if (status === 200) {
      console.log("Individual blog: ", blog)
      setBlog(data);
    }
    else
    console.log('no getting the blog');
  };
  return (
    <div>
      <NavbarItem />

      <Blogpage />
    </div>
  );
};

export default Blog;
