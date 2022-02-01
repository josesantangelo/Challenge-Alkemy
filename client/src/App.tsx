import {
  Stack,
  Text,
  Container,
  Button,
  Heading,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import IncomeModal from "./components/IncomeModal";
import ExpenseModal from "./components/ExpenseModal";
import MovementInfo from "./components/MovementInfo";
import axios, { Axios } from "axios";

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
    let info = await axios.get("http://localhost:3001");
    let data = info.data;
    setInfo(data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Container
      maxWidth={{ base: "100%", sm: "container.sm" }}
      height="100vh"
      justifyContent="center"
      paddingTop={2}
      backgroundColor="bgHome"
    >
      <Stack divider={<StackDivider />}>
        <Stack
          alignItems="center"
          justifyContent="center"
          paddingY={2}
          borderRadius="md"
          borderWidth={2}
          borderColor="boxesBorders"
        >
          <Heading fontSize={26} letterSpacing={1}>
            Alkemy-Control
          </Heading>
        </Stack>

        <Stack color="white" letterSpacing={1}>
          <Stack
            justifyContent="center"
            paddingX={2}
            paddingY={1}
            backgroundColor="boxes"
            borderRadius="md"
          >
            <Heading fontSize={22}>Balance</Heading>
            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(false)}
                  w={5}
                  h={5}
                />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(true)}
                  w={5}
                  h={5}
                />
              </Stack>
            )}
          </Stack>

          <Stack
            justifyContent="center"
            paddingX={2}
            paddingY={1}
            backgroundColor="boxes"
            borderRadius="md"
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              paddingRight={1}
            >
              <Heading fontSize={22}>Ingresos</Heading>
              <AddIcon
                cursor="pointer"
                w={3}
                h={3}
                onClick={onOpenIncomeModal}
              />
            </Stack>

            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(false)}
                  w={5}
                  h={5}
                />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(true)}
                  w={5}
                  h={5}
                />
              </Stack>
            )}
          </Stack>

          <Stack
            justifyContent="center"
            paddingX={2}
            paddingY={1}
            backgroundColor="boxes"
            borderRadius="md"
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              paddingRight={1}
            >
              <Heading fontSize={22}>Gastos</Heading>
              <AddIcon
                cursor="pointer"
                w={3}
                h={3}
                onClick={onOpenExpenseModal}
              />
            </Stack>

            {visibleNumbers ? (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>$1234</Text>
                <ViewIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(false)}
                  w={5}
                  h={5}
                />
              </Stack>
            ) : (
              <Stack direction="row" justifyContent="space-between">
                <Text fontSize={16}>*****</Text>
                <ViewOffIcon
                  cursor="pointer"
                  onClick={() => setVisibleNumbers(true)}
                  w={5}
                  h={5}
                />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" paddingTop={4}>
        <Button
          fontSize={14}
          paddingY="-4"
          colorScheme="whatsapp"
          variant="outline"
        >
          Filtros
        </Button>
        <Button fontSize={14} colorScheme="whatsapp" variant="outline">
          Ver todo
        </Button>
      </Stack>

      <Stack color="white" paddingTop={4}>
        {info.length &&
          info.map((element: any) => (
            <MovementInfo
              concept={element.concept}
              date={element.date}
              amount={element.amount}
              type={element.type}
            />
          ))}
      </Stack>

      <IncomeModal
        isOpen={isOpenIncomeModal}
        onOpen={onOpenIncomeModal}
        onClose={onCloseIncomeModal}
      />
      <ExpenseModal
        isOpen={isOpenExpenseModal}
        onOpen={onOpenExpenseModal}
        onClose={onCloseExpenseModal}
      />
    </Container>
  );
}

export default App;
