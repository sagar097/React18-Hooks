import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = (props) => {

  let { blogs, onAdd, handleChange, createPost } = props;
  let { title, body, author} = createPost || {};

  const [blogsList, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchData = () => {

    setTimeout(() => {
      try {

        setIsPending(false);
        setBlogs(blogs);
        setError(null);

      } catch (err) {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);

      }
    }, 1000);
  }


  useEffect(() => {
   
    fetchData();

    console.log("fetching data")

    return () => {
      console.log('my cleanup');
    }

  }, [blogs])


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogsList && <BlogList blogs={blogsList} />}

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="blog-title"
            name="title"
            label="Title"
            placeholder="title"
            multiline
            value={title}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>

          <TextField
            id="blog-body"
            name="body"
            label="Body"
            multiline
            placeholder='enter discription'
            value={body}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="blog-author"
            name="author"
            label="Author"
            placeholder="author"
            value={author}
            onChange={handleChange}
          />

        </Grid >
        <Grid item xs={12} >
          <Button
            fullWidth
            variant="contained"
            style={{ margin: '12px' }}
            onClick={onAdd}
          >
            Add Blog
          </Button>
        </Grid>

      </Grid>

    </div>
  );
}

export default Home;
