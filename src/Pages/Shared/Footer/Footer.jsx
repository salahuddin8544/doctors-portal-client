import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="md:p-10 mx-9 text-neutral-content">
            <div className="footer">
                <div>
                    <span className="text-muted text-xl">Services</span>
                    <Link to={'/'} className="link link-hover">Branding</Link>
                    <Link to={'/'} className="link link-hover">Design</Link>
                    <Link to={'/'} className="link link-hover">Marketing</Link>
                    <Link to={'/'} className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="text-muted text-xle">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="text-muted text-xl">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
                <div className="footer-center p-4 text-dark mt-16">
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
        </footer>
    );
};

export default Footer;