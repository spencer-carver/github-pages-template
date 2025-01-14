import React from "react";
import Head from "next/head";

export default function Custom404({ title: errorMessage = "Not Found", statusCode = 404, nestedError = false }) {
    return (
        <>
            <Head>
                <title>{ `${ statusCode } - ${ errorMessage }` }</title>
            </Head>
            <div>
                <span>
                    :(
                </span>
                <h2>{ statusCode }</h2>
                <div>
                    <h3>{ errorMessage }</h3>
                </div>
            </div>
        </>
    );
}
