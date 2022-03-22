import {
  Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack
} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  item?: any,
  stateManager: (obj: any) => void;
}

const postMovement = async (state: any) => {
  try {
    await axios.post('http://localhost:3001/', state)
    alert('exito!')
  }
  catch (error) {
    alert(error)
  }
}


const IncomeModal: React.VFC<Props> = ({ isOpen, onOpen, onClose, item, stateManager }) => {
  let categorys: string[];
  categorys = ["Sueldo", "Pasivos", "Aguinaldo", "Otros"]
  const [modifiedMovement, setModifiedMovement] = useState({
    concept: "",
    date: "",
    amount: 0,
    type: "income",
  })

  useEffect(() => {
    item.type ? setModifiedMovement(item) : null
  }, [isOpen])

  useEffect(() => {
    console.log(modifiedMovement)
  }, [modifiedMovement])


  let customDate = item.date.replaceAll('/', '-').split('-').reverse()
  customDate[1] = `0${customDate[1]}`
  customDate[2] = `0${customDate[2]}`
  customDate = customDate.join('-')



  return (
    <>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={() => {
        stateManager({
          concept: "",
          date: "",
          amount: 0,
          type: "",
        });
        setModifiedMovement({
          concept: "",
          date: "",
          amount: 0,
          type: "income",
        })
        onClose();
      }} isCentered size="full" >
        <ModalOverlay />


        <ModalContent maxWidth={{ base: "100%", sm: "container.md" }} height="80%">
          <ModalHeader marginTop={5} textAlign="center">{item.concept ? "Modificar ingreso" : "Nuevo ingreso"}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>





            <Stack spacing={8}>
              <FormControl isRequired>
                <FormLabel textAlign="left">Concepto</FormLabel>
                <Input type="text" size="xs" name='concept' defaultValue={item.concept} onChange={(e) => {
                  setModifiedMovement({
                    ...modifiedMovement,
                    concept: e.target.value
                  })
                }} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel textAlign="left">Fecha</FormLabel>
                <Input type="date" size="xs" name='date' defaultValue={customDate} onChange={(e) => {
                  setModifiedMovement({
                    ...modifiedMovement,
                    date: e.target.value
                  })
                }} isRequired={true} />

              </FormControl>
              <FormControl isRequired>
                <FormLabel textAlign="left">Total</FormLabel>
                <Input type="number" size="xs" name='total' defaultValue={item.amount !== 0 ? item.amount : null} onChange={(e) => {
                  setModifiedMovement({
                    ...modifiedMovement,
                    amount: Number(e.target.value)
                  })
                }} isRequired={true} />
              </FormControl>
              {/* <FormControl>
                <FormLabel textAlign="left">Categoria</FormLabel>
                <Select size="xs" name='category'>
                  {categorys.map(element => <option value={element} key={element}>{element}</option>)}
                </Select>
              </FormControl> */}
            </Stack>


          </ModalBody>

          <ModalFooter justifyContent="space-around" paddingLeft={8}>
            <Button colorScheme='green' variant="outline" mr={3} onClick={() => {
              stateManager({
                concept: "",
                date: "",
                amount: 0,
                type: "",
              });
              setModifiedMovement({
                concept: "",
                date: "",
                amount: 0,
                type: "income",
              })
              onClose();
            }}>
              Salir
            </Button>
            <Button colorScheme='green' mr={3} onClick={() => {
              postMovement(modifiedMovement);
              onClose();
            }} type="submit"
              isDisabled={modifiedMovement.concept.length && modifiedMovement.date.length && modifiedMovement.amount ? false : true}>
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>








      </Modal>
    </>
  )
}

export default IncomeModal;