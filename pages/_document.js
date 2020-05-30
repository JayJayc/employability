import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* import local css for #zmmtg-root */}
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="node_modules/@zoomus/websdk/dist/css/bootstrap.css"
                    />
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="node_modules/@zoomus/websdk/dist/css/react-select.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/react.min.js"></script>
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/react-dom.min.js"></script>
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/redux.min.js"></script>
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/redux-thunk.min.js"></script>
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/jquery.min.js"></script>
                    <script src="https://source.zoom.us/1.7.2/lib/vendor/lodash.min.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
