import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { LotListResults } from '../components/lot/lot-list-results';
import { LotListToolbar } from '../components/lot/lot-list-toolbar';
import axios from 'axios';
// import lots from '../__mocks__/lots.json';

const Lots = ({lots}) => (
  <>
    <Head>
      <title>
        LOT | Material Kit
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
        <LotListToolbar />
        <Box sx={{ mt: 3 }}>
          <LotListResults lots={lots} />
        </Box>
      </Container>
    </Box>
  </>
);


Lots.getInitialProps = async ctx => {
  const {data} = await axios.get(
    "http://localhost:8080/v1/lot?startDate=2021-10-10&endDate=2022-10-10&iscancel=0")
    return {lots: data};
}


Lots.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Lots;