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


export const ProductListResults = ({ products, ...rest }) => {
  const [selectedProductsSns, setSelectedProductsSns] = useState([]);

  const handleSelectAll = (event) => {
    let newSelectedProductsSns;

    if (event.target.checked) {
      newSelectedProductsSns = products.map((product) => product.PRODUCT_SN);
    } else {
      newSelectedProductsSns = [];
    }

    setSelectedProductsSns(newSelectedProductsSns);
  };

  const handleSelectOne = (event, PRODUCT_SN) => {
    const selectedIndex = selectedProductsSns.indexOf(PRODUCT_SN);
    let newSelectedProductsSns = [];

    if (selectedIndex === -1) {
      newSelectedProductsSns = newSelectedProductsSns.concat(selectedProductsSns, PRODUCT_SN);
    } else if (selectedIndex === 0) {
      newSelectedProductsSns = newSelectedProductsSns.concat(selectedProductsSns.slice(1));
    } else if (selectedIndex === selectedProductsSns.length - 1) {
      newSelectedProductsSns = newSelectedProductsSns.concat(selectedProductsSns.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedProductsSns = newSelectedProductsSns.concat(
        selectedProductsSns.slice(0, selectedIndex),
        selectedProductsSns.slice(selectedIndex + 1)
      );
      console.log(newSelectedProductsSns)
    }

    setSelectedProductsSns(newSelectedProductsSns);
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
                    checked={selectedProductsSns.length === products.length}
                    color="primary"
                    indeterminate={
                      selectedProductsSns.length > 0
                      && selectedProductsSns.length < products.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  입찰대상편성일자
                </TableCell>
                <TableCell>
                  제품번호
                  
                </TableCell>
                <TableCell>
                  중량
                </TableCell>
                <TableCell>
                  화주
                </TableCell>
                <TableCell>
                  고객사
                </TableCell>
                <TableCell>
                  출발지
                </TableCell>
                <TableCell>
                  목적지
                </TableCell>
                <TableCell>
                  목적지 상세주소
                </TableCell>
                <TableCell>
                  취소
                </TableCell>
                <TableCell>
                  도착여부
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  hover
                  key={product.PRODUCT_SN}
                  selected={selectedProductsSns.indexOf(product.PRODUCT_SN) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedProductsSns.indexOf(product.PRODUCT_SN) !== -1}
                      onChange={(event) => handleSelectOne(event, product.PRODUCT_SN)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {((product.PRODUCT_REGDATE).split('T'))[0]}
                  </TableCell>
                  <TableCell>
                    {product.PRODUCT_NAME}
                  </TableCell>
                  <TableCell>
                    {product.PRODUCT_WEIGHT}
                  </TableCell>
                  <TableCell>
                    {product.SHIPPER_COMPANY_NAME}
                  </TableCell>
                  <TableCell>
                    {product.GUEST_COMPANY_NAME}
                  </TableCell>
                  <TableCell>
                    {product.START_CITY_NAME}
                  </TableCell>
                  <TableCell>
                    {product.DESTINATION_CITY_NAME}
                  </TableCell>
                  <TableCell>
                    {product.PRODUCT_ARRIVE}
                  </TableCell>
                  <TableCell>
                    {product.PRODUCT_ISCANCEL}
                  </TableCell>
                  <TableCell>
                    {product.PRODUCT_ARRIVE}
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

ProductListResults.propTypes = {
  products: PropTypes.array.isRequired
};

