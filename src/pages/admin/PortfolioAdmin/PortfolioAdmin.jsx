import { Link } from "react-router-dom";
import Button from "../../../elements/Button";
import Title from "../../../elements/Title";
import AdminPanel from "../Layout/Admin";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IconContext } from "react-icons";

const PortfolioAdmin = () => {
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
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Website Siakad</td>
                <td>Gambar</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, illum?
                </td>
                <td>Link A</td>
                <td>Link B</td>
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
                  <IconContext.Provider
                      value={{ color: "red", size: "2rem" }}
                    >
                      <div>
                      <AiFillDelete />
                      </div>
                    </IconContext.Provider>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PortfolioAdmin;
