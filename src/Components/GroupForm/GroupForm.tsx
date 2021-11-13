import React from "react";
import { Form, Input, Row, Col, Button } from "antd";

const GroupForm = () => {
  return (
    <div>
      <Form layout="vertical" className="form form--pt">
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Скорочена назва">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Курс">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Рік">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Повна назва">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Форма навчання">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <div className="form__row--buttons">
          <Button htmlType="submit" className="form__button form__button--save">
            Зберегти
          </Button>
          <Button
            htmlType="button"
            className="form__button form__button--cancel"
          >
            Скасувати
          </Button>
          <Button
            htmlType="button"
            className="form__button form__button--delete"
          >
            Видалити
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default GroupForm;
