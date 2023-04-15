import styled from '@emotion/styled'
import { Grid, Skeleton } from '@mui/material'
import { FC } from 'react'

const StyledBanksSkeleton = styled.div`
`

const BanksSkeleton: FC = () => {
  return (
    <StyledBanksSkeleton>
      <Grid container spacing={5}>
        {[...Array(6)].map((item, index) => (
          <Grid item key={index} sm={6}>
            <Skeleton variant="rounded" width="100%" height={120}>
            </Skeleton>
          </Grid>
        ))}
      </Grid>
    </StyledBanksSkeleton>
  )
}

export default BanksSkeleton