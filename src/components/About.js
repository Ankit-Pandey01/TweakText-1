import React from 'react';

export default function About() {
    const myStyle = {
        color: '#042743',
        backgroundColor: 'white'
    };

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About TextUtils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free online tool that helps you analyze and manipulate your text.
                            It provides various functionalities to make working with text easier and more efficient.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils offers a range of features, including:
                            <ul>
                                <li>Convert text to uppercase</li>
                                <li>Convert text to lowercase</li>
                                <li>Remove extra spaces</li>
                                <li>Count characters</li>
                                <li>Count words</li>
                            </ul>
                            We are continuously working to add more features to enhance your text editing experience.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Free to Use
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a completely free tool. You can use all the features without any cost or limitations.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}