import { component$ } from '@builder.io/qwik';
import Navbar from '~/components/index/Navbar';
import About from '~/components/router-head/ai/About';
import Features from '~/components/router-head/ai/Features';
import Hero from '~/components/router-head/ai/Hero';
import System from '~/components/router-head/ai/System';


export default component$(() => {
  return (
    <>
      <Navbar/>            

      <Hero/>

      <System/>

      <Features />

      <About/>

    </>
  );
});