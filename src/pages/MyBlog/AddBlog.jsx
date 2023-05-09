import { useState } from "react";
import Title from "../../elements/Title";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import { getBlogList } from "./BlogAdmin";
import { gql, useMutation } from "@apollo/client";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import { useNavigate } from "react-router-dom";

// mutation untuk add blog baru
const ADD_BLOG = gql`
  mutation MyQuery($object: blog_insert_input!) {
    insert_blog_one(object: $object) {
      id
      title
      date
      article
    }
  }
`;

const AddBlog = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [article, setArticle] = useState('')

    const navigate = useNavigate()

    //mutation untuk manggil query
    const [insertBlog] = useMutation(ADD_BLOG, {
        refetchQueries: [getBlogList],
    });

    const handleSubmit = (event) => {

        event.preventDefault();
    
        //trigger mutation dari useMutation
        insertBlog({
            variables: {
              object: {
                title: title,
                date: date,
                article: article,
              },
            },
          }).then(() => {
            alert('Blog berhasil ditambahkan')
            navigate(-1);
          })
      };

    return(
        <div className="addblog py-4 px-3">
            <Title $h2>Tambah Artikel</Title>
            <form action="">
                <div className="form col-5 py-3">
                <Input
                    label="Judul"
                    type="text"
                    placeholder="Judul Artikel"
                    value={title}
                    onChangeText={(e) => setTitle(e.target.value)}
                />
                <Input
                    label="Tanggal"
                    type="date"
                    placeholder="Tanggal Portofolio"
                    value={date}
                    onChangeText={(e) => setDate(e.target.value)}
                />
                <Input
                    label="Artikel"
                    type="text"
                    placeholder="Artikel"
                    value={article}
                    onChangeText={(e) => setArticle(e.target.value)}
                />
                <Button $primary onClick={handleSubmit}>
                    Tambah
                </Button>
                </div>
            </form>
            </div>
    )
}

export default AddBlog;