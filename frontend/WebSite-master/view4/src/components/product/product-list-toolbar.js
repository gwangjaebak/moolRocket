import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import ResponsiveDateRangePicker from 'src/icons/daterangepicker';
import RowRadioButtonsGroup from 'src/icons/options';

export const ProductListToolbar = (props) => {
  // const preventDefault = (event) => event.preventDefault();

  return (
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box 
            flexDirection= "row"
            sx={{ 
              maxWidth: 500
            }}>
            <ResponsiveDateRangePicker/>
            <RowRadioButtonsGroup/>
            <Box>
              <Link href="/lots" underline="hover" >
                <a>LOT 편성 관리표</a>
              </Link>
            </Box>

            <Box sx={{ m: 1 }}>
              <Button
                color="primary"
                variant="contained"
              >
                조회
              </Button>
              <Button
                color="primary"
                variant="contained"
              >
                취소
              </Button>
              <Button
                color="primary"
                variant="contained"
              >
                LOT 편성
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
);
}