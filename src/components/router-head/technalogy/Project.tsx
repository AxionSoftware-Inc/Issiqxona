import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="py-24 bg-white px-6">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div class="lg:w-1/2 order-2 lg:order-1">
          <div class="bg-gray-900 p-8 rounded-[2rem] shadow-2xl font-mono text-sm">
            <div class="text-green-500 mb-4 font-bold border-b border-gray-800 pb-2 italic">// AI_ALGORITHM_V2.0</div>
            <div class="space-y-2 text-gray-300">
              <p class="text-blue-400">if (soil_moisture {'<'} 45%) {'{'}</p>
              <p class="pl-4">activate_irrigation_system(duration: "15min");</p>
              <p class="pl-4 text-gray-500">// AI optimized water flow</p>
              <p class="text-blue-400">{'}'}</p>
              <p class="text-pink-400">analyze_plant_health(spectral_data);</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 order-1 lg:order-2">
          <h2 class="text-4xl font-bold mb-6">Sun'iy Intellekt Algoritmlari</h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Bizning dasturiy ta'minotimiz har 5 soniyada sensorlardan ma'lumot oladi. Machine Learning orqali o'simlikning keyingi 7 kunlik o'sish dinamikasini bashorat qiladi.
          </p>
          <ul class="space-y-4 font-semibold text-gray-800">
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-green-500 rounded-full"></span> Real-vaqtli Monitoring</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-green-500 rounded-full"></span> Avtonom Sug'orish</li>
            <li class="flex items-center gap-3"><span class="w-2 h-2 bg-green-500 rounded-full"></span> Energiyani Optimallashtirish</li>
          </ul>
        </div>
      </div>
    </section>
  );
});