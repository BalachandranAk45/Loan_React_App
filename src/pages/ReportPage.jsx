import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Text,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Dummy Report Data
const dummyReportData = [
  {
    id: 1,
    date: "2025-07-01",
    customer: "Alice Smith",
    area: "Thanjavur",
    loanAmount: "50,000",
    repayment: "5,000",
    balance: "45,000",
  },
  {
    id: 2,
    date: "2025-07-05",
    customer: "John Doe",
    area: "Pudukkottai",
    loanAmount: "120,000",
    repayment: "10,000",
    balance: "110,000",
  },
  {
    id: 3,
    date: "2025-07-10",
    customer: "Maria Garcia",
    area: "Trichy",
    loanAmount: "80,000",
    repayment: "8,000",
    balance: "72,000",
  },
  {
    id: 4,
    date: "2025-07-12",
    customer: "Alice Smith",
    area: "Thanjavur",
    loanAmount: "50,000",
    repayment: "5,000",
    balance: "40,000",
  },
];

const ReportPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [reportResults, setReportResults] = useState([]); // State to hold filtered results

  const handleGenerateReport = () => {
    // In a real application, you'd fetch data from an API based on these filters
    console.log("Generating report with:", {
      startDate,
      endDate,
      selectedArea,
      selectedCustomer,
    });

    // Simulate filtering dummy data
    const filteredResults = dummyReportData.filter((item) => {
      const itemDate = new Date(item.date);
      const matchesDate =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);
      const matchesArea = !selectedArea || item.area === selectedArea;
      const matchesCustomer =
        !selectedCustomer || item.customer === selectedCustomer;
      return matchesDate && matchesArea && matchesCustomer;
    });
    setReportResults(filteredResults);
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Reports
      </Heading>

      <Box p={4} borderWidth="1px" borderRadius="lg" mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Filter Reports
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              customInput={<Input />}
              isClearable
              placeholderText="Select Start Date"
            />
          </FormControl>
          <FormControl>
            <FormLabel>End Date</FormLabel>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              customInput={<Input />}
              isClearable
              placeholderText="Select End Date"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Area</FormLabel>
            <Select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              placeholder="Select Area"
            >
              <option value="Thanjavur">Thanjavur</option>
              <option value="Pudukkottai">Pudukkottai</option>
              <option value="Trichy">Trichy</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Select
              value={selectedCustomer}
              onChange={(e) => setSelectedCustomer(e.target.value)}
              placeholder="Select Customer"
            >
              <option value="Alice Smith">Alice Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Maria Garcia">Maria Garcia</option>
            </Select>
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="flex-end" mt={6}>
          <Button colorScheme="blue" onClick={handleGenerateReport}>
            Generate Report
          </Button>
        </Flex>
      </Box>

      {reportResults.length > 0 && (
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            Report Results
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Customer</Th>
                  <Th>Area</Th>
                  <Th>Loan Amt</Th>
                  <Th>Repayment</Th>
                  <Th>Balance</Th>
                </Tr>
              </Thead>
              <Tbody>
                {reportResults.map((row) => (
                  <Tr key={row.id}>
                    <Td>{row.date}</Td>
                    <Td>{row.customer}</Td>
                    <Td>{row.area}</Td>
                    <Td>₹{row.loanAmount}</Td>
                    <Td>₹{row.repayment}</Td>
                    <Td>₹{row.balance}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {reportResults.length === 0 && (
        <Box textAlign="center" p={4}>
          <Text fontSize="lg" color="gray.500">
            No report data to display. Use filters and click "Generate Report".
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ReportPage;
