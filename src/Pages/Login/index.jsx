
import "../Login/Login.css";
import Button from "../../Components/button"
import { useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { signInGoogle } from "../../Service/authentication.js"
import { setToken } from "../../Service/token.js"

function Login() {
  const navigate = useNavigate()
  const logOn = async (e) => {
    e.preventDefault();
    signInGoogle()
      .then((data) => {
        setToken(data.token)
        navigate("/register");
      })
      .catch((error) => {
        return(error)
      })
  }

  return (
    <>
      <header className='headerLogin'>
        <h1 className='welcome'>Bem-vindos</h1>
      </header>
      <main className='mainLogin'>
        <label className='labelLogin'>Faça seu login com o Google: </label>
        <Button className="btnGoogle" onClick={logOn}> <FcGoogle />Google</Button>
        <Button className="btnWhats" onClick={logOn}> <FcGoogle />Google</Button>
      </main>
    </>
  );

}
export default Login;