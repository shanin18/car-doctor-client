import Navbar from "../Shared/Navbar/Navbar";
import errorImage from "/images/error/Frame.png";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-[calc(100vh-194px)]">
        <img src={errorImage} alt="404 image" />
      </div>
    </div>
  );
};

export default ErrorPage;
