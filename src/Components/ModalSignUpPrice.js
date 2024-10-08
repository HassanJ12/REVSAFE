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
import SignUpPage from "../Pages/SignUp";

export function SignUpModalPrice() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    return (
        <>

            <Button onClick={handleOpen} className="action"  fullWidth>
                Get Started
            </Button>
            
            <Dialog
                size="sm"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none h-[100%] overflow-y-auto scrollable-container rounded-lg pt-10 pb-10"
            >
                <SignUpPage />
            </Dialog>
        </>
    );
}


