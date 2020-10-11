import Typography from '@material-ui/core/Typography'
import withTheme from '@material-ui/styles/withTheme'
import React from 'react'

export const SectionTitle = withTheme(({ children, theme }) => {
  return (
    <Typography
      style={{ color: theme.palette.primary.main, fontWeight: 600 }}
    >
      {children}
    </Typography>
  )
})
