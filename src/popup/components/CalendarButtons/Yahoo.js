import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

export default () => (
  <Button
    style={{
      textTransform: 'none',
      width: 160,
      textAlign: 'left',
      color: '#333'
    }}
    startIcon={
      <SvgIcon
        width="18"
        height="11"
        viewBox="0 0 18 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.499 2.71887C14.058 2.84012 10.0286 6.02285 9.76251 6.80452C9.70479 7.07365 9.76883 9.68965 9.82745 10.0819C10.0926 10.1425 12.0099 10.0901 12.3616 10.1498L12.3193 10.9581C11.9747 10.9306 9.53885 10.937 8.14911 10.937C7.44296 10.937 5.173 11.0169 4.47497 10.9967L4.60664 10.227C4.98903 10.1976 6.57267 10.2986 6.91989 9.92204C7.09214 9.73465 7.03803 7.24909 6.97941 6.8284C6.83331 6.37832 3.30167 1.87106 2.37818 1.13347H0V0H8.02194V0.0780756C8.02916 0.0780756 8.04179 0.0789942 8.049 0.0808313L8.02194 0.271887V1.13256H5.60319C6.6809 2.73908 8.22757 4.67811 8.88592 5.60859L12.1172 2.62702H10.1963L9.92575 1.49538H16.9611L16.9088 1.57529L16.934 1.57713L16.4317 2.31931C16.4262 2.31956 16.4207 2.32048 16.4155 2.32206L16.2125 2.62702H14.9148C14.747 2.66376 14.5991 2.69774 14.499 2.71887ZM16.7942 9.81549L16.1738 9.78426L15.4802 9.69791L15.4865 10.9076L16.0331 10.9554L16.622 10.9995L16.7942 9.81457V9.81549ZM18 4.03146C17.7908 4.02411 15.8852 3.8404 15.6372 3.7908L15.666 8.90154L16.7446 8.99064L18 4.03146Z"
          fill="#333333"
        />
      </SvgIcon>
    }
  >
    Yahoo Calendar
  </Button>
)
