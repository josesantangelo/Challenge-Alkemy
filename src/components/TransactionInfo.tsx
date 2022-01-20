import React from 'react'
import { Stack, StackDivider, Text} from '@chakra-ui/react'

interface Props {
    concept?:string;
    amount?:number;
    date?:string;
    type?:string;
}


const TransactionInfo:React.VFC<Props> = (props) => {

    return (
        <Stack  justifyContent="center" alignItems="center" paddingY={2} marginLeft={2} spacing={2} backgroundColor="gray.500" width="90%" borderRadius="md">

            
            <Text width="90%" fontSize={14} textAlign="center" backgroundColor="whiteAlpha.800" borderRadius="md">Concepto : {props.concept}</Text>
            <Text width="90%" fontSize={14} textAlign="center" backgroundColor="whiteAlpha.800" borderRadius="md">Monto : ${props.amount}</Text>
            <Text width="90%" fontSize={14} textAlign="center" backgroundColor="whiteAlpha.800" borderRadius="md">Fecha : {props.date}</Text>
            <Text width="90%" fontSize={14} textAlign="center" backgroundColor="whiteAlpha.800" borderRadius="md">Tipo : {
                props.type === 'income' ? "Entrada de dinero" : "Salida de dinero"
            }</Text>
            
        </Stack>
        

    )
}

export default TransactionInfo;