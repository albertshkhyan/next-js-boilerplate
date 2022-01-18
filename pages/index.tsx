import type { NextPage } from 'next';

import Page from '../components/page';

const Home: NextPage = () => {
  return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
};

export default Home;
