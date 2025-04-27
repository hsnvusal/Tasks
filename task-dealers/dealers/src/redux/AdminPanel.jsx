import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AdminPanel.css'
import {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../redux/reducers/categorySlice";
import { Formik, Form, Field } from "formik";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    if (editingId) {
      dispatch(updateCategory({ id: editingId, updatedCategory: values }));
      setEditingId(null);
    } else {
      dispatch(createCategory(values));
    }
    resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
  };

  return (
    <div className="dashboard-container">
      <h1>Admin Panel - Dashboard</h1>

      <Formik
        enableReinitialize
        initialValues={{
          name: data.find((item) => item.id === editingId)?.name || "",
          description:
            data.find((item) => item.id === editingId)?.description || "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="dashboard-form">
            <div>
              <label>Name:</label>
              <Field name="name" placeholder="Name" />
            </div>
            <div>
              <label>Description:</label>
              <Field name="description" placeholder="Description" />
            </div>
            <button type="submit">{editingId ? "Update" : "Add"}</button>
          </Form>
        )}
      </Formik>

      <div className="dashboard-list">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong> - {item.description}
              </div>
              <div className="dashboard-buttons">
                <button className="edit-btn" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
