import { gql, useMutation } from "@apollo/client";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Title from "../../../elements/Title";
import { getPortfolioList } from "./PortfolioAdmin";
import { useState } from "react";
import { storage } from "../../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router-dom";

// mutation untuk add portfolio baru
const ADD_PORTFOLIO = gql`
  mutation MyQuery($object: portfolio_insert_input!) {
    insert_portfolio_one(object: $object) {
      id
      title
      description
    }
  }
`;

const AddPortfolio = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [linkDemo, setLinkDemo] = useState('')
  const [linkGithub, setLinkGithub] = useState('')

  const navigate = useNavigate()

  //state untuk upload file firebase
  const [fileImg, setFileImg] = useState('')

  //state progress upload file firebase
  const [percent, setPercent] = useState(0)

  //mutation untuk manggil query
  const [insertPortfolio] = useMutation(ADD_PORTFOLIO, {
    refetchQueries: [getPortfolioList],
  });

  const handleSubmit = (event) => {

    event.preventDefault();

    //call handle upload file
    handleUploadFile();
    

  };

  const handleUploadFile = () => {

        // handle file ref
        const storageRef = ref(storage, `/files/${fileImg.name}`)

        //handle file upload progress
        const uploadTask = uploadBytesResumable(storageRef, fileImg)
    
        //handle file upload    
        uploadTask.on(
          "state_changed",
    
          //callback ketika upload progress
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            //update progress by percent
            setPercent(percent)
            console.log(`Progress = ${percent}%`)
          },
    
          //callback ketika upload gagal
          (err) => {
            console.log('error upload file ', err);
          },
    
          //callback ketika berhasil upload
          () => {
            //download url
            getDownloadURL(uploadTask.snapshot.ref)
              .then((url) => {
                console.log('url download file : ', url)

                //trigger mutation dari useMutation
                insertPortfolio({
                  variables: {
                    object: {
                      title: title,
                      description: description,
                      linkDemo: linkDemo,
                      linkGithub: linkGithub,
                      img: url
                    },
                  },
                }).then(() => {
                  alert('Portofolio berhasil ditambahkan')
                  navigate(-1);
                })
              })
          }
        )    
  }

  return (
    <div className="addportfolio py-4 px-3">
      <Title $h2>Tambah Portofolio</Title>
      <form action="">
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
            onChangeText={(e) => setFileImg(e.target.files[0])}
          />
          <p>{percent} %</p>
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
          <Button $primary onClick={handleSubmit}>
            Tambah
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPortfolio;
