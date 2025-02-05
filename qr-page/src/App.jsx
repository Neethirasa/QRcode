import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-6 text-center">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-green-600">Discover Seed Paper</h1>
        <p className="text-gray-700 mt-2">Eco-friendly paper that grows into plants when planted in soil.</p>
      </header>
      
      <section className="bg-white shadow-md p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-green-500">How to Use Seed Paper</h2>
        <p className="text-gray-600 mt-2">
          1. Soak the seed paper in water for a few hours.<br />
          2. Plant it in a pot of soil or directly in the ground.<br />
          3. Water regularly and place in sunlight.<br />
          4. Watch your plants grow in a few weeks!
        </p>
      </section>
      
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-500">About Our Vendor</h2>
        <p className="text-gray-600 mt-2">
          We source our seed paper from sustainable vendors who ensure the highest quality eco-friendly materials.
          Our mission is to promote sustainability while offering unique, customizable paper products that leave
          a positive impact on the environment.
        </p>
      </section>
    </div>
  );
}

export default App;
