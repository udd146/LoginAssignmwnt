import * as Yup from "yup";

export const signUpSchema = Yup.object({
    UserName: Yup.string().min(3).max(25).required("Please enter your name"),
    Email: Yup.string().email().required("Please enter your email"),
    PhoneNo: Yup.string().min(10).required("Please enter your PhoneNo"),
    Address1: Yup.string().min(5).required("please enter your address"),
    Address2: Yup.string().min(5).required("please enter your address"),
    City: Yup.string().min(2).required("please enter city name"),
    State: Yup.string().min(2).max(25).required("Please enter state name"),
    Pincode: Yup.string().min(6).required("Please enter your pincode"),
  });


