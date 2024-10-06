import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [input, setInput] = useState({
    fullName: "",
    photoUrl: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleRegisterEvent = (e) => {
    e.preventDefault();
    createUser(input.email, input.password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(input.fullName, input.photoUrl).then(() => {
          console.log("profile updated successfully");
        });
        console.log(user);
        toast(`${user.email} user created successfully`);
      })
      .catch((error) => {
        console.log(error.message);
        toast(` Registration Faiilled! ${error.message}`);
      });
  };

  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegisterEvent}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={input?.fullName}
                placeholder="Full name"
                className="input input-bordered"
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                value={input?.photoUrl}
                placeholder="photo Url"
                className="input input-bordered"
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={input?.email}
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
                value={input?.password}
                placeholder="password"
                className="input input-bordered"
                onChange={handleInput}
                required
              />
              <label className="label">
                already have passwor?
                <Link className="text-blue-600 underline text-lg" to="/login">
                  login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
