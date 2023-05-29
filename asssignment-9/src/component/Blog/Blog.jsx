import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl text-center mb-8">Blog</h1>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Welcome to Our Blog</h2>
        <p className="text-gray-700 mb-6">
          At Backspace, we strive to provide you with valuable insights and
          information through our blog. Our team of industry experts is
          passionate about sharing their knowledge and expertise with you.
        </p>
        <p className="text-gray-700 mb-6">
          Explore our collection of articles covering a wide range of topics,
          including career advice, industry trends, and personal development.
          We aim to empower you with the knowledge and resources you need to
          succeed in your professional journey.
        </p>
        <p className="text-gray-700 mb-6">
          Join our community and stay up-to-date with the latest blog posts by
          subscribing to our newsletter. We appreciate your support and hope you
          find our blog helpful and inspiring.
        </p>
      </div>
    </div>
  );
};

export default Blog;

