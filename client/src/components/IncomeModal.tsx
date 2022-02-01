import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, StackDivider, Text, useDisclosure, } from '@chakra-ui/react'
import {useFormik, FormikProps, Formik } from 'formik'
import React, { useEffect, useState } from 'react'


interface Props {
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}


  const IncomeModal:React.VFC<Props> = ({isOpen,onOpen,onClose}) => {


    
  let categorys:string[];
  categorys = ["Sueldo", "Pasivos", "Aguinaldo", "Otros"]
    return (
        <>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="full" >
            <ModalOverlay/>

                  
                      <ModalContent maxWidth={{base: "100%", sm:"container.md"}} height="80%">
                        <ModalHeader marginTop={5} textAlign="center">Nuevo ingreso</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody>



       
                            
                          <Stack  spacing={8}>
                          <FormControl>
                          <FormLabel textAlign="left">Concepto</FormLabel>
                          <Input type="text" size="xs" name='concept'/>
                      </FormControl>
                      <FormControl>
                          <FormLabel textAlign="left">Fecha</FormLabel>
                          <Input type="date" size="xs" name='date'/>
                      </FormControl>
                      <FormControl>
                          <FormLabel textAlign="left">Total</FormLabel>
                          <Input type="number" size="xs" name='total'/>
                      </FormControl>
                      <FormControl>
                          <FormLabel textAlign="left">Categoria</FormLabel>
                          <Select size="xs" name='category'>
                            {categorys.map(element => <option value={element} key={element}>{element}</option>)}
                          </Select>
                      </FormControl>
                      </Stack>
                        
            
  </ModalBody>
    
              <ModalFooter justifyContent="space-around" paddingLeft={8}>
                <Button colorScheme='green' variant="outline" mr={3} onClick={onClose}>
                  Salir
                </Button>
                <Button colorScheme='green' mr={3} onClick={onClose} type="submit">
                  Guardar
                </Button>
              </ModalFooter>
            </ModalContent>

                    

   
         
                
                  

          </Modal>
        </>
      )
  }

  export default IncomeModal;