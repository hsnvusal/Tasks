import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Başlıq boş ola bilməz"),
  description: Yup.string().required("Açıqlama boş ola bilməz"),
  price: Yup.number().required("Qiymət vacibdir").positive(),
  image: Yup.string().required("Şəkil adı lazımdır"),
});

const AddProduct = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:5000/products", values);
      alert("Məhsul əlavə olundu!");
      resetForm();
    } catch (err) {
      console.error("Xəta:", err);
    }
  };

  return (
    <div>
      <h2>Məhsul əlavə et</h2>

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          image: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Başlıq</label>
            <Field name="title" />
            <ErrorMessage name="title" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Açıqlama</label>
            <Field name="description" />
            <ErrorMessage name="description" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Qiymət</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <label>Şəkil adı</label>
            <Field name="image" />
            <ErrorMessage name="image" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Əlavə et</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProduct;
