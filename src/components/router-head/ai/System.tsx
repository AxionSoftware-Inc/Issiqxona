import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section id="ai" class="py-20 bg-gray-900 text-white rounded-[3rem] mx-4 md:mx-10 my-10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">Sun'iy Intellekt Boshqaruvi</h2>
          <p class="text-gray-400 text-lg mb-8">Bizning AI tizimimiz sensorlar orqali namlik, harorat va o'simlik holatini tahlil qiladi.</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span class="block text-green-500 font-bold text-2xl">98%</span>
              <span class="text-sm text-gray-400">Aniq bashorat</span>
            </div>
            <div class="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span class="block text-green-500 font-bold text-2xl">30%</span>
              <span class="text-sm text-gray-400">Suv tejamkorligi</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-800 border border-gray-700 p-6 rounded-3xl shadow-2xl">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div class="space-y-4 font-mono text-sm text-green-400">
            <p>{`> Initializing sensors... OK`}</p>
            <p>{`> Analyzing soil humidity: 64%`}</p>
            <p>{`> AI Recommendation: Open roof for 10 min`}</p>
            <div class="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div class="bg-green-500 h-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});