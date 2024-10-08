import { useState } from "react";

import {
  Form,
  ButtonToolbar,
  Button,
  Input,
  InputNumber,
  DatePicker,
  Schema,
} from "rsuite";

const { StringType, NumberType, DateType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("কাস্টমারের নাম প্রয়োজন."),
  number: NumberType().isRequired("কত শতক জমি প্রয়োজন."),
  date: DateType().isRequired("তারিখ প্রয়োজন."),
});

// form value types
interface FormValueType {
  name: string;
  number: number | null;
  date: Date | null;
}
const AddReport = () => {
  const [formValue, setFormValue] = useState<FormValueType>({
    name: "",
    number: null,
    date: new Date(), // Set current date as default
  });

  const handleSubmit = () => {
    console.log("Form Submitted:", formValue);
  };
  return (
    <div className="mx-auto max-w-4xl">
      <Form
        fluid
        model={model}
        formValue={formValue}
        onChange={(newFormValue) => {
          setFormValue(newFormValue as FormValueType);
        }}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3">
          {/* Date Field */}
          <Form.Group controlId="date">
            <Form.ControlLabel>তারিখ</Form.ControlLabel>
            <Form.Control
              name="date"
              accepter={DatePicker}
              placeholder="আজকের তারিখ"
              className="w-full"
              oneTap
            />
          </Form.Group>
          {/* Name Field */}
          <Form.Group controlId="name">
            <Form.ControlLabel>কাস্টমার নাম</Form.ControlLabel>
            <Form.Control
              name="name"
              accepter={Input}
              placeholder="কাস্টমারের নাম লিখুন"
            />
          </Form.Group>
          {/* Number Field */}
          <Form.Group controlId="number">
            <Form.ControlLabel>কত শতক জমি</Form.ControlLabel>
            <Form.Control
              name="number"
              accepter={InputNumber}
              placeholder="কত শতক জমি লিখুন"
              className="w-full"
            />
          </Form.Group>
          {/* Submit Button */}
        </div>
        <Form.Group>
          <ButtonToolbar className="mt-5 flex justify-end md:mt-0">
            <Button appearance="primary" type="submit">
              Submit
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddReport;
