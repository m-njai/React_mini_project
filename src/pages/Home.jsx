import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Our Makeup Store</h1>
        <p className="lead">Discover the best makeup products for you.</p>
        <hr className="my-4" />
        <p>Find the perfect makeup products that suit your style.</p>
        <a className="btn btn-primary btn-lg" href="/products" role="button">Shop Now</a>
      </div>
    </div>
  );
}

export default Home;
