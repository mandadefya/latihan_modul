import React from 'react';
import { Outlet } from 'react-router-dom';  // penting!
import Footer from '../components/GuestFooter';
import Header from '../components/GuestHeader';
import HeaderBottom from '../components/HeaderBottom';
import Hero from '../components/GuestHero';

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeaderBottom />
      <Hero />
      <Outlet /> 
      <Footer />
    </div>
  );
}
