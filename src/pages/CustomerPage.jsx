import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Textarea,
  GridItem,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

// Dummy data for customers
const initialCustomers = [
  {
    id: 1,
    name: "Alice Smith",
    mobile: "9876543210",
    guarantor: "Bob Smith",
    aadhar: "123456789012",
    area: "Thanjavur",
  },
  {
    id: 2,
    name: "John Doe",
    mobile: "8765432109",
    guarantor: "Jane Doe",
    aadhar: "234567890123",
    area: "Pudukkottai",
  },
  {
    id: 3,
    name: "Maria Garcia",
    mobile: "7654321098",
    guarantor: "Pedro Garcia",
    aadhar: "345678901234",
    area: "Trichy",
  },
];

const CustomerPage = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    mobile: "",
    guarantor: "",
    address: "",
    spouseName: "",
    aadhar: "",
    area: "",
  });
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSaveCustomer = () => {
    if (
      !newCustomer.name ||
      !newCustomer.mobile ||
      !newCustomer.aadhar ||
      !newCustomer.area
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

    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
    setNewCustomer({
      name: "",
      mobile: "",
      guarantor: "",
      address: "",
      spouseName: "",
      aadhar: "",
      area: "",
    });
    setIsModalOpen(false);
    toast({
      title: "Customer Added.",
      description: "New customer has been successfully added.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          Customers
        </Heading>
        <Button colorScheme="blue" onClick={() => setIsModalOpen(true)}>
          Add New Customer
        </Button>
      </Flex>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Mobile</Th>
              <Th>Guarantor</Th>
              <Th>Aadhar No.</Th>
              <Th>Area</Th>
              {/* <Th>Actions</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td>{customer.id}</Td>
                <Td>{customer.name}</Td>
                <Td>{customer.mobile}</Td>
                <Td>{customer.guarantor}</Td>
                <Td>{customer.aadhar}</Td>
                <Td>{customer.area}</Td>
                {/* <Td>
                <Button size="sm" mr={2}>Edit</Button>
                <Button size="sm" colorScheme="red">Delete</Button>
              </Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Add Customer Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl isRequired>
                <FormLabel>Customer Name</FormLabel>
                <Input
                  name="name"
                  value={newCustomer.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  name="mobile"
                  value={newCustomer.mobile}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Guarantor Name</FormLabel>
                <Input
                  name="guarantor"
                  value={newCustomer.guarantor}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Husband/Wife Name</FormLabel>
                <Input
                  name="spouseName"
                  value={newCustomer.spouseName}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Aadhar Number</FormLabel>
                <Input
                  name="aadhar"
                  value={newCustomer.aadhar}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Area</FormLabel>
                <Select
                  name="area"
                  value={newCustomer.area}
                  onChange={handleInputChange}
                  placeholder="Select area"
                >
                  <option value="Thanjavur">Thanjavur</option>
                  <option value="Pudukkottai">Pudukkottai</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Chennai">Chennai</option>
                </Select>
              </FormControl>
              <GridItem colSpan={{ base: 1, md: 2 }}>
                <FormControl isRequired>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    name="address"
                    value={newCustomer.address}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSaveCustomer}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CustomerPage;
