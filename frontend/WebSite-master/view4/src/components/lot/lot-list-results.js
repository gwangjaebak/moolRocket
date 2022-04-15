import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';


export const LotListResults = ({ lots, ...rest }) => {
  const [selectedLotsSns, setSelectedLotsSns] = useState([]);

  const handleSelectAll = (event) => {
    let newSelectedLotsSns;

    if (event.target.checked) {
      newSelectedLotsSns = lots.data.map((lot) => lot.LOT_SN);
    } else {
      newSelectedLotsSns = [];
    }

    setSelectedLotsSns(newSelectedLotsSns);
  };

  const handleSelectOne = (event, LOT_SN) => {
    const selectedIndex = selectedLotsSns.indexOf(LOT_SN);
    let newSelectedLotsSns = [];

    if (selectedIndex === -1) {
      newSelectedLotsSns = newSelectedLotsSns.concat(selectedLotsSns, LOT_SN);
    } else if (selectedIndex === 0) {
      newSelectedLotsSns = newSelectedLotsSns.concat(selectedLotsSns.slice(1));
    } else if (selectedIndex === selectedLotsSns.length - 1) {
      newSelectedLotsSns = newSelectedLotsSns.concat(selectedLotsSns.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedLotsSns = newSelectedLotsSns.concat(
        selectedLotsSns.slice(0, selectedIndex),
        selectedLotsSns.slice(selectedIndex + 1)
      );
      console.log(newSelectedLotsSns)
    }

    setSelectedLotsSns(newSelectedLotsSns);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedLotsSns.length === lots.length}
                    color="primary"
                    indeterminate={
                      selectedLotsSns.length > 0
                      && selectedLotsSns.length < lots.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  LOT편성일자
                </TableCell>
                <TableCell>
                  LOT번호
                </TableCell>
                <TableCell>
                  총 중량
                </TableCell>
                <TableCell>
                  제품수
                </TableCell>
                <TableCell>
                  고객사
                </TableCell>
                <TableCell>
                  출발지
                </TableCell>
                <TableCell>
                  출발지 상세주소
                </TableCell>
                <TableCell>
                  목적지
                </TableCell>
                <TableCell>
                  목적지 상세주소
                </TableCell>
                <TableCell>
                  취소여부
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lots.data.map((lot) => (
                <TableRow
                  hover
                  key={lot.LOT_SN}
                  selected={selectedLotsSns.indexOf(lot.LOT_SN) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedLotsSns.indexOf(lot.LOT_SN) !== -1}
                      onChange={(event) => handleSelectOne(event, lot.LOT_SN)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {((lot.LOT_REGDATE).split('T'))[0]}
                  </TableCell>
                  <TableCell>
                    ## LOT 번호
                  </TableCell>
                  <TableCell>
                    ## LOT 총 중량 (계산?)
                  </TableCell>
                  <TableCell>
                    ## 제품수 (계산?)
                  </TableCell>
                  <TableCell>
                    {lot.GUEST_COMPANY}
                  </TableCell>
                  <TableCell>
                    {lot.START_CITY}
                  </TableCell>
                  <TableCell>
                    {lot.LOT_START_DTL}
                  </TableCell>
                  <TableCell>
                    {lot.DESTINATION_CITY}
                  </TableCell>
                  <TableCell>
                    {lot.LOT_DETINATION_DTL}
                  </TableCell>
                  <TableCell>
                    {lot.LOT_ISCANCEL}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

LotListResults.propTypes = {
  lots: PropTypes.array.isRequired
};

