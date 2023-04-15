import { ThemeProvider } from '@mui/material'
import { customTheme } from './utilities/theme'
import 'normalize.css'
import UserLayout from './components/layout'
import { FC } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Provider } from 'react-redux'
import { store } from './utilities/store'

const App: FC<Props> = (props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <UserLayout>
            {props.children}
          </UserLayout>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  )
}

interface Props {
  children?: React.ReactNode | string
}

export default App
