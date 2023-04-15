import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import { IBank } from '../../../models/bankModel'

const BanksTable: FC<Props> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link component="button" onClick={() => {}}>
                  {row.bankName}
                </Link>
              </TableCell>
              <TableCell>
                {row.description}
              </TableCell>
              <TableCell>
                <img
                  alt="Banco"
                  height="50"
                  src={row.url}
                />
              </TableCell>
              <TableCell>
                {row.age}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

interface Props {
  data: IBank[]
}

export default BanksTable