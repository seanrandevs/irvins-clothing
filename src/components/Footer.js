import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
     <div className="about-us">
        <h4>Get to Know Us</h4>
         <nav>
            <Link className="link" to="/about">About Us</Link>
            <Link className="link">Irvins Newsletter</Link>
            <Link className="link">Irvins Products</Link>
         </nav>
     </div>
     <div className="contact-us">
        <h4>Contact Us</h4>
         <nav>
            <Link className="link">FAQ</Link>
            <Link className="link">Email</Link>
            <Link className="link">Location</Link>
         </nav>
     </div>
    </div>
  )
}

export default Footer