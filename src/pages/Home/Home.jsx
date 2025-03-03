 
import Hero from "../../Components/Home_com/Hero"
import Our_Values from "../../Components/Home_com/Our_Values"
import About_Us from "../../Components/Home_com/About_Us"
import Brand from "../../Components/Home_com/Brand"
import Departments_2 from "../../Components/Home_com/Departments_2"
import Departments from "../../Components/Home_com/Departments"
import Banner from "../../Components/Home_com/Banner"
import Latest_Update from "../../Components/Home_com/Latest_Update"
import Reviews from "../../Components/Home_com/Reviews"
import Appointment from "../../Components/Home_com/Appointment"

 
function Home() {
  return (
    <div className="">
      <Hero/>
     <Our_Values/>
     <About_Us/>
     <Departments/>
     <Departments_2/>
     <Reviews/>
     <Banner/>
     <Latest_Update/>
     <Appointment/>
       <Brand/>
   
    </div>
  )
}

export default Home
