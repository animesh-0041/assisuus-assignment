import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import Accounts from './Accounts'
import Reports from './Reports'
import Advisor from './Advisor'
import Contacts from './Contacts'
import Payroll from './Payroll'

const Home = () => {
    const [activeMenu,setActiveMenu]=useState("Dashboard")
  return (
   <Box>

   <Navbar/>
   <Box display={'flex'}>
    <Box w={'15%'} p={'25px 0'}>
        <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </Box>
    <Box w={'85%'} bg={"#E0E0E0"} h={'100%'} >
        {
            activeMenu=="Dashboard"?<Dashboard/>:activeMenu=="Accounts"?<Accounts/>:activeMenu=="Reports"?<Reports/>:activeMenu=="Advisor"?<Advisor/>:activeMenu=="Contacts"?<Contacts/>:activeMenu=="Payroll"?<Payroll/>:<Heading size={'md'}> Not Found</Heading>
        }
    </Box>
   </Box>
   </Box>
  )
}

export default Home
