import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="about" class="py-20 px-6 max-w-7xl mx-auto border-t">
      <div class="flex flex-col md:flex-row gap-20">
        <div class="md:w-1/3">
          <h2 class="text-4xl font-bold mb-6 italic">Biz haqimizda</h2>
          <p class="text-gray-600 italic">Biz O'zbekistonda dehqonchilikni raqamlashtirishni maqsad qilgan muhandislar jamoasimiz.</p>
        </div>
        <div id="projects" class="md:w-2/3">
          <h2 class="text-4xl font-bold mb-10">Amaldagi Loyihalar</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="group relative overflow-hidden rounded-2xl h-60 bg-gray-200">
               <div class="absolute inset-0 bg-black/40 flex items-end p-6">
                  <span class="text-white font-bold">Buxoro Modulli Issiqxona #01</span>
               </div>
            </div>
            <div class="group relative overflow-hidden rounded-2xl h-60 bg-gray-300">
               <div class="absolute inset-0 bg-black/40 flex items-end p-6">
                  <span class="text-white font-bold">Toshkent AI Monitoring Lab</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});