import Head from 'next/head'
import { Provider } from 'react-redux'
import {store} from "../../app/store";
import MainWindow from 'layouts/MainWindow/MainWindow';


export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Let&apos;s center a DIV</title>
        <meta name="description" content="Website about centering a div. endlessly..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainWindow />
    </Provider>
  )
}
