import {useEffect, useState} from "react";
import {
  Stack,
  Text,
  Container,
  Button,
  Heading,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import {AddIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import axios from "axios";

import IncomeModal from "./components/IncomeModal";
import ExpenseModal from "./components/ExpenseModal";
import MovementInfo from "./components/MovementInfo";
function App() {
  const [visibleNumbers, setVisibleNumbers] = useState(true);

  const [info, setInfo] = useState([]);
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
    const info = await axios.get("http://localhost:3001");
    const data = info.data;
    setInfo(data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Container
      backgroundColor="bgHome"
      height="100vh"
      justifyContent="center"
      maxWidth={{base: "100%", sm: "container.sm"}}
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
          <Stack
            backgroundColor="boxes"
            borderRadius="md"
            justifyContent="center"
            paddingX={2}
            paddingY={1}
          >
            <Heading fontSize={22}>Balance</Heading>
            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(false)} />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(true)} />
              </Stack>
            )}
          </Stack>

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
              <Heading fontSize={22}>Ingresos</Heading>
              <AddIcon cursor="pointer" h={3} w={3} onClick={onOpenIncomeModal} />
            </Stack>

            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(false)} />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(true)} />
              </Stack>
            )}
          </Stack>

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
              <Heading fontSize={22}>Gastos</Heading>
              <AddIcon cursor="pointer" h={3} w={3} onClick={onOpenExpenseModal} />
            </Stack>

            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(false)} />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon cursor="pointer" h={5} w={5} onClick={() => setVisibleNumbers(true)} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" paddingTop={4}>
        <Button colorScheme="whatsapp" fontSize={14} paddingY="-4" variant="outline">
          Filtros
        </Button>
        <Button colorScheme="whatsapp" fontSize={14} variant="outline">
          Ver todo
        </Button>
      </Stack>

      <Stack color="white" paddingTop={4}>
        {info.length &&
          info.map((element: any) => {
            return (
              <MovementInfo
                key={element.concept}
                amount={element.amount}
                concept={element.concept}
                date={element.date}
                type={element.type}
              />
            );
          })}
      </Stack>

      <IncomeModal
        isOpen={isOpenIncomeModal}
        onClose={onCloseIncomeModal}
        onOpen={onOpenIncomeModal}
      />
      <ExpenseModal
        isOpen={isOpenExpenseModal}
        onClose={onCloseExpenseModal}
        onOpen={onOpenExpenseModal}
      />
    </Container>
  );
}

export default App;
