import person from "/images/about_us/person2.png"
import parts2 from "/images/about_us/parts2.png"

const About = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-16'>
            <div className='md:w-1/2 relative'>
                <img src={person} className='w-full' alt="image" />
                <img src={parts2} className='w-[40%] md:w-auto absolute bottom-0 right-0 md:-right-14 xl:-bottom-14' alt="image" />
            </div>
            <div className='md:w-1/2 space-y-8 lg:pr-20 p-2'>
                <h3 className='text-[#FF3811] font-bold'>About Us</h3>
                <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                <p className='text-[#737373]'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. 
                <br /><br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. 
                </p>
                <button className="btn bg-[#FF3811] capitalize rounded-md">Get More Info</button>
            </div>
        </div>
    );
};

export default About;