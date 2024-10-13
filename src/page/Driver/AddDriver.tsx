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
  Table,
  Divider,
} from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const { StringType } = Schema.Types;

const data = [
  {
    id: 1,
    name: "চাঁন্দ",
    mobilNumber: "01812931537",
    village: "ভবানীপুর",
    nidNumber: "123456789012",
  },
  {
    id: 2,
    name: "জান্টু",
    mobilNumber: "01731185386",
    village: "বড়িশা",
    nidNumber: "123456789012",
  },
  // Add more data as needed...
];

// validation schema ⤵
const model = Schema.Model({
  name: StringType().isRequired("নাম প্রয়োজন."),
  mobilNumber: StringType()
    .isRequired("মোবাইল নাম্বার প্রয়োজন.")
    .addRule(
      (value: string) => !!value && value.length === 11,
      "মোবাইল নাম্বার অবশ্যই ১১ সংখ্যার হতে হবে।",
    ),
  village: StringType().isRequired("গ্রাম প্রয়োজন."),
  nidNumber: StringType().isRequired("এনআইডি নাম্বার প্রয়োজন."),
});

// form value types
interface FormValueType {
  name: string;
  mobilNumber: string;
  village: string;
  nidNumber: string;
}

const AddDriver = () => {
  // Form state value ⤵
  const [formValue, setFormValue] = useState<FormValueType>({
    name: "",
    mobilNumber: "",
    village: "",
    nidNumber: "",
  });

  // Form submit handler ⤵
  const handleSubmit = () => {
    console.log("Form Submitted:", formValue);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* Modal button */}
      <Stack justifyContent="space-between">
        <Heading>Driver Info</Heading>
        <IconButton icon={<PlusIcon />} onClick={handleOpen} />
      </Stack>
      {/* Modal */}
      <Modal size="xs" open={open} onClose={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>Driver Info</Modal.Title>
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
            {/* NID Field */}
            <Form.Group controlId="nidNumber" className="mb-3">
              <Form.ControlLabel className="text-lg">
                এনআইডি নাম্বার
              </Form.ControlLabel>
              <Form.Control
                name="nidNumber"
                accepter={Input}
                placeholder="এনআইডি নাম্বার লিখুন"
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
      <Divider>Driver List</Divider>
      {/* Table  */}
      <Table
        cellBordered={true}
        autoHeight
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={1} minWidth={150}>
          <HeaderCell>Village</HeaderCell>
          <Cell dataKey="village" />
        </Column>

        <Column flexGrow={1} minWidth={200}>
          <HeaderCell>Mobile Number</HeaderCell>
          <Cell dataKey="mobilNumber" />
        </Column>

        <Column flexGrow={1} minWidth={200}>
          <HeaderCell>Nid Number</HeaderCell>
          <Cell dataKey="nidNumber" />
        </Column>
      </Table>
    </>
  );
};

export default AddDriver;
