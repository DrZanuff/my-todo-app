import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import { blue } from '@mui/material/colors'
import { UserBadgeProps } from './UserBadge.types'

export const UserBadge = ({ user, isLast = false }: UserBadgeProps) => {
  return (
    <ListItem key={user.id} sx={{ gap: '20px' }}>
      <Stack sx={{ width: '100%' }}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '10px' }}>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            {user.name[0].toUpperCase()}
          </Avatar>
          {user.name}
        </Stack>
        {!isLast && <Divider sx={{ mt: '10px' }} />}
      </Stack>
    </ListItem>
  )
}
