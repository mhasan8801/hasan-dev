import { Link } from "react-router-dom";
import Button from "../../../elements/Button";
import Title from "../../../elements/Title";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import TextColor from "../../../elements/TextColor";

//query graphql 
export const getPortfolioList = gql`
  query QueryPortfolio {
    portfolio {
      id
      title
      img
      description
      linkDemo
      linkGithub
    }
  }
`;

const DELETE_PORTFOLIO = gql`
  mutation deletePortfolio ($id: Int!) {
    delete_portfolio(where: {id: {_eq: $id}}) {
        affected_rows
      }
  }
`;

const PortfolioAdmin = () => {
  const { data, loading, error } = useQuery(getPortfolioList);
  const [listPortfolio, setListPortfolio] = useState([]);

  const [deletePortfolio] = useMutation(DELETE_PORTFOLIO, {
    refetchQueries: [getPortfolioList],
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Apakah anda yakin ingin menghapus ?`)


    if(confirmDelete) {
      deletePortfolio({
        variables: {
          id: id,
        }
      });
    }
  }

  useEffect(() => {
    console.log("loading ", loading); //cek fetch data masih berlangsung/selesai
    console.log("data gql : ", data); //cek fetch data yang diminta
    console.log("error : ", error); //cek jika ada error


    // mengecek proses fetch data
    if (!loading && error !== undefined) {
      setListPortfolio(data.portfolio); //set data ke usestate
    }
  });

  return (
    <>
      <div className="portfolioadmin py-4 mx-4">
        <Title $h2>Portofolio Saya</Title>
        <Link to="/admin/portofolio/add">
          <Button $primary>Tambah</Button>
        </Link>
        <div className="form">
          <table className="table my-4">
            <thead>
              <tr className="table-secondary">
                <th scope="col">No</th>
                <th scope="col">Judul</th>
                <th scope="col">Gambar</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Link Demo</th>
                <th scope="col">Link Project</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {
                  loading? 
                  <div className="text-center">
                    <TextColor>Loading data</TextColor>
                    <CgSearchLoading size='2rem' color='#5E3BEE'/>
                  </div>:
                  data?.portfolio.map((item, index) => 
                    <tbody>
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.title}</td>
                        <td>
                          <img src={item.img} alt="Link Image Firebase" />
                        </td>
                        <td>{item.description}</td>
                        <td>{item.linkDemo}</td>
                        <td>{item.linkGithub}</td>
                        <td>
                          <Link to={`/admin/portofolio/edit/${item.id}`}>
                            <IconContext.Provider
                              value={{ color: "blue", size: "2rem" }}
                            >
                              <div>
                                <AiFillEdit />
                              </div>
                            </IconContext.Provider>
                          </Link>
                          <IconContext.Provider value={{ color: "red", size: "2rem" }}>
                            <div style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}>
                              <AiFillDelete />
                            </div>
                          </IconContext.Provider>
                        </td>
                      </tr>
                    </tbody>
                  )
            }
          </table>
        </div>
      </div>
    </>
  );
};

export default PortfolioAdmin;
