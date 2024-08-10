// import { useEffect, useState } from "react";
// import {
//   Navbar,
//   Button,
//   Input,
//   Typography,
//   Card,
//   CardBody,
//   CardFooter,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import Logo from "../Components/Logo";
// import { DrawerWithNavigation } from "../Components/Drawer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faCalendar, faEnvelope, faFaceAngry, faFaceMeh, faFaceSadCry, faFaceSmile, faFile, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
// import { DefaultTable } from "../Components/Table";
// import Example from "../Components/LineChart";
// import Footer from "../Components/Footer";
// import BarChart from "../Components/BarChart";
// import { useParams } from "react-router-dom";

// const Collection = () => {
//   const {id}=useParams()
//   const d = new Date();
//   const year = d.getFullYear();
//   const month = (d.getMonth() + 1).toString().padStart(2, "0");
//   const day = d.getDate().toString().padStart(2, "0");
//   const todayDate = `${year}-${month}-${day}`;

//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [date, setDate] = useState(todayDate);

//   useEffect(() => {
//     document.addEventListener("scroll", () => {
//       setScrolled(window.scrollY !== 0);
//     });
//   }, [scrolled]);
//   const [reviewsAnalysis,setReviewsAnalysis]=useState({ genuineCount:0,
//     fakeCount:0,
//     positiveCount:0,
//     neutralCount:0,
//     negativeCount:0})
//   const [collections,setCollections]=useState([])

//   const getCollections=async()=>{
//     const response = await fetch(`http://127.0.0.1:5000/user/sentimental/results/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("jwt-token")}`}})
//     const json = await response.json()
//     setCollections(json.result.result)
//     analyzeReviews(json.result.result)
//     console.log(json.result.result)
//   }

//   useEffect(()=>{
//     getCollections()
//   },[])

//   function analyzeReviews(reviews) {
//     let genuineCount = 0;
//     let fakeCount = 0;
//     let positiveCount = 0;
//     let neutralCount = 0;
//     let negativeCount = 0;
   
//     reviews.forEach(review => {
//        if (review.Predictions === "Genuine") {
//          genuineCount++;
//        } else if (review.Predictions === "Fake") {
//          fakeCount++;
//        }
   
//        if (review.sentiment >= 4) {
//          positiveCount++;
//        } else if (review.sentiment === 3) {
//          neutralCount++;
//        } else if (review.sentiment <= 2) {
//          negativeCount++;
//        }
//     });


//     setReviewsAnalysis({genuineCount,
//         fakeCount,
//         positiveCount,
//         neutralCount,
//         negativeCount})
   
//     return {
//        genuineCount,
//        fakeCount,
//        positiveCount,
//        neutralCount,
//        negativeCount
//     };
//    }

//   return (
//     <>
//       <Navbar
//         className={`sticky top-0 z-50 px-4 py-2 border-b border-gray-300 ${
//           scrolled ? "bg-[#1b1b35] text-white" : "bg-[#1b1b35] text-yellow-50"
//         }`}
//         fullWidth
//       >
//         <div className="flex items-center justify-between ">
//           <div className="flex justify-center">
//             <Button
//               ripple={false}
//               variant="text"
//               className="active:bg-transparent hover:bg-transparent"
//               onClick={() => {
//                 setOpen(!open);
//               }}
//             >
//               <FontAwesomeIcon className="text-base text-white" icon={faBars} />
//             </Button>
//             <Logo />
//           </div>
         
//         </div>
//       </Navbar>
      
//       <DrawerWithNavigation open={open} setOpen={setOpen} />
//       <main onClick={() => setOpen(false)} className=" bg-[#1b1b35]">
//         <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
//           <Typography
//             variant="h4"
//             className="self-center sm:self-start font-semibold text-cyan-50 bg-[#323262] px-4 py-2 rounded-lg  shadow"
//           >
//             Detection and Analysis Portal
//           </Typography>
//           <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
           
    
//           </div>
//         </div>

        
       
