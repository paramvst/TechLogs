import axios from "axios";

const uri = 'http://localhost:5000/api/v1/blogs'

export const getBlogs = async () => {
  try {
    const blogRespose = await axios.get(`${uri}/fetch`);
    console.log(blogRespose)
    return blogRespose;
  } catch (error) {
    return error.response;
  }
};

export const getBlog = async (id) => {
  try {
    console.log(id)
    const response = await axios.post(`${uri}/fetch`, {id});
    return response;
  } catch (error) {
    return error.response;
  }
}


  // const blogs = [
  //   { _id:1,
  //     heading: 'blog 1' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:2,heading: 'blog 2' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:3,heading: 'blog 3' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:4,heading: 'blog 4' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:5,heading: 'blog 1' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:6,heading: 'blog 2' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:7,heading: 'blog 3' ,
  //   description: 'A little description would go here max charlength: 50.',},
  //   { _id:8,heading: 'blog 4' ,
  //   description: 'A little description would go here max charlength: 50.',},
  // ];