import React, { Component } from 'react';
import './Err404.css';


class Err404 extends Component {
    render() {
        return (
            <>
                <div className="err-404">
                    <div className="noise"></div>
                    <div className="overlay"></div>
                    <div className="terminal">
                        <h1>Error <span className="errorcode">404</span></h1>
                        <p className="output">The page you are looking for might have been removed, had its name changed or
                        is temporarily unavailable.</p>
                        <p className="output">Please Head Back to <a href="/">Home</a></p>
                        <p className="output">Good luck.</p>
                    </div>
                </div>


            </>

        );
    }
}

export default Err404;