//         <div className="graphs_sec mb-10 flex flex-wrap mt-10 w-11/12 mx-auto">

    //     <div class="flex flex-wrap -m-4 text-center w-full mb-2">
      
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
    //       <FontAwesomeIcon icon={faEnvelope} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
    //       <h2 class="title-font font-medium text-3xl text-[#fff]">{collections.length}</h2>
    //       <p class="leading-relaxed">Total Reviews</p>
    //     </div>
    //   </div>
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
    //       <FontAwesomeIcon icon={faFaceSmile} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
    //       <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.positiveCount}</h2>
    //       <p class="leading-relaxed">Positive</p>
    //     </div>
    //   </div>
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
    //       <FontAwesomeIcon icon={faFaceAngry} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
    //       <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.negativeCount}</h2>
    //       <p class="leading-relaxed">Negative</p>
    //     </div>
    //   </div>
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
    //       <FontAwesomeIcon icon={faFaceMeh} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
    //       <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.neutralCount}</h2>
    //       <p class="leading-relaxed">Neutral</p>
    //     </div>
    //   </div>
    // </div>
    //       <div className="w-full md:w-5/12">
    //         <Example postiveCount={reviewsAnalysis.positiveCount} negativeCount={reviewsAnalysis.negativeCount} neutralCount={reviewsAnalysis.neutralCount} />
    //       </div>
    //       <div className="w-full md:ml-5 md:w-6/12">
    //         <BarChart realCount={reviewsAnalysis.genuineCount} fakeCount={reviewsAnalysis.fakeCount} />
    //       </div>
          
    //       {/* <div className="mt-5 md:mt-0 md:ml-5 flex justify-between flex-col w-full md:w-1/2">
    //         <Card className="bg-[#323262] text-cyan-50">
    //           <CardBody>
    //             <Typography
    //               variant="h5"
    //               className="mb-2 font-semibold text-cyan-50"
    //             >
    //               Units
    //             </Typography>
    //             <Typography>
    //               The place is close to Barceloneta Beach and bus stop just 2
    //               min by walk
    //             </Typography>
    //           </CardBody>
    //           <CardFooter className="pt-0">
    //             <Button>Read More</Button>
    //           </CardFooter>
    //         </Card>
    //         <Card className="mt-5 md:mt-0 bg-[#323262] text-cyan-50" >
    //           <CardBody>
    //             <Typography
    //               variant="h5"
    //               className="mb-2 font-semibold text-cyan-50"
    //             >
    //               Units
    //             </Typography>
    //             <Typography>
    //               The place is close to Barceloneta Beach and bus stop just 2
    //               min by walk
    //             </Typography>
    //           </CardBody>
    //           <CardFooter className="pt-0">
    //             <Button>Read More</Button>
    //           </CardFooter>
    //         </Card>
    //       </div> */}
    //     </div>
        // <div className="mb-5">
        //   <DefaultTable  data={collections}/>
        // </div>
//         <Footer />
//       </main>
//     </>
//   );
// };

// export default Collection;


import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Typography,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faFaceAngry,
  faFaceMeh,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";
import BarChart from "../Components/BarChart";
import { useParams } from "react-router-dom";
import DTable from "../Components/Table";
// import DefaultTable from "../Components/Table";

