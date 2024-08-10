import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function LinkModal({collections,setCollections}) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [dataSetName, setDataSetName] = React.useState("");
  const [csvFile, setCSVFile] = React.useState("");

  const handleOpen = () => setOpen((cur) => !cur);

  const handleDataSetNameChange = (event) => {
    setDataSetName(event.target.value);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      url:csvFile,
      name:dataSetName
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/ByLink", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt-token")}`, // Assuming JWT token is stored in localStorage
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCollections([...collections,data])
      console.log(collections);
      
      // Handle successful upload (e.g., show a success message or redirect)
      navigate(`/collection/${data._id}`); // Redirect to dashboard or another page
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle errors (e.g., show an error message)
    }
 };


  return (
    <>
      <Button
        onClick={handleOpen}
        className="mr-0 md:mr-3 mt-3 lg:mt-0 bg-[#3ae3a6] text-gray-900"
      >
        <FontAwesomeIcon className="mr-2 " icon={faPlusCircle} />
        ADD Collection By Link
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] md:border-gray-300 text-gray-200 bg-[#1b1b35]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4">
              <FontAwesomeIcon className="mr-2 " icon={faPlusCircle} />
              ADD NEW Reviews Collections
            </Typography>
            <Typography
              className="mb-3 text-gray-300 font-normal"
              variant="paragraph"
                        >
              Enter the Dataset Name and select a CSV file.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Data Set Name
            </Typography>
            <Input
              label="Reviews Data Set Name"
              size="lg"
              color="white"
              className="focus:ring-transparent"
              value={dataSetName}
              onChange={handleDataSetNameChange}
            />
            <Typography className="-mb-2" variant="h6">
              Product Link
            </Typography>
            <Input
              type="text"
              label="Product Link"
              className="focus:ring-transparent"
            //   accept=".csv"
            color="white"
              onChange={(e)=>{setCSVFile(e.target.value)}}
            />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="teal" onClick={handleSubmit} fullWidth>
              POST
            </Button>
           
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
