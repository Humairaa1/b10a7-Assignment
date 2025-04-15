import logo from '../assets/logo-footer.png'
import banner from '../assets/bg-shadow.png'

const Footer = () => {
    return (
        <div className='relative mt-5 md:mt-[200px]'>
            {/* subscribe section */}
            <div className='hidden md:block w-11/12 border border-white rounded-lg p-4 absolute -top-32 left-[35px] lg:left-[55px]'>
                <div
                    className="hero rounded-lg py-10"
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}>
                    <div className=""></div>
                    <div className="px-5 md:px-40 text-center">
                        <div className="">
                            <h1 className="mb-2 text-3xl font-bold">Subscribe to our Newsletter</h1>
                            <p className="mb-2">
                                Get the latest updates and news right in your inbox!
                            </p>

                            <form>
                                <fieldset className="w-80">
                                    <div className="flex gap-2 mt-2 ml-20">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="input input-bordered text-black" />
                                        <button className="btn border-none bg-[#E7FE29] ">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <div className='bg-[#06091a] text-white'>
                <div className='flex justify-center py-5 pt-5 md:pt-[120px]'>
                    <img src={logo} alt="logo footer" />
                </div>
                <footer className="footer sm:footer-horizontal px-16 p-10 border-b border-b-gray-500">
                    <nav className='max-w-md'>
                        <h6 className="footer-title">About Us</h6>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <li>Home</li>
                        <li>Service</li>
                        <li>About</li>
                        <li>Contact</li>
                    </nav>

                    <form>
                        <h6 className="footer-title">Subscribe</h6>
                        <fieldset className="w-80">
                            <label>Subscribe to our newsletter for the latest updates.</label>
                            <div className="join mt-2">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item text-black" />
                                <button className="btn border-none bg-[#E7FE29] join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                {/* <div className="divider"></div> */}
                <div>
                    <p className='text-sm text-center py-5'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;