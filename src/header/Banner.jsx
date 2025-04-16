import bg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'

const Banner = ({handleFreeCredit}) => {
    return (
        <div
            className="hero min-h-screen w-11/12 mx-auto rounded-lg"
            style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className=""></div>
            <div className="px-5 md:px-40 text-center">
                <div className="">
                    <div className='flex justify-center mb-5'>
                    <img src={banner} alt="Banner" />
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5">
                    Beyond Boundaries Beyond Limits
                    </p>
                    <button
                    onClick={handleFreeCredit}
                     className="btn bg-[#E7FE29] ">Claim Free Credit</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;