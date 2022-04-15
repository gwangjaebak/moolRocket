import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

import { ProductListResults } from '../components/product/product-list-results';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
// import products from '../__mocks__/products.json';
import axios from 'axios';

const Products = ({products}) => (
  <>
    <Head>
      <title>
        Product | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ mt: 3 }}>
          <ProductListResults products={products} />
        </Box>
      </Container>
    </Box>
  </>
);

Products.getInitialProps = async ctx => {
  const {data} = await axios.get(
    "http://localhost:8080/v1/product?startDate=2020-10-20&endDate=2022-04-01&iscancel=0")
    return {products: data};
}

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;