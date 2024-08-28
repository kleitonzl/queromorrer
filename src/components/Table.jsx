import React from 'react'
import { TableContainer, Thead,Tr,Th  } from '../styles/Table'


const Table = () => {
  return (
    <TableContainer>
        <Thead>
            <Tr>
                <Th>Titulo</Th>
                <Th>Autor(a)</Th>
                <Th>Editora</Th>
            </Tr>
        </Thead>
        <Tbody>
            
        </Tbody>
    </TableContainer>
  )
}

export default Table
