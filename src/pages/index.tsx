import Head from 'next/head'
import DivObject from 'components/DivObject/DivObject'
import { Provider } from 'react-redux'
import {store} from "../../app/store";
import DivButton from 'components/DivButton/DivButton';
import ProgressBar from 'components/ProgressBar/ProgressBar';

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Let&apos;s center a DIV</title>
        <meta name="description" content="Website about centering a div. endlessly..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <DivObject/>
      <ProgressBar />
      <DivButton />
    </Provider>
  )
}
