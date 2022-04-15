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

export const LotListToolbar = (props) =>{ 
  
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
              <Link href="/products" underline="hover">
                <a>전체 리스트 관리표</a>
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
                저장
              </Button>
              <Button
                color="primary"
                variant="contained"
              >
                취소
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
);
}