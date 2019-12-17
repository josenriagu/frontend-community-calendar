import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

import { reduxStore } from '../redux';

export default withRedux(reduxStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, context }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(context)
            : {}),
        },
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  },
);
