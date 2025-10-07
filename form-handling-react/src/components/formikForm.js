
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

function FormikForm () {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                />
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
                <ErrorMessage name="username" component="div" className="error" />
                <ErrorMessage name="email" component="div" className="error" />
                <ErrorMessage name="password" component="div" className="error" />
            </Form>
        )}
    </Formik>
    );
} 

export default FormikForm;