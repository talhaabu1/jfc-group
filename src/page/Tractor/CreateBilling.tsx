import { useState } from "react";

import {
  Form,
  ButtonToolbar,
  Button,
  InputNumber,
  Schema,
  InputPicker,
  SelectPicker,
} from "rsuite";

const { StringType, NumberType } = Schema.Types;

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
  "Louisa",
  "Lester",
  "Lola",
  "Lydia",
  "Hal",
  "Hannah",
  "Harriet",
  "Hattie",
  "Hazel",
  "Hilda",
].map((item) => ({ label: item, value: item }));

// validation schema ⤵
const model = Schema.Model({
  customerName: StringType().isRequired("কাস্টমারের নাম প্রয়োজন."),
  landArea: NumberType().isRequired("জমির পরিমাণ প্রয়োজন."),
  rate: NumberType().isRequired("দর প্রয়োজন."),
  driverName: StringType().isRequired("ড্রাইভার নাম প্রয়োজন."),
  helperName: StringType().isRequired("হেল্পার নাম প্রয়োজন."),
});

// form value types
interface FormValueType {
  customerName: string;
  landArea: number | null;
  rate: number | null;
  driverName: string;
  helperName: string;
}
const CreateBilling = () => {
  // Form state value ⤵
  const [formValue, setFormValue] = useState<FormValueType>({
    customerName: "",
    landArea: null,
    rate: null,
    driverName: "",
    helperName: "",
  });

  // Form submit handler ⤵
  const handleSubmit = () => {
    console.log("Form Submitted:", formValue);
  };
  return (
    <div className="mx-auto max-w-3xl rounded-md bg-[#F7F7FA] p-3 shadow-md dark:bg-[#1B1D24] md:p-10">
      <Form
        fluid
        model={model}
        formValue={formValue}
        onChange={(newFormValue) => {
          setFormValue(newFormValue as FormValueType);
        }}
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
          {/* Name Field */}
          <Form.Group controlId="customerName">
            <Form.ControlLabel className="text-lg">
              কাস্টমার নাম
            </Form.ControlLabel>
            <Form.Control
              name="customerName"
              accepter={InputPicker}
              placeholder="কাস্টমারের নাম লিখুন"
              data={data}
              className="w-full"
            />
          </Form.Group>
          {/* Number Field */}
          <Form.Group controlId="landArea">
            <Form.ControlLabel className="text-lg">
              জমির পরিমাণ
            </Form.ControlLabel>
            <Form.Control
              name="landArea"
              accepter={InputNumber}
              placeholder="জমির পরিমাণ লিখুন"
              className="w-full"
              min={1}
            />
          </Form.Group>
          {/* Number Field */}
          <Form.Group controlId="rate">
            <Form.ControlLabel className="text-lg">দর</Form.ControlLabel>
            <Form.Control
              name="rate"
              accepter={InputNumber}
              placeholder="দর লিখুন"
              className="w-full"
              min={1}
            />
          </Form.Group>
          {/* Number Field */}
          <Form.Group controlId="driverName">
            <Form.ControlLabel className="text-lg">
              ড্রাইভার নাম
            </Form.ControlLabel>
            <Form.Control
              name="driverName"
              accepter={SelectPicker}
              placeholder="ড্রাইভার নাম লিখুন"
              className="w-full"
              data={data}
              searchable={false}
            />
          </Form.Group>
          {/* Number Field */}
          <Form.Group controlId="helperName">
            <Form.ControlLabel className="text-lg">
              হেল্পার নাম
            </Form.ControlLabel>
            <Form.Control
              name="helperName"
              accepter={SelectPicker}
              placeholder="হেল্পার নাম লিখুন"
              className="w-full"
              data={data}
              searchable={false}
            />
          </Form.Group>
          {/* Submit Button */}
        </div>
        <Form.Group>
          <ButtonToolbar className="mt-5 flex justify-end md:mt-0">
            <Button
              appearance="primary"
              type="submit"
              style={{ fontWeight: "600" }}
            >
              Submit
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateBilling;
