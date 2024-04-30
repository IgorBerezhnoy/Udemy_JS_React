import {ErrorMessage, Field, Form, Formik, useField} from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, name, ...props}) => {
  return <><label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...props}/>
    <ErrorMessage name={name} component="div"/></>;
};
const CustomForm = () => {
  const fields = [{
    label: 'Ваше имя',
    id: 'name',
    name: 'name',
    type: 'text'
  }, {
    label: 'Ваша почта',
    id: 'email',
    name: 'email',
    type: 'text'
  }, {
    label: 'Количество',
    id: 'amount',
    name: 'amount',
    type: 'number'
  }];
  return (
    <Formik initialValues={{
      name: '',
      email: '',
      amount: 0,
      currency: '',
      text: '',
      terms: false,
    }}
            validationSchema={
              Yup.object({
                name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                text: Yup.string().required('Required').min(10, 'Too Short!').max(100, 'Too Long!'),
                currency: Yup.string().required('Required'),
                amount: Yup.number().required('Required').min(5, 'Too Short!').max(10, 'Too Long!'),
                terms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions'),
              })}
            onSubmit={values => {
              console.log(JSON.stringify(values, null, 2));
            }}>
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        {fields.map(({label, id, name, ...rest}) => (
          <MyTextInput label={label} name={name} key={id} id={id} {...rest} />
        ))}
        <label htmlFor="currency">Валюта</label>
        <Field
          id="currency"
          name="currency"
          as="select"
        >
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage name={'currency'} component="div"/>
        <MyTextInput label={'Ваше сообщение'} name={'text'} id={'text'} as={"textarea"} />


        <label className="checkbox">
          <Field name="terms" type="checkbox"
          />

          Соглашаетесь с политикой конфиденциальности?
        </label>
        <ErrorMessage name={'terms'} component="div"/>

        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;