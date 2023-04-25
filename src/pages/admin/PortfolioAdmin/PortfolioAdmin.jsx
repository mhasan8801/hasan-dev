import { Link } from "react-router-dom";
import Button from "../../../elements/Button";
import Title from "../../../elements/Title";
import AdminPanel from "../Layout/Admin";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import TextColor from "../../../elements/TextColor";

const getPortfolioList = gql`
  query QueryPortfolio {
    portfolio {
      id
      title
      description
      link_demo
      link_github
    }
  }
`;

const PortfolioAdmin = () => {
  const { data, loading, error } = useQuery(getPortfolioList);
  const [listPortfolio, setListPortfolio] = useState([]);

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
                  data?.portfolio.map(item => 
                    <tbody>
                      <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.title}</td>
                        <td>Gambar</td>
                        <td>{item.description}</td>
                        <td>{item.link_demo}</td>
                        <td>{item.link_github}</td>
                        <td>
                          <Link to="/admin/portofolio/edit">
                            <IconContext.Provider
                              value={{ color: "blue", size: "2rem" }}
                            >
                              <div>
                                <AiFillEdit />
                              </div>
                            </IconContext.Provider>
                          </Link>
                          <IconContext.Provider value={{ color: "red", size: "2rem" }}>
                            <div>
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
