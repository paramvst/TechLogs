import { Stack } from '@chakra-ui/react';
import { React, useEffect, useState } from 'react';
import { NavbarItem, Blogs } from '../components';
import { getBlogs } from '../services/blogservice';
const Landing = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const {data, status} = await getBlogs();

    if (status === 200) { 
      setBlogs(data.blogs);
    }
  };
  return (
    <>
      <NavbarItem />
      <Stack margin={'2%'}>
        <div className="row" style={{marginLeft: '7%', marginRight: '7%'}}>
        {blogs.map((blog, index) => {
          return (
              <div className="col-md-3" key={index}>
                <Blogs id={blog._id} heading={blog.heading} description={blog.description} />
              </div>
          );
        })}
        </div>
      </Stack>
    </>
  );
};

export default Landing;
