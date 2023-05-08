import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Title from "../../elements/Title";
import Button from "../../elements/Button";
import TextColor from "../../elements/TextColor";
import { Link } from "react-router-dom";
import { CgSearchLoading } from "react-icons/cg";

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

const BlogAdmin = () => {
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
    <>
      <div className="blogadmin py-4 mx-4">
        <Title $h2>Blog Saya</Title>
        <Link to="/admin/blog/add">
          <Button $primary>Tambah</Button>
        </Link>
        <div className="form">
          <table className="table my-4">
            <thead>
              <tr className="table-secondary">
                <th scope="col">No</th>
                <th scope="col">Judul</th>
                <th scope="col">Date</th>
                <th scope="col">Article</th>
              </tr>
            </thead>
            {loading ? (
              <div className="text-center">
                <TextColor>Loading data</TextColor>
                <CgSearchLoading size="2rem" color="#5E3BEE" />
              </div>
            ) : (
              data?.blog.map((blog, index) => (
                <tbody>
                  <tr key={blog.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{blog.title}</td>
                    <td>{blog.date}</td>
                    <td>{blog.article}</td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default BlogAdmin;
