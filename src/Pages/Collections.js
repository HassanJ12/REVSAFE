import { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Input,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { DrawerWithNavigation } from "../Components/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendar,
  faEnvelope,
  faFaceMeh,
  faFaceSadCry,
  faFaceSmile,
  faFile,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { DefaultTable } from "../Components/Table";
import Example from "../Components/LineChart";
import Footer from "../Components/Footer";
import BarChart from "../Components/BarChart";
import Modal from "../Components/ModalCreate";
import ModalLink from "../Components/ModalLink";

import { Link } from "react-router-dom";

const Collections = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  const todayDate = `${year}-${month}-${day}`;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(todayDate);
  const [loading, setLoading] = useState(true); // Loading state

  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/user/sentimental/results",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
          },
        }
      );
      const json = await response.json();
      setCollections(json.result);
      setLoading(false); // Set loading to false once data is fetched
      console.log(json.result);
    } catch (error) {
      console.error("Error fetching collections:", error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrolled(window.scrollY !== 0);
    });
  }, [scrolled]);

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
              <FontAwesomeIcon
                className="text-base text-white"
                icon={faBars}
              />
            </Button>
            <Logo />
          </div>
        </div>
      </Navbar>

      <DrawerWithNavigation open={open} setOpen={setOpen} />

      <main
        onClick={() => setOpen(false)}
        className=" bg-[#1b1b35] min-h-screen"
      >
        <div className=" flex flex-col lg:flex-row mt-10 w-11/12 mx-auto justify-between items-center">
          <Typography
            variant="h4"
            className="self-center sm:self-start font-semibold text-cyan-50 bg-[#323262] px-4 py-2 rounded-lg  shadow"
          >
            Analysis Collections
          </Typography>
          <div className="flex flex-col lg:flex-row-reverse mt-5 md:mt-0 self-center sm:self-end">
            <div className="self-center sm:self-end md:w-auto mr-4">
              <Modal
                collections={collections}
                setCollections={setCollections}
              />
              <ModalLink 
               collections={collections}
               setCollections={setCollections}
              />
              

            </div>
            <div className="self-center sm:self-end md:w-auto"></div>
          </div>
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
          <div className="graphs_sec mb-[12rem] flex flex-wrap mt-10 w-11/12 mx-auto ">
            <div class="flex flex-wrap -m-4 text-center w-full mb-2">
              {collections && collections.length > 0 ? (
                collections.map((collection) => (
                  <div class="ag-courses_item shadow-lg">
                    <Link
                      to={`/collection/${collection._id}`}
                      class="ag-courses-item_link"
                    >
                      <div class="ag-courses-item_bg"></div>
                      <div class="ag-courses-item_title">
                        {collection.datasetname}&#160; <br /> See Analysis
                      </div>
                      <div class="ag-courses-item_date-box">
                        <span class="ag-courses-item_date">04.11.2022</span>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <div>No collections found.</div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </main>
    </>
  );
};

export default Collections;
