import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Form.css";

const Form = () => {
  const validationSchema = Yup.object({
    Name: Yup.string()
      .required("First name is required")
      .min(2, "Must be at least 2 characters"),
    Phone: Yup.string()
      .required("Phone is required")
      .min(2, "Must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    CompanyName: Yup.string()
      .required("Company Name is required")
      .min(2, "Must be at least 2 characters"),
    subject: Yup.string()
      .required("Subject is required")
      .min(2, "Must be at least 2 characters"),
    message: Yup.string()
      .required("Message is required")
      .min(2, "Must be at least 2 characters"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      Phone: "",
      email: "",
      CompanyName: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("https://northwind.vercel.app/api/categories", values);
        toast.success("Mesaj göndərildi!", {
          position: "top-center",
        });
        formik.resetForm();
      } catch (error) {
        toast.error("Xəta baş verdi!", {
          position: "top-center",
        });
        console.error("Error sending data", error);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form-inputs">
          <input
            id="Name"
            name="Name"
            type="text"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.Name}
          />
          {formik.errors.Name && formik.touched.Name && (
            <div style={{ color: "red" }}>{formik.errors.Name}</div>
          )}

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div className="form-inputs">
          <input
            id="Phone"
            placeholder="Phone"
            name="Phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Phone}
          />
          {formik.errors.Phone && formik.touched.Phone && (
            <div style={{ color: "red" }}>{formik.errors.Phone}</div>
          )}

          <input
            id="CompanyName"
            name="CompanyName"
            type="text"
            placeholder="Company Name"
            onChange={formik.handleChange}
            value={formik.values.CompanyName}
          />
          {formik.errors.CompanyName && formik.touched.CompanyName && (
            <div style={{ color: "red" }}>{formik.errors.CompanyName}</div>
          )}
        </div>

        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={formik.handleChange}
          value={formik.values.subject}
        />
        {formik.errors.subject && formik.touched.subject && (
          <div style={{ color: "red" }}>{formik.errors.subject}</div>
        )}

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          rows={4}
        />
        {formik.errors.message && formik.touched.message && (
          <div style={{ color: "red" }}>{formik.errors.message}</div>
        )}

        <button type="submit">Send Message</button>
      </form>

      <ToastContainer />
    </>
  );
};

export default Form;
