import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Title from "../../elements/Title";
import ImageBlog from "../../assets/blogg.png";
import CardBlog from "../../elements/CardBlog";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

//query graphql
export const getBlogList = gql`
  query QueryBlog {
    blog {
      id
      title
      date
      article
    }
  }
`;

const MyBlog = () => {

  const { data, loading, error } = useQuery(getBlogList);
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
    <div className="myblog">
      <Navbar />
      <div className="container">
        <div className="header text-center pt-4">
          <Title $h2>Blog Saya</Title>
        </div>
        <div className="content">
        <div className="row">
          {loading? (
            <p>loading</p>
          ) : (
            data?.blog.map((blog) =>(
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
      <Footer />
    </div>
  );
};

const styles = {
    a: {
        textDecoration: 'none',
        margin: '3rem 1rem'
    }
}

export default MyBlog;
