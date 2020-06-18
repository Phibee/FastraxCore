import React, { useEffect } from "react";
import { graphql, useQuery } from "react-apollo";
import {
      createDepartmentMutation,
      getDepartmentsQuery,
      getUserAccessQuery,
} from "../queries/queries";
import { unflatten } from "../helpers/ObjectUtils";
import { flowRight as compose } from "lodash";
import { Formik, withFormik } from "formik";
import * as Yup from "yup";

const handleSubmit = (payload, { props, setSubmitting, setErrors }) => {
      const { title, description } = payload;
      props.createDepartmentMutation({
            variables: {
                  title,
                  description,
            },
            refetchQueries: [{ query: getDepartmentsQuery }],
      });
};

const LoginForm = ({
      values,
      handleSubmit,
      isSubmitting,
      errors,
      touched,
      handleBlur,
      handleChange,
      //   getUserAccess,
}) => {
      const { loading, error, data } = useQuery(getUserAccessQuery, {
            variables: {
                  roleId: 1,
                  userId: 4,
            },
      });

      if (loading) return null;
      if (error) return `Error! ${error}`;

      console.log(unflatten(data.userAccessModules));

      return (
            <div>
                  <form
                        onSubmit={handleSubmit}
                        style={{ marginBottom: 50, marginTop: 20 }}
                  >
                        <input
                              type="text"
                              id="title"
                              type="title"
                              label="title"
                              placeholder="Enter a title"
                              //  error={errors.title && touched.title && errors.title}
                              value={values.title}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        />
                        <input
                              type="text"
                              id="description"
                              type="description"
                              label="description"
                              placeholder="Enter a description"
                              //  error={
                              //       errors.description &&
                              //       touched.description &&
                              //       errors.description
                              //  }
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                        />
                        <button
                              className="primary"
                              type="submit"
                              //  disabled={
                              //       isSubmitting ||
                              //       !!(errors.title && touched.title) ||
                              //       !!(errors.description && touched.description)
                              //  }
                        >
                              Sign In
                        </button>
                  </form>
            </div>
      );
};

export default compose(
      graphql(createDepartmentMutation, { name: "createDepartmentMutation" }),
      graphql(getDepartmentsQuery, { name: "getDepartments" }),
      withFormik({
            validationSchema: Yup.object().shape({
                  title: Yup.string().required("Title is required"),
                  description: Yup.string().required("Password is required"),
            }),
            mapPropsToValues: ({ variables }) => ({
                  ...variables,
            }),
            handleSubmit: handleSubmit,
            displayName: "Login",
      })
)(LoginForm);
