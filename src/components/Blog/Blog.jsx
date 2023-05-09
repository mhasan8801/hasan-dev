import styles from "./Blog.module.css";
import Title from "../../elements/Title.jsx";
import ImageBlog from "../../assets/images/blog.png";
import CardBlog from "../../elements/CardBlog";
import TextColor from "../../elements/TextColor";
import { gql, useQuery } from "@apollo/client";
import { getBlogList } from "../../pages/MyBlog/MyBlog";
import { useState } from "react";
import { useEffect } from "react";

const getLastBlog = gql`
query PickBlog3 {
  blog_aggregate(limit: 3, order_by: {id: desc}) {
    nodes {
      id
      title
      date
      article
    }
  }
}
`

const Blog = () => {

  const { data, loading, error } = useQuery(getLastBlog);
  const [listBlog, setlistBlog] = useState([]);

  useEffect(() => {
    console.log("loading ", loading); //cek fetch data masih berlangsung/selesai
    console.log("data gql : ", data); //cek fetch data yang diminta
    console.log("error : ", error); //cek jika ada error

    // mengecek proses fetch data
    if (!loading && error !== undefined) {
      
      setlistBlog(data.blog); //set data ke usestate
    }
  });

  return (
    <div className={styles.blog}>
      <div className="container">
        <div className={styles.title}>
            <Title $h2><TextColor $bold>Blog</TextColor> dan Artikel</Title>
            <Title $h3>Artikel <TextColor>Terakhir</TextColor></Title>
        </div>
        <div className="row" id={styles.row}>
          {loading? (
              <p>loading</p>
            ) : (
              data?.blog_aggregate.nodes?.map((blog) =>(
                <div className="col-md-4" key={blog.id}>
                  <CardBlog
                  img={ImageBlog}
                  title={blog.title}
                  tanggal={blog.date}
                  artikel={blog.article}
                  />
              </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
