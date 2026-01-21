import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (

    <section class="py-24 bg-gray-900 rounded-[4rem] mx-4 md:mx-10 my-10 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1 relative">
           {/* Mock App UI */}
           <div class="bg-gray-800 rounded-3xl p-6 border border-white/10 shadow-3xl">
              <div class="flex justify-between items-center mb-8">
                 <h4 class="font-mono text-green-400">#GREENHOUSE_STATUS</h4>
                 <div class="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div class="space-y-6">
                 <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-gray-400">Harorat:</span>
                    <span class="font-bold">24.5°C</span>
                 </div>
                 <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-gray-400">Namlik:</span>
                    <span class="font-bold">62%</span>
                 </div>
                 <div class="p-4 bg-green-900/20 rounded-xl text-green-400 text-sm italic border border-green-500/20">
                    "AI: Optimal sharoit aniqlandi. Sug'orish keyinga qoldirildi."
                 </div>
              </div>
           </div>
        </div>
        <div class="order-1 lg:order-2">
          <h2 class="text-5xl font-bold mb-8 italic">Aqlli Monitoring</h2>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            Bizning datchiklarimiz tuproqdan tortib, havo tarkibidagi CO2 miqdorigacha nazorat qiladi. Telegram bot orqali har daqiqa hisobot oling.
          </p>
          <ul class="space-y-4 font-semibold text-green-500">
            <li>✓ Avtomatik tomchilatib sug'orish</li>
            <li>✓ Avtonom ventilyatsiya tizimi</li>
            <li>✓ Kasalliklarni erta aniqlash AI moduli</li>
          </ul>
        </div>
      </div>
    </section>
  );
});