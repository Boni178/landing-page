import "./index.css";
/*import { FaChevronLeft, FaChevronRight,FaQuoteLeft,FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';*/
import Integrity from "./integrity.jsx";
import Reviews from "./reviews.jsx";
import Footer from "./footer.jsx";
import Header from './Header';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import SpecialtySection from './Specialty';



export default function App(){

  
return(
<div className="smooth-scroll p-2 m-2"  id="container  "  >
<Header></Header>
<HeroSection></HeroSection>
<AboutUsSection></AboutUsSection>
<SpecialtySection></SpecialtySection>
<Integrity></Integrity>
<Reviews></Reviews>
<Footer></Footer>
     

    
    </div>
     


 

)

}
