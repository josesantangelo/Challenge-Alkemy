import { Stack, Text } from "@chakra-ui/react";
import { AtSignIcon, EditIcon } from "@chakra-ui/icons";

interface Movement {
  concept: string;
  date: string;
  amount: number;
  type: string;
}

const MovementInfo: React.VFC<Movement> = ({ concept, date, amount, type }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingX={1}
      backgroundColor={type}
      borderRadius="md"
    >
      <Stack direction="row" alignItems="center">
        <AtSignIcon
          w={6}
          h={6}
          backgroundColor="black"
          color="black"
          borderRadius="100"
        />
        <Stack alignItems="flex-start" spacing={0} justifyContent="flex-end">
          <Text fontSize={14}>{concept}</Text>
          <Text fontSize={10}> {date}</Text>
        </Stack>
      </Stack>

      <Stack
        alignItems="flex-end"
        spacing={0}
        paddingTop={2}
        justifyContent="flex-end"
      >
        <EditIcon w={3} h={3} />
        <Text fontSize={14}>{amount}</Text>
      </Stack>
    </Stack>
  );
};

export default MovementInfo;
