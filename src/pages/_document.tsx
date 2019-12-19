import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import 'normalize.css'
import '@atlaskit/css-reset';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="author" content="Bruno Edoh" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}


export default MyDocument;
