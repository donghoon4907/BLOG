import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class DocumentComponent extends Document {
  static async getInitialProps(context: any) {
    // styled-components ssr set up
    const sheet = new ServerStyleSheet();

    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }
}
