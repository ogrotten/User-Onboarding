import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const roles = [
	"Head", "Tail", "Hat", "Plug"
];

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

				<Field type="password" name="password" placeholder="Password" value={values.password || ""}/>
				<br />

				<Field component="select" name="role">
					<option>Pick one</option>
					{ roles.map(e => {
						return (<option value={e}>{e}</option>)
					}
					)}
				</Field>
				<label>
					<Field type="checkbox" name="terms" checked={values.terms || false} />
					I have read the Terms of Service.
				</label>
				<br />
				<button type="submit">Join</button>
			</Form>
		</div>
	);
};

const FormikNew = withFormik({
	mapPropsToValues({name, email}) {
		return {
			name: name || "",
			email: email || ""
		};
	},
	validationSchema: Yup.object().shape({
		name: Yup.string().required(),
		email: Yup.string().required().email(),
	}),
	handleSubmit(values, {}) {
		axios.post('https://reqres.in/api/users', values)
		.then(res => {
			console.log(`Data was:`);
			console.log(res.data);
		})
		.catch(err => console.log(`Problem: ${err.response}`));
	}
})(NewForm)

export default FormikNew;
