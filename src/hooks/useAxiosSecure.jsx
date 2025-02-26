import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.error("Error from Axios interceptor:", error.response);

        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
