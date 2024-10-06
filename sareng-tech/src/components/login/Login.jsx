import { useAuth } from "@/context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { signIn, loginWithGmail, loginWithGithub } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    signIn(input.email, input.password)
      .then((result) => {
        console.log(result.user);
        toast("User Login Successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast(" invalid user or password ");
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGmail(googleAuthProvider)
      .then((result) => {
        toast("User Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast("User Login Successful");
      });
  };

  const handleLoginWithGithub = () => {
    loginWithGithub(githubAuthProvider)
      .then((result) => {
        console.log("Github Login Successful");
        toast("Github Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast(`Login Failled! ${error.message}`);
        console.log(`Login Failled! ${error.message}`);
      });
  };

  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmitEvent}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                onChange={handleInput}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="card-body">
            <div>
              <button
                className="btn btn-secondary"
                onClick={handleLoginWithGoogle}
              >
                Login with Google
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={handleLoginWithGithub}
              >
                Login with Github
              </button>
            </div>
          </div>

          <div className="flex p-8 space-x-1">
            <span>Are you want to </span>
            <Link className="italic hover:underline" to="/registration">
              <span className="text-green-500">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
