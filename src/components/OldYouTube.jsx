import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
const initialValues = {
  name: "",
  email: "",
  channel: "",
}
const onSubmit = values => {
  console.log('form values', values)
}
/* const validate = values => {
  // values.name values.email values.channel
  // errors.name errors.email errors.channel
  let errors = {}
  if (!values.name) {
    errors.name = 'required'
  }
  if (!values.email) {
    errors.email = "required"
  }
  if (!values.channel) {
    errors.channel = "required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }
  return errors
} */
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})
function OldYouTube() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  });
  // console.log('form values is ',formik.values)
  // console.log('formik errors',formik.errors)
  console.log('viited fields', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className="form-control">

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}

          />
          {formik.touched.email && formik.errors ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.channel}
          />
          {formik.touched.channel && formik.errors ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYouTube;
