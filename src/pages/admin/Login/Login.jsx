import { Link } from "react-router-dom";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Logo from "../../../elements/Logo";
import Title from "../../../elements/Title";
import styles from "./Login.module.css";
import Paragraph from "../../../elements/Paragraph";

const Login = () => {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.content}>
            <div className={styles.cardlogin}>
                <div className="text-center my-3">
                <Logo/>
                </div>
                <Input
                label="username"
                type="text"
                placeholder="username"
                />
                <Input
                label="email"
                type="email"
                placeholder="email"
                />
                <div className="text-center">
                <Link to="/admin">
                    <Button $primary>Login</Button>
                </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
