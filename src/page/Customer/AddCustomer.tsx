import { useState } from "react";
import PlusIcon from "@rsuite/icons/Plus";

import {
  Form,
  Button,
  Input,
  Schema,
  Modal,
  Stack,
  Heading,
  IconButton,
} from "rsuite";

const { StringType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("নাম প্রয়োজন."),
  mobilNumber: StringType()
    .isRequired("মোবাইল নাম্বার প্রয়োজন.")
    .addRule(
      (value: string) => !!value && value.length === 11,
      "মোবাইল নাম্বার অবশ্যই ১১ সংখ্যার হতে হবে।",
    ),
  village: StringType().isRequired("গ্রাম প্রয়োজন."),
});

// form value types
interface FormValueType {
  name: string;
  mobilNumber: number | null;
  village: string;
}

const AddCustomer = () => {
  const [formValue, setFormValue] = useState<FormValueType>({
    name: "",
    mobilNumber: null,
    village: "",
  });

  const handleSubmit = () => {
    console.log("Form Submitted:", formValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack justifyContent="space-between">
        <Heading>Customer Info</Heading>
        <IconButton icon={<PlusIcon />} onClick={handleOpen} />
      </Stack>
      <Modal size="xs" open={open} onClose={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>Customer Info</Modal.Title>
        </Modal.Header>
        <Form
          fluid
          model={model}
          formValue={formValue}
          onChange={(newFormValue) => {
            setFormValue(newFormValue as FormValueType);
          }}
          onSubmit={handleSubmit}
        >
          <Modal.Body>
            {/* Name Field */}
            <Form.Group controlId="name">
              <Form.ControlLabel className="text-lg">নাম</Form.ControlLabel>
              <Form.Control
                name="name"
                accepter={Input}
                placeholder="নাম লিখুন"
              />
            </Form.Group>
            {/* Number Field */}
            <Form.Group controlId="village">
              <Form.ControlLabel className="text-lg">গ্রাম</Form.ControlLabel>
              <Form.Control
                name="village"
                accepter={Input}
                placeholder="গ্রাম লিখুন"
                className="w-full"
              />
            </Form.Group>
            {/* Number Field */}
            <Form.Group controlId="mobilNumber" className="mb-3">
              <Form.ControlLabel className="text-lg">
                মোবাইল নাম্বার
              </Form.ControlLabel>
              <Form.Control
                name="mobilNumber"
                accepter={Input}
                placeholder="মোবাইল নাম্বার লিখুন"
                className="w-full"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            {/* Submit Button */}
            <Form.Group>
              <Button appearance="primary" type="submit">
                Submit
              </Button>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
            </Form.Group>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddCustomer;
