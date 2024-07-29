'use client'

import React, { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Spinner from '@/baseComponent/Spinner';
import { AnimatePresence } from 'framer-motion';


import 'react-toastify/dist/ReactToastify.css';

import "swiper/css/bundle";

import '@/styles/css/main.css';
import '@/styles/sass/App.scss';



 
export default function WorkClientComponent({
  children,
}: {
  children: React.ReactNode
}) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
      }, []);
  

  return (
    <>
      <AnimatePresence >
        <Suspense fallback={<Spinner />}>
          {children}
          <ToastContainer />
        </Suspense>
      </AnimatePresence>
    </>
  )
}