import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NewForm = ({values, touched, errors}) => {
	return (
		<div className="base">
			<Form>
				{/* 
Name
Email
Password
Terms of Service (checkbox)
A Submit button to send our form data to the server.
				 */}
				<Field type="text" name="name" placeholder="Name" />
				{touched.name && errors.name && (<p className="error">{errors.name}</p>)}
				<br />

				<Field type="text" name="email" placeholder="EMail" />
				{touched.email && errors.email && (<p className="error">{errors.email}</p>)}
				<br />

				<Field type="password" name="password" placeholder="Password" />
				<br />

				<label>
					<Field type="checkbox" name="terms" checked={values.terms} />
					I have read the Terms of Service.
				</label>
				<br />
				<button>Join</button>
			</Form>
		</div>
	);
};

const FormikNew = withFormik({

})(NewForm)

export default FormikNew;
