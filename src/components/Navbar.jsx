import logo from '../assets/logo_name.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-14" src={logo} alt="" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/tranthanhduong03/"><FaLinkedin /></a>
                <a href="https://github.com/DuongDADEV"><FaGithub /></a>
                <a href="https://www.facebook.com/profile.php?id=100038824158900"><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
                

            </div>
        </nav>
    )
}

export default Navbar

/**
 - className 1:
 - className 2:
 - className 3: Change the logo size 
 - className 4:

 */