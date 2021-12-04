import React from "react";
import { Formik ,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup'
const initialValues = {
  name: "",
  email: "",
  channel: "",
}
const onSubmit = values => {
  console.log('form values', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})
function YouTubeForm() {
  
  // console.log('form values is ',formik.values)
  // console.log('formik errors',formik.errors)
  // console.log('viited fields', formik.touched)
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      
      <Form >
        <div className="form-control">

          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="enter your name"
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // onBlur={formik.handleBlur}
            // {...formik.getFieldProps('name')}
          />
          <ErrorMessage name='name'/>
        </div>

        <div className="form-control">

          <label htmlFor="email">Email</label>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="enter your email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            // we repalcing three above line in one line below code 
            // {...formik.getFieldProps('email')}

          />
          <ErrorMessage name='email'/>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // values={formik.values.channel}
            // {...formik.getFieldProps('channel')}
          />
          <ErrorMessage name='channel'/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YouTubeForm;
