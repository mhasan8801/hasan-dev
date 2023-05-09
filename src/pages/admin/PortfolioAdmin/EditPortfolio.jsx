import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Title from "../../../elements/Title";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getPortfolioList } from "./PortfolioAdmin";

const getPortfolio = gql`
    query QueryPortfolio($id: Int!) {
        portfolio(where: {id: {_eq: $id}}) {
        description
        id
        img
        linkDemo
        linkGithub
        title
        }
    }
`

const UPDATE_PORTFOLIO = gql`
    mutation updatePortfolio($id: Int!, $title: String, $description: String = "", $linkDemo: String, $linkGithub: String, $img: String) {
        update_portfolio_by_pk(pk_columns: {id: $id}, _set: {title: $title, description: $description, linkDemo: $linkDemo, linkGithub: $linkGithub, img: $img}) {
        id
        title
        }
    }
`

const EditPortfolio = () => {

    const {id} = useParams();
    const {data, loading, error} =  useQuery(getPortfolio, {variables: {
        id: id
    }})
    const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO, {
        refetchQueries: [getPortfolioList]
    })

    const [portfolio, setPortfolio] = useState({})

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [linkDemo, setLinkDemo] = useState('')
    const [linkGithub, setLinkGithub] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {
        setTitle(data?.portfolio[0].title)
        setDescription(data?.portfolio[0].description)
        setLinkDemo(data?.portfolio[0].linkDemo)
        setLinkGithub(data?.portfolio[0].linkGithub)
    }, [loading])

    const handleUpdate = () => {
        const confirmUpdate = window.confirm('Apakah anda yakin ingin mengubah ?')

        if (confirmUpdate) {
            updatePortfolio({
                variables: {
                    id: id,
                    title: title,
                    description: description,
                    img: img === "" ? data?.portfolio[0].img : img,
                    linkDemo: linkDemo,
                    linkGithub: linkGithub,
                }
            }).then(() => {
                alert('Portofolio berhasil ditambahkan')
                navigate(-1);
              })
        }
    }

    return(
        <div className="editportfolio py-4 px-3">
            <Title $h2>Edit Portofolio</Title>
            <div className="form col-5 py-3">
                <Input
                label="Judul"
                type="text"
                placeholder="Judul Portofolio"
                value={title}
                onChangeText={(e) => setTitle(e.target.value)}
                />
                <Input
                label="Gambar"
                type="file"
                placeholder="Gambar Portofolio"
                value={img}
                onChangeText={(e) => setImg(e.target.files[0])}
                />
                <Input
                label="Deskripsi"
                type="text"
                placeholder="Deskripsi Portofolio"
                value={description}
                onChangeText={(e) => setDescription(e.target.value)}
                />
                <Input
                label="Link Demo"
                type="text"
                placeholder="Link Demo Portofolio"
                value={linkDemo}
                onChangeText={(e) => setLinkDemo(e.target.value)}
                />
                <Input
                label="Link Github"
                type="text"
                placeholder="Link Github Portofolio"
                value={linkGithub}
                onChangeText={(e) => setLinkGithub(e.target.value)}
                />
                <Button $primary onClick={handleUpdate}>Simpan</Button>
            </div>
        </div>
    )
}

export default EditPortfolio;