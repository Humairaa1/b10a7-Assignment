import logo from '../assets/logo.png'
import doller from '../assets/dollar 1.png'
const Nav = ({freeCredit}) => {
    return (
        <div className='w-11/12 mx-auto py-5 flex flex-col md:flex-row justify-between items-center'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className='flex justify-center gap-3 md:gap-10 items-center list-none'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <button
                    className='btn'> {freeCredit} Coin
                    <img src={doller} alt="Doller Icon" />
                </button>
            </div>
        </div>
    );
};

export default Nav;