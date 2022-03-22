import { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Container,
  Button,
  Heading,
  StackDivider,
  useDisclosure,
  Spinner,
  ButtonGroup
} from "@chakra-ui/react";
import { AddIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import axios from "axios";

import IncomeModal from "./components/IncomeModal";
import ExpenseModal from "./components/ExpenseModal";
import MovementInfo from "./components/MovementInfo";
function App() {
  const [visibleNumbers, setVisibleNumbers] = useState(false);

  const [originalInfo, setOriginalInfo] = useState([]);
  const [visibleInfo, setVisibleInfo] = useState([])
  const [accountBalance, setaccountBalance] = useState({
    balance: 0,
    incomes: 0,
    expenses: 0,
  })

  const [selectedMovement, setSelectedMovement] = useState({
    concept: "",
    date: "",
    amount: 0,
    type: "",
  });




  const {
    isOpen: isOpenIncomeModal,
    onOpen: onOpenIncomeModal,
    onClose: onCloseIncomeModal,
  } = useDisclosure();
  const {
    isOpen: isOpenExpenseModal,
    onOpen: onOpenExpenseModal,
    onClose: onCloseExpenseModal,
  } = useDisclosure();

  const getInfo = async () => {
    const info = await axios.get("https://pacific-lowlands-66049.herokuapp.com/");
    // const info = await axios.get("http://localhost:3001/");
    const data = info.data;
    setOriginalInfo(data);
    setVisibleInfo(data);
  };

  const calculateBalance = (arr: Array<any>) => {
    if (!arr.length) {
      return
    }


    const sumAmounts = (array: Array<any>) => {

      let result = array.reduce((a, b) => {
        return a + b.amount;
      }, 0)

      return result
    }


    let total: number = sumAmounts(arr)
    let incomes: number = sumAmounts(arr.filter(element => element.type === "income"))
    let expenses: number = sumAmounts(arr.filter(element => element.type === "expense"))
    setaccountBalance({
      balance: total,
      incomes: incomes,
      expenses: expenses,
    })
  }

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    calculateBalance(originalInfo)
    console.table(accountBalance)
  }, [originalInfo])

  let { balance, incomes, expenses } = accountBalance;
  let infoCards: Array<any> = [
    {
      header: "Balance",
      info: balance,
      add: false,
    },
    {
      header: "Ingresos",
      info: incomes,
      add: true,
      modal: onOpenIncomeModal,
    },
    {
      header: "Gastos",
      info: expenses,
      add: true,
      modal: onOpenExpenseModal,
    },
  ]

  const filterInfo = (arr: any, str: string) => {
    let result = arr.filter((element: { type: any; }) => {
      return element.type === str;
    })
    setVisibleInfo(result)
  }




  return (
    <Container
      backgroundColor="bgHome"
      height="100vh"
      justifyContent="center"
      maxWidth={{ base: "100%", sm: "container.sm" }}
      paddingTop={2}
    >
      <Stack divider={<StackDivider />}>
        <Stack
          alignItems="center"
          borderColor="boxesBorders"
          borderRadius="md"
          borderWidth={2}
          justifyContent="center"
          paddingY={2}
        >
          <Heading fontSize={26} letterSpacing={1}>
            Alkemy-Control
          </Heading>
        </Stack>
        <Stack color="white" letterSpacing={1}>
          {infoCards.map(element => {
            return (
              <Stack
                backgroundColor="boxes"
                borderRadius="md"
                justifyContent="center"
                paddingX={2}
                paddingY={1}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                  paddingRight={1}
                >
                  <Heading fontSize={22}>{element.header}</Heading>
                  {element.add ? <AddIcon cursor="pointer" h={3} w={3} onClick={element.modal} /> : null}

                </Stack>

                {visibleNumbers ? (
                  <Stack direction="row" justifyContent="space-between">
                    {element.info > 0 ? <Text fontSize={16}>${element.info}</Text> :
                      <Text fontSize={16}>${element.info * - 1}</Text>}

                    <ViewIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(false)} />
                  </Stack>
                ) : (
                  <Stack direction="row" justifyContent="space-between">
                    <Text fontSize={16}>*****</Text>
                    <ViewOffIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(true)} />
                  </Stack>
                )}
              </Stack>
            )
          })}


        </Stack>
      </Stack>

      <ButtonGroup flexDirection="row" justifyContent="center" width="full" paddingTop={4} gap={6}>

        <Button colorScheme="whatsapp" fontSize={14} variant="outline" _hover={{ backgroundColor: "green.200" }} onClick={() => {
          filterInfo(originalInfo, 'income')
        }}>
          Ingresos
        </Button>
        <Button colorScheme="whatsapp" fontSize={14} variant="outline" onClick={() => {
          setVisibleInfo(originalInfo)
        }}>
          Ver todo
        </Button>
        <Button colorScheme="whatsapp" fontSize={14} variant="outline" _hover={{ backgroundColor: "pink.200" }}
          onClick={() => {
            filterInfo(originalInfo, 'expense')
          }}

        >
          Gastos
        </Button>

      </ButtonGroup>

      {visibleInfo.length ? <Stack color="white" paddingTop={4}>
        {
          visibleInfo.map((element: any) => {
            let modal;
            element.type === "income" ? modal = onOpenIncomeModal : modal = onOpenExpenseModal
            return (
              <MovementInfo
                key={element.concept}
                amount={element.amount}
                concept={element.concept}
                date={element.date}
                type={element.type}
                modal={modal}
                stateManager={setSelectedMovement}
              />
            );
          })}
      </Stack> : <Stack justifyContent="center" paddingTop={10} alignItems="center"><Spinner color={"green.500"} size="xl" /> </Stack>}





      <IncomeModal
        isOpen={isOpenIncomeModal}
        onClose={onCloseIncomeModal}
        onOpen={onOpenIncomeModal}
        item={selectedMovement}
        stateManager={setSelectedMovement}
      />
      <ExpenseModal
        isOpen={isOpenExpenseModal}
        onClose={onCloseExpenseModal}
        onOpen={onOpenExpenseModal}
        item={selectedMovement}
        stateManager={setSelectedMovement}
      />
    </Container>
  );
}

export default App;
