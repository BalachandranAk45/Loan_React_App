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
  Flex,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Don't forget to import CSS

const RepaymentPage = () => {
  const [repayment, setRepayment] = useState({
    area: "",
    customerName: "",
    bookId: "",
    loanAmount: "",
    balanceAmount: "",
    paymentDate: null, // Use null for initial date
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRepayment({ ...repayment, [name]: value });
  };

  const handleDateChange = (date) => {
    setRepayment({ ...repayment, paymentDate: date });
  };

  const handleSave = () => {
    if (
      !repayment.area ||
      !repayment.customerName ||
      !repayment.bookId ||
      !repayment.paymentDate
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log("Saving Repayment:", repayment);
    toast({
      title: "Repayment Saved.",
      description: "Repayment details have been recorded.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    // Reset form
    setRepayment({
      area: "",
      customerName: "",
      bookId: "",
      loanAmount: "",
      balanceAmount: "",
      paymentDate: null,
    });
  };

  const handleCancel = () => {
    setRepayment({
      area: "",
      customerName: "",
      bookId: "",
      loanAmount: "",
      balanceAmount: "",
      paymentDate: null,
    });
    toast({
      title: "Form Cleared.",
      description: "Repayment form has been reset.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Repayments
      </Heading>

      <Box p={4} borderWidth="1px" borderRadius="lg">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
          <FormControl>
            <FormLabel>Area</FormLabel>
            <Select
              name="area"
              value={repayment.area}
              onChange={handleInputChange}
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
              name="customerName"
              value={repayment.customerName}
              onChange={handleInputChange}
              placeholder="Select Customer"
            >
              {/* This would ideally be populated dynamically from customer data */}
              <option value="Alice Smith">Alice Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Maria Garcia">Maria Garcia</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Book ID</FormLabel>
            <Input
              name="bookId"
              value={repayment.bookId}
              onChange={handleInputChange}
              placeholder="Enter Book ID"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Loan Amount</FormLabel>
            <Input
              name="loanAmount"
              value={repayment.loanAmount}
              onChange={handleInputChange}
              type="number"
              placeholder="Loan Amount"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Balance Amount</FormLabel>
            <Input
              name="balanceAmount"
              value={repayment.balanceAmount}
              onChange={handleInputChange}
              type="number"
              placeholder="Balance Amount"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Payment Date</FormLabel>
            <DatePicker
              selected={repayment.paymentDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              customInput={<Input />}
              isClearable
              placeholderText="Select Date"
            />
          </FormControl>
        </SimpleGrid>
        <Flex justifyContent="flex-end">
          <Button variant="ghost" mr={3} onClick={handleCancel}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RepaymentPage;
