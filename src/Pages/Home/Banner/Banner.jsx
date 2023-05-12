import img1 from "/images/banner/1.jpg";
import img2 from "/images/banner/2.jpg";
import img3 from "/images/banner/3.jpg";
import img4 from "/images/banner/4.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="carousel h-[700px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center">
          <div className="space-y-8 w-[522px] pl-4 md:pl-24 mb-5">
          <h1 className="font-bold text-5xl md:text-6xl text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#FF3811] capitalize rounded-md">Discover More</button>
            <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-white capitalize rounded-md">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 bottom-12 right-12">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#ffffff33] border-[#ffffff33] hover:bg-[#FF3811] hover:border-[#FF3811]"
          >
            <BsArrowLeft className="text-lg"></BsArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            <BsArrowRight className="text-lg"></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center">
          <div className="space-y-8 w-[522px] pl-4 md:pl-24 mb-5">
          <h1 className="font-bold text-5xl md:text-6xl text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#FF3811] capitalize rounded-md">Discover More</button>
            <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-white capitalize rounded-md">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 bottom-12 right-12">
          <a
            href="#slide1"
            className="btn btn-circle bg-[#ffffff33] border-[#ffffff33] hover:bg-[#FF3811] hover:border-[#FF3811]"
          >
            <BsArrowLeft className="text-lg"></BsArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            <BsArrowRight className="text-lg"></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center">
          <div className="space-y-8 w-[522px] pl-4 md:pl-24 mb-5">
          <h1 className="font-bold text-5xl md:text-6xl text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#FF3811] capitalize rounded-md">Discover More</button>
            <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-white capitalize rounded-md">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 bottom-12 right-12">
          <a
            href="#slide2"
            className="btn btn-circle bg-[#ffffff33] border-[#ffffff33] hover:bg-[#FF3811] hover:border-[#FF3811]"
          >
            <BsArrowLeft className="text-lg"></BsArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            <BsArrowRight className="text-lg"></BsArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] flex items-center">
          <div className="space-y-8 w-[522px] pl-4 md:pl-24 mb-5">
          <h1 className="font-bold text-5xl md:text-6xl text-white">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-lg text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-5">
            <button className="btn bg-[#FF3811] capitalize rounded-md">Discover More</button>
            <button className="btn btn-outline hover:bg-[#FF3811] hover:border-[#FF3811] text-white capitalize rounded-md">Latest Project</button>
          </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-6 bottom-12 right-12">
          <a
            href="#slide3"
            className="btn btn-circle bg-[#ffffff33] border-[#ffffff33] hover:bg-[#FF3811] hover:border-[#FF3811]"
          >
            <BsArrowLeft className="text-lg"></BsArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] border-[#FF3811]"
          >
            <BsArrowRight className="text-lg"></BsArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
