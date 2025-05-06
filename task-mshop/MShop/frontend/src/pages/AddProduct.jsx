import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./AddProduct.module.css";
import { useNavigate } from "react-router";
const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Başlıq boş ola bilməz"),
  price: Yup.string().required("Açıqlama boş ola bilməz"),
  image: Yup.string().required("Şəkil adı lazımdır"),
});
const AddProduct = () => {
    const navigate =useNavigate()
  const handleSubmit = async (values, { resetForm }) => {
    try {
      axios.post("http://localhost:5000/products", values);
      alert("Elave Edildi");
      resetForm();
      navigate("/admin")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Mehsul Elave Et</h2>
      <div className={styles.addProduct}>
        <Formik
          initialValues={{
            title: "",
            price: "",
            image: "",
          }}
          validationSchema={ProductSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ marginTop: "200px" }}>
              <label>Başlıq</label>
              <Field name="title" />
              <ErrorMessage
                name="title"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Qiymet</label>
              <Field name="price" />
              <ErrorMessage
                name="price"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Şəkil adı</label>
              <Field name="image" />
              <ErrorMessage
                name="image"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit">Əlavə et</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
