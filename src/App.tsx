import { Stack, Text, Image, Container, Button, Heading, StackDivider, Icon, useDisclosure } from '@chakra-ui/react'
import { AddIcon, AtSignIcon, EditIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import BalanceDrawer from './components/BalanceDrawer';
import { useState } from 'react';
import IncomeModal from './components/IncomeModal';
import ExpenseModal from './components/ExpenseModal';


function App() {
  const [ visibleNumbers, setVisibleNumbers ] = useState(true)
  const { isOpen : isOpenIncomeModal, onOpen : onOpenIncomeModal, onClose : onCloseIncomeModal } = useDisclosure()
  const { isOpen : isOpenExpenseModal, onOpen : onOpenExpenseModal, onClose : onCloseExpenseModal } = useDisclosure()
  
  return (
    <Container maxWidth={{base: "100%", sm: "container.sm"}} height="100vh" justifyContent="center" paddingTop={2} backgroundColor="bgHome">
      <Stack divider={<StackDivider/>}>
      <Stack  alignItems="center" justifyContent="center" paddingY={2}  borderRadius="md" borderWidth={2} borderColor="boxesBorders" >
        <Heading fontSize={26} letterSpacing={1}>Alkemy-Control</Heading>
      </Stack>

<Stack color="white" letterSpacing={1}>
<Stack justifyContent="center" paddingX={2} paddingY={1} backgroundColor="boxes" borderRadius="md"   >
        <Heading fontSize={22}>Balance</Heading>
        { visibleNumbers ?         <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>$1234</Text>
        <ViewIcon  cursor="pointer" onClick={()=>setVisibleNumbers(false)} w={5} h={5}/>
        </Stack> :        
        <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>*****</Text>
        <ViewOffIcon cursor="pointer" onClick={()=>setVisibleNumbers(true)} w={5} h={5}/>
        </Stack> }
      </Stack>


      <Stack justifyContent="center" paddingX={2} paddingY={1} backgroundColor="boxes" borderRadius="md"  >
        <Stack direction="row" justifyContent="space-between" alignItems="center" paddingRight={1}>
        <Heading fontSize={22}>Ingresos</Heading>
        <AddIcon cursor="pointer" w={3} h={3} onClick={onOpenIncomeModal}/>
        </Stack>
        
          { visibleNumbers ?         <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>$1234</Text>
        <ViewIcon  cursor="pointer" onClick={()=>setVisibleNumbers(false)} w={5} h={5}/>
        </Stack> :         <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>*****</Text>
        <ViewOffIcon cursor="pointer" onClick={()=>setVisibleNumbers(true)} w={5} h={5}/>
        </Stack> }
      </Stack>


      <Stack justifyContent="center" paddingX={2} paddingY={1} backgroundColor="boxes" borderRadius="md"  >


      <Stack direction="row" justifyContent="space-between" alignItems="center" paddingRight={1}>
        <Heading fontSize={22}>Gastos</Heading>
        <AddIcon cursor="pointer" w={3} h={3} onClick={onOpenExpenseModal}/>
        </Stack>



        { visibleNumbers ?         <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>$1234</Text>
        <ViewIcon cursor="pointer" onClick={()=>setVisibleNumbers(false)} w={5} h={5}/>
        </Stack> :         <Stack direction="row" justifyContent="space-between">
        <Text fontSize={16}>*****</Text>
        <ViewOffIcon cursor="pointer" onClick={()=>setVisibleNumbers(true)} w={5} h={5}/>
        </Stack> }
      </Stack>
</Stack>


      </Stack>
      <Stack direction="row" justifyContent="space-between" paddingTop={4}>
        <Button fontSize={14} paddingY="-4" colorScheme="whatsapp" variant="outline">Filtros</Button>
        <Button fontSize={14} colorScheme="whatsapp" variant="outline">Ver todo</Button>
      </Stack>
      
      
      
      <Stack color="white" paddingTop={4}>


        <Stack direction="row"  justifyContent="space-between" alignItems="center" paddingX={1} backgroundColor="movements" borderRadius="md" >


          <Stack direction="row"  alignItems="center">
          <AtSignIcon w={6} h={6} backgroundColor="black" color="black" borderRadius="100"/>
        <Stack alignItems="flex-start" spacing={0} justifyContent="flex-end">
          <Text fontSize={14}>Concepto</Text>
          <Text fontSize={10}>07/04/1993</Text>
        </Stack>
          </Stack>


          <Stack  alignItems="flex-end" spacing={0} paddingTop={2} justifyContent="flex-end" >
            <EditIcon w={3} h={3}/>
            <Text fontSize={14}>+500</Text>
          </Stack>
        
        </Stack>
        <Stack direction="row"  justifyContent="space-between" alignItems="center" paddingX={1} backgroundColor="movements" borderRadius="md" >


          <Stack direction="row"  alignItems="center">
          <AtSignIcon w={6} h={6} backgroundColor="black" color="black" borderRadius="100"/>
        <Stack alignItems="flex-start" spacing={0} justifyContent="flex-end">
          <Text fontSize={14} letterSpacing={1}>CONCEPTO</Text>
          <Text fontSize={10} letterSpacing={1}>07/04/1993</Text>
        </Stack>
          </Stack>


          <Stack  alignItems="flex-end" spacing={0} paddingTop={2} justifyContent="flex-end" >
            <EditIcon w={3} h={3}/>
            <Text fontSize={14} letterSpacing={1}>+500</Text>
          </Stack>
        
        </Stack>

<Stack direction="row"  justifyContent="space-between" alignItems="center" paddingX={1} backgroundColor="movements" borderRadius="md" >


<Stack direction="row"  alignItems="center">
<AtSignIcon w={6} h={6} backgroundColor="black" color="black" borderRadius="100"/>
<Stack alignItems="center" spacing={0} justifyContent="flex-end">
<Text fontSize={18}>Concepto</Text>
<Text fontSize={14}>07/04/1993</Text>
</Stack>
</Stack>


<Stack  alignItems="flex-end" spacing={0} paddingTop={2} justifyContent="flex-end" >
  <EditIcon w={4} h={4}/>
  <Text fontSize={18}>+500</Text>
</Stack>

</Stack>

<Stack direction="row"  justifyContent="space-between" alignItems="center" paddingX={1} backgroundColor="movements" borderRadius="md" >


<Stack direction="row"  alignItems="center">
<AtSignIcon w={6} h={6} backgroundColor="black" color="black" borderRadius="100"/>
<Stack alignItems="center" spacing={0} justifyContent="flex-end">
<Text fontSize={18}>Concepto</Text>
<Text fontSize={14}>07/04/1993</Text>
</Stack>
</Stack>


<Stack  alignItems="flex-end" spacing={0} paddingTop={2} justifyContent="flex-end" >
  <EditIcon w={4} h={4}/>
  <Text fontSize={18}>+500</Text>
</Stack>

</Stack>

        

</Stack>

<IncomeModal isOpen={isOpenIncomeModal} onOpen={onOpenIncomeModal} onClose={onCloseIncomeModal}/>
<ExpenseModal isOpen={isOpenExpenseModal} onOpen={onOpenExpenseModal} onClose={onCloseExpenseModal}/>     

    </Container>
  )
}

export default App
