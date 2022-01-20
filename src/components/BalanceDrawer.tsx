import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
  } from '@chakra-ui/react'
import TransactionInfo from './TransactionInfo'

const BalanceDrawer:React.VFC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef:any = React.useRef()
    const [movements, setMovements] = useState([
        {concept:"entradas de cine",
        amount: 100,
        date: "4/8/21",
        type: "outflow",   
      },
      {concept:"cine",
      amount: 500,
      date: "11/4/21",
      type: "outflow",   
      },
      {concept:"rendimiento PF",
      amount: 2500,
      date: "7/5/21",
      type: "income",   
      },
      {concept:"entradas de cine",
      amount: 100,
      date: "4/8/21",
      type: "outflow",   
    },
    {concept:"cine",
    amount: 500,
    date: "11/4/21",
    type: "outflow",   
    },
    {concept:"rendimiento PF",
    amount: 2500,
    date: "7/5/21",
    type: "income",   
    },
    {concept:"entradas de cine",
    amount: 100,
    date: "4/8/21",
    type: "outflow",   
  },
  {concept:"cine",
  amount: 500,
  date: "11/4/21",
  type: "outflow",   
  },
  {concept:"rendimiento PF",
  amount: 2500,
  date: "7/5/21",
  type: "income",   
  },
      ])




  
    return (
      <>
        <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
          Ver ultimos movimientos
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Ultimos movimientos</DrawerHeader>
  
            <DrawerBody width="100%">
              
          <Stack direction="column" wrap="wrap" gap={0} justifyContent="flex-start" alignItems="center">
        {
          movements.map(movement => <TransactionInfo amount={movement.amount} concept={movement.concept} date={movement.date} type={movement.type}/>)
        }

          </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={()=>{
            setMovements([
              ...movements,  {concept:"rendimiento PF",
              amount: 2500,
              date: "7/5/21",
              type: "income",   
              }
            ])
          }}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default BalanceDrawer;