import PersonAddIcon from '@mui/icons-material/PersonAdd'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { useSetRecoilState } from 'recoil'
import { userListOpen } from '../../atoms/todoAtoms'

export const Header = () => {
  const setUserListOpen = useSetRecoilState(userListOpen)
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '2em',
  }
  return (
    <header style={headerStyle}>
      <Stack direction={'row'}>
        <h1 style={{ fontSize: '25px', margin: '0 auto', lineHeight: 'unset' }}>
          Simple Todo App
        </h1>
        <IconButton color="warning" onClick={() => setUserListOpen(true)}>
          <PersonAddIcon />
        </IconButton>
      </Stack>
      <p style={{ fontSize: '19px' }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}
