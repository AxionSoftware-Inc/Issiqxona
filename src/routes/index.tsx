import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '~/components/index/Navbar';

export default component$(() => {
  return (
 
 <div>
  <Navbar/>
 </div>
  );
});

    

export const head: DocumentHead = {
  title: "Welcome to Qwik", 
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
