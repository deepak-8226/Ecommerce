import styles from "../../styles/Login.module.css";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [value, setvalue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (value.username == "" && value.username == undefined) {
      toast.warn("Please enter username");
    } else if (value.password == "" && value.password == undefined) {
      toast.warn("please enter password");
    }
    axios
      .post("https://dummyjson.com/auth/login", {
        username: value.username,
        password: value.password,
      })

      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        router.push("/");
        if (!loading) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        toast.error("falid to login");
      });
  };

  return (
    <>
      {loading ? (
        <h1 className="text-2xl font-bold text-center mt-5 text-indigo-500">
          Loading...
        </h1>
      ) : (
        ""
      )}
      <div className={styles.card}>
        <Helmet>
          <title>login form</title>
          <meta name="description" content="login to redirect home page" />
        </Helmet>
        <div className={styles.card_content}>
          <div className={styles.card_title}>
            <h2>LOGIN</h2>
            <div className={styles.underline_title}></div>
          </div>
          <form method="post" className={styles.form}>
            <label for="user-email" style={{ paddingTop: "22px" }}>
              Email
            </label>
            <input
              id="user-email"
              onChange={handleChange}
              className={styles.form_content}
              name="username"
              value={value.username}
              required
            />
            <div className={styles.form_border}> </div>
            <label for="user-password" style={{ paddingTop: "22px" }}>
              Password
            </label>
            <input
              id="user-password"
              onChange={handleChange}
              className={styles.form_content}
              name="password"
              value={value.password}
              required
            />
            <div className={styles.form_border}></div>
            <a href="#">
              <legend className={styles.forgot_pass}>Forgot password?</legend>
            </a>
            <input
              className={styles.submit_btn}
              type="submit"
              name="submit"
              onClick={onSubmit}
            />
            <a href="#" className={styles.signup}>
              Don't have account yet?
            </a>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
