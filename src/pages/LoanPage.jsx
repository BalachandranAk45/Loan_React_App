import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Table,
  useToast,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";

const initialLoans = [
  {
    id: 1,
    customerName: "Alice Smith",
    loanAmount: "50,000",
    interest: "10%",
    type: "Personal",
    area: "Thanjavur",
    duration: "12 months",
  },
  {
    id: 2,
    customerName: "John Doe",
    loanAmount: "120,000",
    interest: "8%",
    type: "Business",
    area: "Pudukkottai",
    duration: "24 months",
  },
];

const LoanPage = () => {
  const toast = useToast();

  const [loans, setLoans] = useState(initialLoans);
  const [newLoan, setNewLoan] = useState({
    customerName: "",
    loanAmount: "",
    interest: "",
    type: "",
    area: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLoan({ ...newLoan, [name]: value });
  };

  const handleAddLoan = () => {
    if (!newLoan.customerName || !newLoan.loanAmount || !newLoan.area) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoans([...loans, { id: loans.length + 1, ...newLoan }]);
    toast({
      title: "Loan Added",
      description: "The new loan has been added successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });

    setNewLoan({
      customerName: "",
      loanAmount: "",
      interest: "",
      type: "",
      area: "",
      duration: "",
    }); // Clear form
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Loans
      </Heading>

      <Box p={4} borderWidth="1px" borderRadius="lg" mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Add New Loan
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input
              name="customerName"
              value={newLoan.customerName}
              onChange={handleInputChange}
              placeholder="Enter customer name"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Loan Amount</FormLabel>
            <Input
              name="loanAmount"
              value={newLoan.loanAmount}
              onChange={handleInputChange}
              type="number"
              placeholder="e.g., 50000"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Interest (%)</FormLabel>
            <Input
              name="interest"
              value={newLoan.interest}
              onChange={handleInputChange}
              type="number"
              placeholder="e.g., 10"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              value={newLoan.type}
              onChange={handleInputChange}
              placeholder="Select type"
            >
              <option value="Personal">Personal</option>
              <option value="Business">Business</option>
              <option value="Home">Home</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Area</FormLabel>
            <Select
              name="area"
              value={newLoan.area}
              onChange={handleInputChange}
              placeholder="Select area"
            >
              <option value="Thanjavur">Thanjavur</option>
              <option value="Pudukkottai">Pudukkottai</option>
              <option value="Trichy">Trichy</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Input
              name="duration"
              value={newLoan.duration}
              onChange={handleInputChange}
              placeholder="e.g., 12 months"
            />
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="flex-end" mt={6}>
          <Button colorScheme="blue" onClick={handleAddLoan}>
            Add Loan
          </Button>
        </Flex>
      </Box>

      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Heading as="h2" size="lg" mb={4}>
          Loan Details
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Customer Name</Th>
                <Th>Loan Amount</Th>
                <Th>Interest</Th>
                <Th>Type</Th>
                <Th>Area</Th>
                <Th>Duration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {loans.map((loan) => (
                <Tr key={loan.id}>
                  <Td>{loan.id}</Td>
                  <Td>{loan.customerName}</Td>
                  <Td>₹{loan.loanAmount}</Td>
                  <Td>{loan.interest}%</Td>
                  <Td>{loan.type}</Td>
                  <Td>{loan.area}</Td>
                  <Td>{loan.duration}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default LoanPage;
