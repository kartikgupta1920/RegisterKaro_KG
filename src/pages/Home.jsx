import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Brands from "../components/Brands"
import Services from "../components/Services"
import About from "../components/About"
import Whyus from "../components/Whyus"
import VideoInstruction from "../components/VideoInstruction"
import HappyClients from "../components/HappyClients"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import ComplianceComparison from "../components/ComplianceComparison"
import ContactUs from "../components/ContactUs"

function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <Whyus />
        <Services />
        <ComplianceComparison />
        <Brands />
        <HappyClients />
        <VideoInstruction />
        <Testimonial />
        <Blogs />
        <About />
        <ContactUs />
        <Footer />
    </>
  )
}

export default Home

