import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Başlıq boş ola bilməz"),
  description: Yup.string().required("Açıqlama boş ola bilməz"),
  price: Yup.number().required("Qiymət vacibdir").positive(),
  image: Yup.string().required("Şəkil adı lazımdır"),
});

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setInitialValues(res.data))
      .catch(err => console.error("Məhsul tapılmadı:", err));
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:5000/products/${id}`, values);
      alert("Məhsul redaktə olundu!");
      navigate("/admin");
    } catch (err) {
      console.error("Xəta:", err);
    }
  };

  if (!initialValues) return <p>Yüklənir...</p>;

  return (
    <div>
      <h2>Məhsulu Redaktə Et</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={handleSubmit}
        enableReinitialize
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

          <button type="submit">Yadda Saxla</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProduct;
