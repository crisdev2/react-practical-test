import { Box, Card, CardContent, CardMedia, CardMediaProps, CardMediaTypeMap, Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { IBank } from '../../../models/bankModel'
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: space-between;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`

const StyledCardMedia = styled(CardMedia)`
  max-width: 50%;
`

const BanksGrid: FC<Props> = ({ data }) => {
  return (
    <Grid container spacing={6}>
      {data.map((row, index) => (
        <Grid item sm={6} key={index} width="100%">
          <StyledCard>
            <StyledBox>
              <CardContent >
                <Typography component="div" variant="h5">
                  {row.bankName}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {row.description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  <strong>Age: {row.age}</strong> 
                </Typography>
              </CardContent>
            </StyledBox>
            <StyledCardMedia
              // @ts-ignore
              component="img"
              sx={{ height: 150 }}
              image={row.url}
              alt="Live from space album cover"
            />
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  )
}

interface Props {
  data: IBank[]
}

export default BanksGrid