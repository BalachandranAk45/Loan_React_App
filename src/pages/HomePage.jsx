import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Dummy Data for charts and stats
const statsData = {
  loanAmountMonthly: "₹1,200,000",
  receivedMonthly: "₹850,000",
  loanAmountToday: "₹50,000",
  receivedToday: "₹30,000",
};

const barChartData = [
  { name: "Jan", loans: 4000, received: 2400 },
  { name: "Feb", loans: 3000, received: 1398 },
  { name: "Mar", loans: 2000, received: 9800 },
  { name: "Apr", loans: 2780, received: 3908 },
  { name: "May", loans: 1890, received: 4800 },
  { name: "Jun", loans: 2390, received: 3800 },
];

const pieChartData = [
  { name: "Active Loans", value: 400 },
  { name: "Closed Loans", value: 300 },
  { name: "Overdue Loans", value: 150 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // Colors for pie chart

const HomePage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Dashboard
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Loan Amount (Monthly)</StatLabel>
              <StatNumber>{statsData.loanAmountMonthly}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                2.3% since last month
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Received (Monthly)</StatLabel>
              <StatNumber>{statsData.receivedMonthly}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5.1% since last month
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Loan Amount (Today)</StatLabel>
              <StatNumber>{statsData.loanAmountToday}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                New Loans
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat>
              <StatLabel>Received (Today)</StatLabel>
              <StatNumber>{statsData.receivedToday}</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                Payments
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <Card>
          <CardHeader>
            <Heading size="md">Monthly Loan vs. Received</Heading>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="loans" fill="#8884d8" name="Loans Issued" />
                <Bar dataKey="received" fill="#82ca9d" name="Amount Received" />
              </BarChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Loan Status Distribution</Heading>
          </CardHeader>
          <CardBody>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
