import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import authenticationInitialize from "../../../FireBase/FireBase.init";
import useAuth from "../../hooks/useAuth";

authenticationInitialize();

const Register = () => {
      const { signInWithGoogle } = useAuth();

    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user,setUser]=useState({});
    const [error,setError]=useState('');

    const handleRegister = (e) => {
        if(password.length < 6){
            setError('Password must be at least 6 characters!!')
            return;
        }
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential=>{
        setUser(userCredential.user)
        setError('');
      })
      .catch(error=>{
        setError(error.message);
      })
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

  return (
    <div className="w-50 mx-auto h-auto">
      <h1>Please Registration</h1>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Email
        </label>
        <input
          onBlur={handleEmailChange}
          type="email"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="enter your email"
          required="required"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Password
        </label>
        <input
          onBlur={handlePasswordChange}
          type="password"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="enter your password"
          required="required"
        />
      </div>
      <p className='text-danger'>{error}</p>
      <button
        onClick={handleRegister}
        className="btn btn-secondary d-block"
        type="submit"
      >
        Registration
      </button>
      <button
        onClick={signInWithGoogle}
        className="btn btn-primary d-block my-4"
      >
        Login with Google
      </button>
      <p>If you already registration you can Login.</p>
      <Link to="/login">
        <button className="btn btn-secondary mb-5 ">Login</button>
      </Link>
    </div>
  );
};

export default Register;
