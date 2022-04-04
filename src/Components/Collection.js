import React from 'react'

export default function Collection() {
    return (
        <div>

            <section>
                <div className="container">
                    <div className="row h-100 g-0">
                        <div className="col-md-6">
                            <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                                <h4 className="text-800">Exclusive collection 2021</h4>
                                <h1 className="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Be exclusive</h1>
                                <p className="mb-5 fs-1">The best everyday option in a Super Saver range within a reasonable price. It is our responsibility&nbsp;to keep you 100 percent stylish. Be smart &amp; , trendy with us.</p>
                                <div className="d-grid gap-2 d-md-block"><a className="btn btn-lg btn-dark" href="#" role="button">Explore</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/outfit.png" alt="..." />
                                <div className="card-img-overlay bg-dark-gradient">
                                    <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Outfit<svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                                    </svg></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row h-100 g-2 py-1">
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/vanity-bag.png" alt="..." />
                                <div className="card-img-overlay bg-dark-gradient">
                                    <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Vanity Bags<svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                                    </svg></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/hat.png" alt="..." />
                                <div className="card-img-overlay bg-dark-gradient">
                                    <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">Hats<svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                                    </svg></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/high-heels.png" alt="..." />
                                <div className="card-img-overlay bg-dark-gradient">
                                    <div className="d-flex align-items-end justify-content-center h-100"><a className="btn btn-lg text-light fs-1" href="#!" role="button">High Heels<svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
                                    </svg></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* end of .container*/}
            </section>

            <section className="py-0">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-lg-7 mx-auto text-center mb-6">
                            <h5 className="fs-3 fs-lg-5 lh-sm mb-3">Checkout New Arrivals</h5>
                        </div>
                        <div className="col-12">
                            <div className="carousel slide" id="carouselNewArrivals" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval={10000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/full-body.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Flat Hill Slingback</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/formal-coat.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Ocean Blue Ring</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/ocean-blue.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Brown Leathered Wallet</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/sweater.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Silverside Wristwatch</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={5000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/full-body.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Flat Hill Slingback</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/formal-coat.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Ocean Blue Ring</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/ocean-blue.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Brown Leathered Wallet</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/sweater.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Silverside Wristwatch</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={3000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/full-body.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Flat Hill Slingback</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/formal-coat.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Ocean Blue Ring</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/ocean-blue.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Brown Leathered Wallet</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/sweater.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Silverside Wristwatch</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/full-body.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Flat Hill Slingback</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/formal-coat.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Ocean Blue Ring</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/ocean-blue.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Brown Leathered Wallet</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src="img/gallery/sweater.png" alt="..." />
                                                    <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                                                        <h6 className="text-primary">$175</h6>
                                                        <p className="text-400 fs-1">Jumper set for Women</p>
                                                        <h4 className="text-light">Silverside Wristwatch</h4>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"><button className="carousel-control-prev" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true" /><span className="visually-hidden">Previous</span></button><button className="carousel-control-next" type="button" data-bs-target="#carouselNewArrivals" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true" /><span className="visually-hidden">Next </span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
