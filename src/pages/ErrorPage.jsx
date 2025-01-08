import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-[60px]">
          <div className="text-center container mx-auto flex flex-col md:flex-row items-center gap-10">
            
            <img src="https://i.ibb.co.com/DgnKY6t/giphy.webp" alt="" className="py-5 order-2 md:order-1"/>
            
            <div className="w-full order-1 md:order-1">
              <img src="https://i.ibb.co.com/WKWSCHN/logo.png" alt="" className="w-52 mx-auto"/>
              <div className="py-5"></div>
              <h1 className="text-2xl font-semi text-gray-900 mb-2 text-red-500">
                Error 404
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                  We couldn't find the page you're looking for.
              </p>
              <Link
                to="/"
                className="btn1"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      );
};

export default ErrorPage;