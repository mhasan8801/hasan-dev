import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Title from "../../../elements/Title";

const EditPortfolio = () => {
    return(
        <div className="editportfolio py-4 px-3">
            <Title $h2>Edit Portofolio</Title>
            <div className="form col-5 py-3">
                <Input
                label="Judul"
                type="text"
                placeholder="Judul Portofolio"
                />
                <Input
                label="Gambar"
                type="file"
                placeholder="Gambar Portofolio"
                />
                <Input
                label="Deskripsi"
                type="text"
                placeholder="Deskripsi Portofolio"
                />
                <Input
                label="Link Demo"
                type="text"
                placeholder="Link Demo Portofolio"
                />
                <Input
                label="Link Github"
                type="text"
                placeholder="Link Github Portofolio"
                />
                <Button $primary>Simpan</Button>
            </div>
        </div>
    )
}

export default EditPortfolio;