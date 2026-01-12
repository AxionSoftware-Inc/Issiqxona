import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="pt-32 pb-20 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            AI Integratsiyali <span class="text-green-600">Smart</span> Issiqxonalar
          </h1>
          <p class="mt-6 text-xl text-gray-600">Polikarbonat va profildan yig'ilgan, to'liq avtomatlashgan kelajak fermasi.</p>
        </div>
        <div class="flex-1 bg-green-100 rounded-[2rem] p-4 shadow-2xl">
           <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800" class="rounded-[1.5rem]" alt="Hero" />
        </div>
      </div>
    </section>
  );
});