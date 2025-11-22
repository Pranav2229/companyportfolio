import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './Component/LandingPages/Landing/Landing'
import About from './Component/AboutPage/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Public site routes */}
          <Route path="/companyportfolio/" element={<Landing />} />
          <Route path="/companyportfolio/about" element={<About />} />
          {/* <Route path="/shop/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* Dashboard / To-do list app routes (protected) */}
          {/* <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ProjectOverview />} />
            <Route path="tasks" element={<TaskList />} />
            <Route path="settings" element={<ProjectSettings />} />
          </Route> */}

          {/* Redirect or fallback */}
          {/* <Route path="*" element={<NotFound />} /> */}

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
