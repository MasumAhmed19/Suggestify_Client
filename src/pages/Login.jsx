import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { user, setUser, signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();
      navigate('/');
      setUser(res.user);
      toast.success('Signing Successful');

    }catch (err){
      toast.error('Login Failed');
      console.log(err)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
        .then((res)=>{
            navigate('/');
            setUser(res.user);
            // TOAST: successfull login 
        }).catch((err)=>{
            // TOAST: Login failed 
            console.log(err);
        })

    // console.log(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-white to-[#ECE5FE] p-4">
      {/* Header */}
      <div className="flex w-full justify-between items-center p-5">
        <div>
          <Link to='/'>
            <img
              src="https://i.ibb.co.com/WKWSCHN/logo.png"
              alt="Logo"
              className="w-28"
            />
          </Link>
        </div>
        <div>
          <Link className="btn1" to="/">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Login Container */}
      <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
        <h4 className="text-center text-xl font-semibold mb-2">Welcome back to Suggestify!</h4>
        <h5 className="text-center text-[#8b8c8f] mb-6">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#7201FF]">
            Sign up for free
          </Link>
        </h5>

        {/* Google Login */}
        <div
          className="flex items-center justify-center border px-4 py-3 rounded-md mb-6 cursor-pointer hover:bg-gray-100 transition-all"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" />
          <span>Log in with Google</span>
        </div>

        {/* Email Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h5 className="text-center text-sm">or Log in with email:</h5>

          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <button
            type="submit"
            className="btn1 w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
          >
            Log in
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <Link to="/forgot-password" className="text-[#7201FF] hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
