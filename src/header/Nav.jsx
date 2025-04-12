import logo from '../assets/logo.png'
const Nav = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </div>
        </div>
    );
};

export default Nav;