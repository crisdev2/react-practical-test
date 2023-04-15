import styled from '@emotion/styled'
import { FC, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { IBank } from '../../../models/bankModel'
import { Alert, Button } from '@mui/material'
import BanksTable from './BanksTable'
import Icon from '../../other/Icon'
import BanksGrid from './BanksGrid'
import BanksSkeleton from './BanksSkeleton'

const StyledButton = styled(Button)`
  margin-bottom: 15px;
  margin-right: 10px;
`

const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledAlert = styled(Alert)`
  margin-bottom: 15px;
`

const Banks: FC = () => {
  const { loaded, requestTime, ...fetch } = useFetch('catom/api/challenge/banks')
  const data: IBank[] = fetch.data || []
  const [viewList, setViewList] = useState(true)
  return (
    <>
      <ViewHeader>
        <StyledButton color="success" variant="contained" onClick={() => localStorage.clear()}>
          <Icon>restart_alt</Icon>&nbsp;Refresh local storage
        </StyledButton>
        {
          <div>
            <StyledButton
              color={viewList ? "inherit" : "success"}
              variant={viewList ? "text" : "outlined"}
              onClick={() => setViewList(false)}
            >
              <Icon>grid_view</Icon>&nbsp;Grid view
            </StyledButton>
            <StyledButton
              color={!viewList ? "inherit" : "success"}
              variant={!viewList ? "text" : "outlined"}
              onClick={() => setViewList(true)}
            >
              <Icon>view_list</Icon>&nbsp;List view
            </StyledButton>
          </div>
        }
      </ViewHeader>
      {loaded ? 
        <>
          {requestTime ?
            <StyledAlert variant="outlined" color="success">
              Data downloaded from API in <strong>~{requestTime}</strong> seconds.
            </StyledAlert>
            :
            <StyledAlert variant="outlined" color="info">
              Data obtained from local storage.
            </StyledAlert>
          }
          {viewList ?
            <BanksTable data={data} />
            :
            <BanksGrid data={data} />
          }
        </>
        :
        <BanksSkeleton />
      }
    </>
  )
}

export default Banks