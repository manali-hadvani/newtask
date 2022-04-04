import React from 'react'

export default function Header() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
                <div className="container"><a className="navbar-brand d-inline-flex" href="index-2.html"><img className="d-inline-block" src="img/gallery/logo.png" alt="logo" /><span className="text-1000 fs-0 fw-bold ms-2">Majestic</span></a><button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2"><a className="nav-link fw-medium active" aria-current="page" href="#categoryWomen">Women</a></li>
                            <li className="nav-item px-2"><a className="nav-link fw-medium" href="#header">Men</a></li>
                            <li className="nav-item px-2"><a className="nav-link fw-medium" href="#collection">Collection</a></li>
                            <li className="nav-item px-2"><a className="nav-link fw-medium" href="#outlet">Outlet</a></li>
                        </ul>
                        <form className="d-flex"><a className="text-1000" href="#!"><svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg></a><a className="text-1000" href="#!"> <svg className="feather feather-shopping-cart me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <circle cx={9} cy={21} r={1} />
                            <circle cx={20} cy={21} r={1} />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg></a><a className="text-1000" href="#!"> <svg className="feather feather-search me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg></a><a className="text-1000" href="#!"> <svg className="feather feather-user me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx={12} cy={7} r={4} />
                        </svg></a><a className="text-1000" href="#!"> <svg className="feather feather-heart me-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg></a></form>
                    </div>
                </div>
            </nav>

            <section className="py-11 bg-light-gradient border-bottom border-white border-5">
                <div className="bg-holder overlay overlay-light" style={{ backgroundImage: 'url(img/gallery/header-bg.png)', backgroundSize: 'cover' }} />
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row flex-center">
                        <div className="col-12 mb-10">
                            <div className="d-flex align-items-center flex-column">
                                <h1 className="fw-normal"> With an outstanding style, only for you</h1>
                                <h1 className="fs-4 fs-lg-8 fs-md-6 fw-bold">Exclusively designed for you</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-0" id="header" style={{ marginTop: '-23rem !important' }}>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card card-span h-100 text-white"> <img className="img-fluid" src="img/gallery/her.png" width={790} alt="..." />
                                <div className="card-img-overlay d-flex flex-center"> <a className="btn btn-lg btn-light" href="#!">For Her</a></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-span h-100 text-white"> <img className="img-fluid" src="img/gallery/him.png" width={790} alt="..." />
                                <div className="card-img-overlay d-flex flex-center"> <a className="btn btn-lg btn-light" href="#!">For Him </a></div>
                            </div>
                        </div>
                    </div>
                </div>{/* end of .container*/}
            </section>

            <section className="py-0">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
                            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
                        </div>
                        <div className="col-12">
                            <div className="carousel slide" id="carouselBestDeals" data-bs-touch="false" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval={10000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/flat-hill.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/blue-ring.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wallet.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wrist-watch.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={5000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/flat-hill.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/blue-ring.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wallet.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wrist-watch.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval={3000}>
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/flat-hill.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/blue-ring.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wallet.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wrist-watch.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row h-100 align-items-center g-2">
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/flat-hill.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Flat Hill Slingback</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/blue-ring.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Ocean Blue Ring</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wallet.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Brown Leathered Wallet</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                                <div className="card card-span h-100 text-white"><img className="img-fluid h-100" src="img/gallery/wrist-watch.png" alt="..." />
                                                    <div className="card-img-overlay ps-0"> </div>
                                                    <div className="card-body ps-0 bg-200">
                                                        <h5 className="fw-bold text-1000 text-truncate">Silverside Wristwatch</h5>
                                                        <div className="fw-bold"><span className="text-600 me-2 text-decoration-line-through">$200</span><span className="text-primary">$175</span></div>
                                                    </div><a className="stretched-link" href="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"><button className="carousel-control-prev" type="button" data-bs-target="#carouselBestDeals" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true" /><span className="visually-hidden">Previous</span></button><button className="carousel-control-next" type="button" data-bs-target="#carouselBestDeals" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true" /><span className="visually-hidden">Next </span></button></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5"> <a className="btn btn-lg btn-dark" href="#!">View All </a></div>
                    </div>
                </div>{/* end of .container*/}
            </section>


        </div>
    )
}
