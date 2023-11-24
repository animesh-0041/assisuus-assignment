import { Avatar, Box, Image, Img, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon,BellIcon,TriangleDownIcon } from '@chakra-ui/icons'
import { MdArrowDropDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Navbar = () => {
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={'15px '} >
        <Box >
        <Img w={'60%'} src="https://www.assiduusglobal.com/images/assiduus-logo-dark.webp"/>
        </Box>

        <Box display={'flex'} justifyContent={'space-between'} gap={'20px'} alignItems={'center'}>
          <Box>
            <InputGroup size={'sm'} >
              <InputLeftElement pointerEvents="none">
                <SearchIcon  />
              </InputLeftElement>
              <Input type="text" bg={'gray.100'} borderRadius={'5px'}/>
            </InputGroup>
          </Box>
          <Box >
            <BellIcon  fontSize={'20px'} />
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} gap={'10px'} alignItems={'center'}>
            <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'}/>
            <MdArrowDropDown />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
