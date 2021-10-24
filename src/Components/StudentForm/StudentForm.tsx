import React from 'react';
import {Button, DatePicker, Form, Input, Select, message} from 'antd';
import './StudentForm.scss';

const StudentForm = ({editMode}: {editMode: boolean}) => {

  const handleAddStudent = (): void => {
    message.success('Студента успішно додано');
  }

  const handleDeleteStudent = (): void => {
    message.success('Студента успішно видалено');
  }

  return (
    <Form layout='vertical' className='form'>
      <div className='form__row'>
        <Form.Item
          className='form__item'>
          <label htmlFor='first-name' className='form-label'>Прізвище</label>
          <Input id='first-name' className='form__input'/>
        </Form.Item>
        <Form.Item
          className='form__item'>
          <label htmlFor='second-name' className='form-label'>Ім'я</label>
          <Input id='second-name' className='form__input'/>
        </Form.Item>
        <Form.Item
          className='form__item'>
          <label htmlFor='third-name' className='form-label'>По-батькові</label>
          <Input id='third-name' className='form__input'/>
        </Form.Item>
      </div>
      <div className='form__row'>
        <Form.Item
          className='form__item'>
          <label htmlFor='birth-date' className='form-label'>Дата народження</label>
          <DatePicker id='birth-date' className='form__input form__date-picker' placeholder=''/>
        </Form.Item>
        <Form.Item
          className='form__item'>
          <label htmlFor='student-phone' className='form-label'>Номер телефону</label>
          <Input id='student-phone' className='form__input'/>
        </Form.Item>
        <Form.Item
          className='form__item'>
          <label htmlFor='email' className='form-label'>E-mail</label>
          <Input id='email' className='form__input'/>
        </Form.Item>
      </div>
      <div className='form__row'>
        <Form.Item
          className='form__item'>
          <label htmlFor='group' className='form-label'>Група</label>
          <Select id='group' className='form__input'>
            <Select.Option value='415'>415</Select.Option>
            <Select.Option value='221'>221</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          className='form__item form__input--big'>
          <label htmlFor='residence-place' className='form-label'>Місце проживання</label>
          <Input id='residence-place' className='form__input'/>
        </Form.Item>
      </div>
      <div className='form__row'>
        <div className='form__subtitle'>Батько</div>
        <Form.Item
          className='form__item form__input--medium'>
          <label htmlFor='father-fullname' className='form-label'>ПІБ</label>
          <Input id='father-fullname' className='form__input'/>
        </Form.Item>
        <Form.Item
          className='form__item medium-input'>
          <label htmlFor='father-phone' className='form-label'>Номер телефону</label>
          <Input id='father-phone' className='form__input'/>
        </Form.Item>
      </div>
      <div className='form__row'>
        <div className='form__subtitle'>Мати</div>
        <Form.Item
          className='form__item form__input--medium'>
          <label htmlFor='mother-fullname' className='form-label'>ПІБ</label>
          <Input id='mother-fullname' className='form__input'/>
        </Form.Item>
        <Form.Item
          className='form__item medium-input'>
          <label htmlFor='mother-phone' className='form-label'>Номер телефону</label>
          <Input id='mother-phone' className='form__input'/>
        </Form.Item>
      </div>
      <div className='form__row--buttons'>
        <Button htmlType='submit' className='form__button form__button--save'
                onClick={handleAddStudent}>
          Зберегти
        </Button>
        <Button htmlType='button' className='form__button form__button--cancel'>
          Скасувати
        </Button>
        {
          editMode ?
            <Button htmlType='button' className='form__button form__button--delete'
                    onClick={handleDeleteStudent}>
              Видалити
            </Button>
            : null
        }
      </div>
    </Form>
  );
};

export default StudentForm;