// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import {Field, Form, Formik} from 'formik';
import {useDispatch} from 'react-redux';
import * as uuId from 'uuid';
import {useHttp} from '../../hooks/http.hook';
import {addHero} from '../heroesList/heroesSlice';

const HeroesAddForm = () => {
  const dispatch = useDispatch();
  const {request} = useHttp();
  const onSubmit = async (values) => {
    const valuesWithId = {
      ...values,
      id: uuId.v4(),
    };

    const res = await request('http://localhost:3001/heroes', 'POST', JSON.stringify(valuesWithId));
  console.log(res);
    if (res) {
      dispatch(addHero(valuesWithId));
    }
  };
  let initialValues = {
    name: '',
    description: '',
    element: ''
  };
  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Обязательное поле'),
  //   description: Yup.string().required('Обязательное поле'),
  //   element: Yup.string().required('Обязательное поле'),
  // });
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="border p-4 shadow-lg rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
          <Field
            required
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Как меня зовут?"/>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">Описание</label>
          <Field
            as="textarea"
            required
            name="description"
            className="form-control"
            id="description"
            placeholder="Что я умею?"
            style={{'height': '130px'}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
          <Field
            as="select"
            required
            className="form-select"
            id="element"
            name="element">
            <option>Я владею элементом...</option>
            <option value="fire">Огонь</option>
            <option value="water">Вода</option>
            <option value="wind">Ветер</option>
            <option value="earth">Земля</option>
          </Field>
        </div>

        <button type="submit" className="btn btn-primary">Создать</button>
      </Form>
    </Formik>
  );
};

export default HeroesAddForm;