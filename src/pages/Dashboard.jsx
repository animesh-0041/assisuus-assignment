import { Box, Button, Heading, Select, Text, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input, } from '@chakra-ui/react'
import React from 'react'
import Bar from './Bar'
import { FaSquare } from "react-icons/fa";
import CashChart from './CashChart';
import AccountChart from './AccountChart';
const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box p={'40px'}>
      <Box display={'grid'} gridTemplateColumns='repeat(2, 1fr)' gap={6}>
      <Box bg={'white'} borderRadius={'10px'}>
          <Box>
              <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #E0E0E0'} p={'15px 10px'} alignItems={'center'}>
                <Heading size={'sm'}>Checking account</Heading>
                <Box display={'flex'} justifyContent={'space-between'} gap={'10px'}>
                  <Select size={'sm'} borderRadius={'5px'}>
                    <option value="Manage">Manage</option>
                  </Select>
                  <Select size={'sm'} borderRadius={'5px'}>
                    <option value="January">January</option>
                  </Select>
                </Box>
              </Box>
            </Box>
            <AccountChart/>
          </Box>


          <Box bg={'white'} borderRadius={'10px'}>
            <Box>
              <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #E0E0E0'} p={'15px 10px'} alignItems={'center'}>
                <Heading size={'sm'}>Invoices owed to you</Heading>
                <Button color={'green'} size={'sm'} onClick={onOpen}>New Sales Invoice</Button>
              </Box>
            </Box>
            <Bar/>
          </Box>

          <Box bg={'white'} borderRadius={'10px'}>
          <Box>
              <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #E0E0E0'} p={'15px 10px'} alignItems={'center'}>
                <Heading size={'sm'}>Total cash flow</Heading>
                <Box display={'flex'} justifyContent={'space-between'} gap={'10px'}>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'5px'}>
                    <FaSquare color='green'/>
                    <Text size={'sm'}>In</Text>
                  </Box>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'5px'}>
                  <FaSquare color='green'/>
                  <Text size={'sm'}>Out</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <CashChart/>
          </Box>

          <Box bg={'white'} borderRadius={'10px'}>
            <Box>
              <Box display={'flex'} justifyContent={'space-between'} borderBottom={'1px solid #E0E0E0'} p={'15px 10px'} alignItems={'center'}>
                <Heading size={'sm'}>Account watchlist</Heading>
               
              </Box>
            </Box>
            <TableContainer>
  <Table variant='simple' w={'500px'}>
    <Thead>
      <Tr>
        <Th  borderBottom={'none'} w={'60%'}>Account</Th>
        <Th borderBottom={'none'} >This Month</Th>
        <Th  borderBottom={'none'} >YTD</Th>
      </Tr>
    </Thead>
    <Tbody >
      <Tr >
        <Td borderBottom={'none'}>Sales</Td>
        <Td  borderBottom={'none'}>1,194.58</Td>
        <Td   borderBottom={'none'}>11,418.29</Td>
      </Tr>
      <Tr>
        <Td borderBottom={'none'}>Advertising</Td>
        <Td borderBottom={'none'}>6,8790.02</Td>
        <Td borderBottom={'none'} >6,8790.2</Td>
      </Tr>
      <Tr>
        <Td borderBottom={'none'}>Inventory</Td>
        <Td borderBottom={'none'}>6,8790.02</Td>
        <Td borderBottom={'none'} >6,8790.2</Td>
      </Tr>
      <Tr>
        <Td borderBottom={'none'}>Entertainment</Td>
        <Td borderBottom={'none'}>6,8790.02</Td>
        <Td  borderBottom={'none'}>6,8790.2</Td>
      </Tr>
      <Tr>
        <Td>Product</Td>
        <Td>6,8790.02</Td>
        <Td >6,8790.2</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
          </Box>

      </Box>





     
{/* modal */}
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload File</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='file'/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' size={'sm'} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='green'size={'sm'} >Upload</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </Box>
  )
}

export default Dashboard
