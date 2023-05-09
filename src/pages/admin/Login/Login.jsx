import { Link, useNavigate } from "react-router-dom";
import Button from "../../../elements/Button";
import Input from "../../../elements/Input";
import Logo from "../../../elements/Logo";
import Title from "../../../elements/Title";
import styles from "./Login.module.css";
import Paragraph from "../../../elements/Paragraph";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // send email and password to firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login berhasil", user);
        navigate(`/admin`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.content}>
          <div className={styles.cardlogin}>
            <form action="">
              <div className="text-center my-3">
                <Logo />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div> */}
              <Input
                  label="email"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChangeText={(e) => setEmail(e.target.value)}
                  />
                  <Input
                  label="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  onChangeText={(e) => setPassword(e.target.value)}
                  />
              <div className="text-center">
                <p style={{color:'red'}}>{errorMessage}</p>
                <Button $primary onClick={handleLogin}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
