import React from 'react';

const Main = () => {
    return (
        <div className='my-5 d-flex justify-content-around'>
            <div>
                <h2>Далеко-далеко</h2>

                <div className="card img">
                    <img src="https://t4.ftcdn.net/jpg/03/14/28/43/360_F_314284363_5BOhmmlrpeTUVtNCw7xbKaUjChtaarBV.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div>
                <h2>Близко-близко</h2>

                <div className="card img">
                    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2020-12-16/files/macro-photography-composition-tips_2098-t.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div></div>
        </div>
    );
};

export default Main;