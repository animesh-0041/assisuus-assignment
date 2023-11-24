import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
const Sidebar = ({setActiveMenu,activeMenu}) => {
const [sidebarElement,setSidebarElement]=useState([
    {
        title:"Dashboard",
        icon:<MdDashboard/>
    },
    {
        title:"Accounts",
        icon:<FaWallet/> 
    },
    
    {
        title:"Payroll",
        icon:<FaDollarSign/>
    },
    {
        title:"Reports",
        icon:<BiSolidReport/>   
    },
    {
        title:"Advisor",
        icon:<MdAccountCircle/>   
    },
    {
        title:"Contacts",
        icon:<MdContacts/>   
    },

])

  return (
    <Box>
<Box>
        {
            sidebarElement.map((el,i)=>{
                return <Box key={i} display={'flex'} gap={'25px'}  p={'10px'} cursor={'pointer'} alignItems={'center'} onClick={()=>setActiveMenu(el.title)} bg={activeMenu==el.title?"#00C853":null} color={activeMenu==el.title?"white":null} >
                   <Box>{el.icon}</Box>
                    <Heading size={'sm'} fontWeight={"bold"}>{el.title}</Heading>
                </Box>
            })
        }
</Box>

        {/* <Box w={'15%'}>
      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'} bg={'green'} cursor={'pointer'}>
        <MdDashboard />
        <Heading size={"sm"}>Dashboard</Heading>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'}>
        <FaWallet />
        <Heading size={"sm"}>Accounts</Heading>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'}>
        <FaDollarSign />
        <Heading size={"sm"}>Payroll</Heading>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'}>
        <BiSolidReport />
        <Heading size={"sm"}>Reports</Heading>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'}>
        <MdAccountCircle />
        <Heading size={"sm"}>Advisor</Heading>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} alignItems={'center'} p={'10px'}>
        <MdContacts />
        <Heading size={"sm"}>Contacts</Heading>
      </Box>

      </Box> */}
    </Box>
  );
};

export default Sidebar;
