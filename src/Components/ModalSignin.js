import React, { useState } from "react";
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
  Radio,
} from "@material-tailwind/react";
import Logo from "./Logo";
import { TextLink } from "./Typography";
import { useNavigate } from "react-router-dom";
 
export function SignInModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);




  
  const UserForm = () => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
    const navigate = useNavigate();
  // Update form fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("jwt-token", data.access_token); // Store JWT token
      console.log(data)
      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle errors (e.g., show an error message)
    }
 };
    const LegalPrompt = () => {
      return (
        <div className="bg-gray-800 p-4 text-justify rounded-lg">
          <p className="text-xs text-gray-100 mb-4">
            By signing in to the Sentimental Analysis and Fake Review Detection System, you agree to comply with all applicable laws and regulations regarding the use of this system.
            <br></br>
            <br></br>
            You also acknowledge that your activities within the system may be monitored and recorded for security purposes.
          </p>
        </div>
      );
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Typography className="text-xs font-semibold text-gray-200">Email</Typography>
            <Input
  size="md"
  placeholder="name@mail.com"
  className="!border-t-blue-gray-200 focus:!border-t-teal-300 text-yellow-50"
  color="teal" labelProps={{
    className: "before:content-none after:content-none text-gray-200",
  }}
  name="username"
  value={formData.email} // Set value to formData.email
  onChange={handleFormChange} // Call handleFormChange when input changes
/>

          </div>
          <div className="flex flex-col gap-1">
            <Typography className="text-xs font-semibold text-gray-200">Password</Typography>
            <Input
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-teal-300"
              color="teal"            labelProps={{
                className: "before:content-none after:content-none text-gray-200",
              }}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleFormChange}
            />
            <Typography className="text-right text-gray-200">
              <a
                href="."
                className="font-medium text-xs text-teal-300 hover:text-teal-400 active:text-teal-400 hover:underline"
              >
                Forgot password?
              </a>
            </Typography>
          </div>
        </div>
        <LegalPrompt />
        <Button color="teal" type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    );
  };



  
 
  return (
    <>
      
      <Button onClick={handleOpen} variant="text" className="text-white" size="sm" fullWidth>
                    Sign In
                </Button>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none h-[100%] overflow-y-auto scrollable-container rounded-lg pt-10 pb-10"
      >
       <Card
        shadow={false}
        className="w-full md:w-fit max-w-md flex flex-col items-center gap-6 px-8 py-12 md:border md:border-gray-300 bg-[#1b1b35]"
      >
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="font-light text-center text-gray-200">
            Sign In
          </Typography>
        </div>
        <div className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
          {/* <RoleSelector name="userRole" availableRoles={availableRoles} /> */}
          <UserForm />
        </div>
        <div>
          <Typography color="white"variant="small">
            Don't have an account?{" "}
            <TextLink className={"text-teal-300"} href="/accounts/sign-up">Sign up</TextLink>
          </Typography>
        </div>
      </Card>
      </Dialog>
    </>
  );
}