const Collection = () => {
  const { id } = useParams();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [reviewsAnalysis, setReviewsAnalysis] = useState({
    genuineCount: 0,
    fakeCount: 0,
    positiveCount: 0,
    neutralCount: 0,
    negativeCount: 0,
  });
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, [scrolled]);

  const getCollections = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/user/sentimental/results/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      const json = await response.json();
      setCollections(json.result.result);
      analyzeReviews(json.result.result);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching collections:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  function analyzeReviews(reviews) {
    let genuineCount = 0;
    let fakeCount = 0;
    let positiveCount = 0;
    let neutralCount = 0;
    let negativeCount = 0;

    reviews.forEach((review) => {
      if (review.Predictions === "Genuine") {
        genuineCount++;
      } else if (review.Predictions === "Fake") {
        fakeCount++;
      }

      if (review.sentiment >= 4) {
        positiveCount++;
      } else if (review.sentiment === 3) {
        neutralCount++;
      } else if (review.sentiment <= 2) {
        negativeCount++;
      }
    });

    setReviewsAnalysis({
      genuineCount,
      fakeCount,
      positiveCount,
      neutralCount,
      negativeCount,
    });
  }

  return (
    <>
      <Navbar
        className={`sticky top-0 z-50 px-4 py-2 border-b border-gray-300 ${
          scrolled ? "bg-[#1b1b35] text-white" : "bg-[#1b1b35] text-yellow-50"
        }`}
        fullWidth
      >
        <div className="flex items-center justify-between ">
          <div className="flex justify-center">
            <Button
              ripple={false}
              variant="text"
              className="active:bg-transparent hover:bg-transparent"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon className="text-base text-white" icon={faBars} />
            </Button>
            <Logo />
          </div>
        </div>
      </Navbar>
      
      <DrawerWithNavigation open={open} setOpen={setOpen} />
      <main onClick={() => setOpen(false)} className=" bg-[#1b1b35]">
        <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
          <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-cyan-50 bg-[#323262] px-4 py-2 rounded-lg  shadow"
          >
            Detection and Analysis Portal
          </Typography>
        </div>

        {loading ? ( // Show loading message while fetching data
           <div className=" flex justify-center items-center min-h-[75vh]">
           <div class="loader">
 <div class="cell d-0"></div>
 <div class="cell d-1"></div>
 <div class="cell d-2"></div>

 <div class="cell d-1"></div>
 <div class="cell d-2"></div>
 
 
 <div class="cell d-2"></div>
 <div class="cell d-3"></div>
 
 
 <div class="cell d-3"></div>
 <div class="cell d-4"></div>
 
 
</div>
         </div>
        ) : (
          <>
            {/* Your content goes here */}
            {/* Replace this loading section with your actual content once data is loaded */}
            <div className="graphs_sec mb-10 flex flex-wrap mt-10 w-11/12 mx-auto">

              {/* Your content goes here */}
              <div class="flex flex-wrap -m-4 text-center w-full mb-2">
      
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faEnvelope} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">{collections.length}</h2>
          <p class="leading-relaxed">Total Reviews</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceSmile} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.positiveCount}</h2>
          <p class="leading-relaxed">Positive</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceAngry} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.negativeCount}</h2>
          <p class="leading-relaxed">Negative</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="bg-[#323262] text-cyan-50 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
         
          <FontAwesomeIcon icon={faFaceMeh} className="text-[#3ae3a6] w-12 h-12 mb-3 inline-block"/>
          <h2 class="title-font font-medium text-3xl text-[#fff]">{reviewsAnalysis.neutralCount}</h2>
          <p class="leading-relaxed">Neutral</p>
        </div>
      </div>
    </div>
          <div className="w-full md:w-5/12">
            <Example postiveCount={reviewsAnalysis.positiveCount} negativeCount={reviewsAnalysis.negativeCount} neutralCount={reviewsAnalysis.neutralCount} />
          </div>
          <div className="w-full md:ml-5 md:w-6/12">
            <BarChart realCount={reviewsAnalysis.genuineCount} fakeCount={reviewsAnalysis.fakeCount} />
          </div>
          
          {/* <div className="mt-5 md:mt-0 md:ml-5 flex justify-between flex-col w-full md:w-1/2">
            <Card className="bg-[#323262] text-cyan-50">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-cyan-50"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
            <Card className="mt-5 md:mt-0 bg-[#323262] text-cyan-50" >
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-2 font-semibold text-cyan-50"
                >
                  Units
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div> */}
       
       
        
            </div>
            <div className="mb-5">
          <DTable  data={collections}/>
        </div>
            <Footer />
          </>
        )}
      </main>
    </>
  );
};

export default Collection;
