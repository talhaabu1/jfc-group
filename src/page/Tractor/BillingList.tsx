import { Icon } from "@rsuite/icons";
import { useState } from "react";
import { CgMore } from "react-icons/cg";
import { MdPayments } from "react-icons/md";
import { ButtonGroup, IconButton, Popover, Table, Text, Whisper } from "rsuite";
import { Cell, HeaderCell, Column } from "rsuite-table";

// Define the type for a row of data
interface BillingData {
  id: number;
  name: string;
  mobilNumber: string;
  village: string;
  landArea: number;
  rate: number;
  totalAmount: string;
  receivedAmount: string;
  dueAmount: string;
}

// Sample data
const data: BillingData[] = [
  {
    id: 1,
    name: "জাফর",
    mobilNumber: "01812931537",
    village: "ভবানীপুর",
    landArea: 10,
    rate: 20,
    totalAmount: "5000",
    receivedAmount: "4000",
    dueAmount: "1000",
  },
  {
    id: 1,
    name: "চাঁন্দ",
    mobilNumber: "01812931537",
    village: "ভবানীপুর",
    landArea: 20,
    rate: 20,
    totalAmount: "5000",
    receivedAmount: "4000",
    dueAmount: "1000",
  },
  // Add more rows as necessary
];

// Popover Dropdown Menu
// const renderSpeaker = (
//   { onClose, ...rest }: any,
//   ref: React.Ref<HTMLDivElement>,
//   rowData: BillingData,
// ) => {
//   const handleSelect = (eventKey: string | undefined) => {
//     onClose();
//     console.log(`Selected: ${eventKey} ${rowData}`);
//   };

//   return (
//     <Popover ref={ref} {...rest} full>
//       {/* <a
//         href="#"
//         className="flex transform items-center px-3 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
//       >
//         <svg
//           className="mx-1 h-5 w-5"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
//             fill="currentColor"
//           />
//           <path
//             d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
//             fill="currentColor"
//           />
//         </svg>
//         <span className="mx-1">view profile</span>
//       </a> */}
//       <IconButton icon={<Icon as={CgCalendarDue} />}>Name</IconButton>
//       <IconButton icon={<Search />}>Name</IconButton>
//     </Popover>
//   );
// };

const BillingList: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<BillingData | null>(null);
  console.log(selectedRow);
  const handleRowClick = (rowData: BillingData) => {
    console.log("Row clicked: ", rowData);
    setSelectedRow(rowData);
  };

  return (
    <Table
      autoHeight
      data={data}
      onRowClick={handleRowClick}
      bordered
      cellBordered
      hover
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>ID</HeaderCell>
        <Cell>{(_rowData, index) => (index as number) + 1}</Cell>
      </Column>

      <Column width={120}>
        <HeaderCell>Customer Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={130}>
        <HeaderCell>Village</HeaderCell>
        <Cell dataKey="village" />
      </Column>

      <Column width={120}>
        <HeaderCell>Mobile</HeaderCell>
        <Cell dataKey="mobilNumber" />
      </Column>

      <Column width={120}>
        <HeaderCell>Total Amount</HeaderCell>
        <Cell dataKey="totalAmount" />
      </Column>

      <Column width={120}>
        <HeaderCell>Received Amount</HeaderCell>
        <Cell dataKey="receivedAmount" />
      </Column>

      <Column width={120}>
        <HeaderCell>Due Amount</HeaderCell>
        <Cell dataKey="dueAmount" />
      </Column>

      <Column flexGrow={1} fullText>
        <HeaderCell>Description</HeaderCell>
        <Cell wordWrap>
          {(rowData: BillingData) => (
            <Text>
              {rowData.name} সাহেবের - {rowData.landArea} কাঠা জমি চাষ করছে
              আল-আমিন
            </Text>
          )}
        </Cell>
      </Column>

      <Column width={60} fixed="right" align="center">
        <HeaderCell>Action</HeaderCell>
        <Cell>
          {(rowData: BillingData) => (
            <Whisper
              placement="auto"
              trigger="click"
              speaker={(props, ref) => {
                const { left, top } = props;
                console.log("rowData: " + rowData);
                return (
                  <Popover ref={ref} full {...props} style={{ left, top }}>
                    <ButtonGroup vertical>
                      <IconButton
                        // onClick={() => onClose()}
                        icon={<Icon as={MdPayments} />}
                      >
                        Due Payments
                      </IconButton>
                      {/* <IconButton
                        // onClick={() => onClose()}
                        icon={<Icon as={CgCalendarDue} />}
                      >
                        Name
                      </IconButton> */}
                    </ButtonGroup>
                  </Popover>
                );
              }}
            >
              <IconButton
                icon={<Icon as={CgMore} />}
                size="xs"
                color="blue"
                appearance="primary"
              />
            </Whisper>
          )}
        </Cell>
      </Column>
    </Table>
  );
};

export default BillingList;
