import React from 'react';
// import DashboardNavbar from '../Components/DashboardNavbar';
import { Button, Input, Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import SH from "../Assets/WhatsApp Image 2024-04-03 at 6.39.17 PM.jpeg"
import SH1 from "../Assets/WhatsApp Image 2024-04-03 at 6.40.23 PM.jpeg"
import SH2 from "../Assets/WhatsApp Image 2024-04-03 at 6.40.43 PM.jpeg"
import S32 from "../Assets/IMG_1008.jpg"


import ProfileCard from '../Components/ProfileCard';
import ContactForm from './ContactUs';
const AboutPage = () => {
  return (
    <>
        <>

<div id='about' className='relative pb-32'>
  <div className='px-6 pt-16 lg:pt-28'>
      <h1 className='pb-16 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black text-center mx-10 text-gray-300'>
        <span>A.I Driven Sentimental Analysis & Fake Review  </span>
     
        <span className='pb-8 text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-900'>Detection</span>
      </h1>

      <p className='pb-2 text-gray-200 text-lg md:text-xl lg:text-2xl text-center leading-normal md:leading-normal lg:leading-9'>
  <span>
  Our commitment at <span className='font-semibold text-blue-800'>Revsafe</span> is to empower business Analyst with AI-driven solutions that enrich for product quality process.
  We strive to provide oranizations with the tools they need to design product that are insightful, inclusive, and tailored to meet the diverse needs of users.
  </span>
  

</p>

  </div>
</div>
<div className='justify-center items-center flex mx-16'>
  <section  className="mt-16 lg:mt-36 2xl:mt-2 text-2xl md:text-2xl grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-[340px_auto] lg:grid-rows-3 2xl:gap-4 2xl:gap-x-5 2xl:gap-y-13 mb-40 justify-center">
  <img className="h-[600px] w-full rounded-3xl bg-no-repeat md:h-[500px] lg:row-span-3 lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-200" src="https://images.unsplash.com/photo-1621264448270-9ef00e88a935?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" />

  <div className="grid grid-cols-1 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-4">
    <div className="bg-blue-200 p-9  rounded-3xl lg:p-9 lg:py-21 xl:pl-9 2xl:py-26 2xl:w-420"><span className='inline-block 2xl:w-[420px]'>
    Provide a numerical sentiment score for each review, indicating whether it is positive, negative, or neutral.
    </span> </div>
    <div className="bg-[#79c2d0] p-9  rounded-3xl lg:p-9 lg:py-21 xl:pl-9 2xl:py-26"><span className='inline-block '>Analyze the reputation and credibility.</span> </div>
  </div>

  <div className="bg-[#53a8b6] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26 w-full "><span className='inline-block'>
  Provide a side-by-side comparison of the sentiment between different products or brands, helping customers make informed decisions. Show customers the sentiment trends over time, allowing them to see if the sentiment of a product or service is improving or declining.

  </span> </div>

  <div className="grid grid-cols-1 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-4">
    <div className="bg-[#5585b5] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26"><span className='inline-block '>Implement algorithms to detect suspicious patterns </span> </div>
    <div className="bg-[#bbe4e9] p-9 xssm:p-8 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26"><span className='inline-block '>Provide moderation tools that allow website administrators to manually review and verify potentially fake reviews.</span> </div>
  </div>
</section>
</div>

<section className='flex mb-16 flex-wrap gap-3 justify-center items-center'>
<ProfileCard name="Sakhi Asif Hyder" image={SH} rollno="2020F-BSE-159"/>
<ProfileCard name="Shabih Hussain" image={SH1} rollno="2020F-BSE-169"/>
<ProfileCard name="Saadullah khan " image={SH2} rollno="2020F-BSE-175"/>
<ProfileCard name="Hassan" image={S32} rollno="2020F-BSE-198"/>


</section>
<section id='contact'>
  <ContactForm/>
</section>

    </>
    </>
  );
};

export default AboutPage;








     {/* <div className='w-full flex justify-center'> 
    <div className="grid grid-cols-2 gap-4 mb-40 justify-center mr-[130px]"> */}
    {/* <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 mb-40"> */}

    {/* <div className=''>
    <img className='h-[400px] w-full rounded-3xl  bg-no-repeat md:h-[480px] lg:row-span-3 
    lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-[200px]' src='https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038397.jpg'></img>
    </div>


        <div className='grid grid-cols-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
      
      
       <div className='grid grid-cols-1 col-span-2 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
      <div className="bg-blue-200 p-4 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26 2xl:w-420"></div>
      <div className="bg-green-200 p-4 rounded-3xl lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 2</div>
      </div>
      <div className="bg-yellow-200 p-4 col-span-2  rounded-3xl lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px] ">Item 3</div> */}
     {/* w-[670px] w-[430px] w-[230px]*/}

    {/* <div className='grid grid-cols-1 col-span-2 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-[10px]'>
      <div className="bg-pink-200 rounded-3xl sm:p-8 p-9 lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 4</div>
      <div className="bg-purple-200 rounded-3xl sm:p-8  p-9  lg:p-9 lg:py-21 xl:pl-11 2xl:py-26">Item 5</div>
      </div> */}
      {/* lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  */}
    {/* </div>


   
    </div>
    </div>
     */}




{/* <section className=' landingSection 5xl:mt-40 6xl:mt-48 xssm:grid-cols-[280px_auto] text-specialLightGray mt-16 grid w-full grid-cols-1 gap-x-[13px] gap-y-[10px] text-2xl md:grid-cols-[340px_auto] lg:mt-36  lg:grid-cols-[auto_auto] lg:grid-rows-3 2xl:mt-28 2xl:gap-4 2xl:gap-x-[16px] 2xl:gap-y-[13px] 2xl:text-4xl'>
<img className='h-[400px] w-full rounded-3xl  bg-no-repeat md:h-[480px] lg:row-span-3 
    lg:h-[580px] lg:w-[350px] lg:bg-[length:168%] 2xl:h-[625px] 2xl:w-[402px] 2xl:bg-[length:180%] ml-[200px]' src='https://img.freepik.com/free-photo/college-girl-boy-studying-together_23-2149038397.jpg'></img>


<div className='grid grid-cols-1 gap-2 lg:grid-cols-[38fr_21fr] 2xl:gap-[10px]'>
  <div className='bg-blue-200 xssm:p-8  rounded-3xl p-9 lg:p-9  lg:py-[21px] xl:pl-11 2xl:py-[26px] '>
    <span className='inline-block 2xl:w-[420px]'>Text1
    </span>

     </div>

     <div className='class="xssm:p-8 rounded-3xl bg-[#62449B] p-9 lg:p-9 lg:py-[21px] xl:pl-11 2xl:py-[26px]  "'>Text2</div>

</div>

<div className='bg-pink-200 xssm:p-8 w-full rounded-3xl p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>
  <span className='inline-block 2xl:w-[620px]'>text 3</span>
</div>

<div className='grid grid-cols-1 gap-2 lg:grid-cols-[21fr_38fr] 2xl:gap-[10px]'>
<div className='xssm:p-8 rounded-3xl bg-[#7F85A8] p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>Text 4</div>
<div className='xssm:p-8 rounded-3xl bg-[#917CBA] p-9 lg:p-9 lg:py-[21px] xl:pl-11  2xl:py-[26px]  '>Text 5</div>

</div>
</section> */}






  