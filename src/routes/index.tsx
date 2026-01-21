
import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '~/components/index/Navbar';

export default component$(() => {
  return (
 
 <div>
  <Navbar/>

  <section class="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div class="z-10">
          <h1 class="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-6">
            SMART <br/> <span class="text-green-600">GREENHOUSE</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-lg mb-10 leading-relaxed">
            Mustahkam profil va premium polikarbonatdan yig'ilgan, to'liq AI nazoratidagi modulli issiqxonalar.
          </p>
          <div class="flex gap-4">
            <button class="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl">
              Loyihani boshlash
            </button>
            <div class="flex items-center gap-3 text-gray-700 font-semibold px-6 cursor-pointer group">
              <span class="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 group-hover:border-green-500 transition-colors">▶</span>
              Video tahlil
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -top-20 -right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <img 
            src="https://m.media-amazon.com/images/I/91RSeLHOyFL._AC_SL1000__.jpg" 
            class="rounded-[3rem] shadow-2xl border-[16px] border-white relative z-10 transform hover:scale-[1.02] transition-transform duration-500" 
            alt="Smart Greenhouse" 
          />
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div class="max-w-2xl">
            <h2 class="text-4xl font-bold text-gray-900 mb-4 italic">Muhandislik va Materiallar</h2>
            <p class="text-gray-500 text-lg font-medium">Biz har bir bo'g'inni 120 km/soat shamol va 150 kg qor yukiga bardoshli qilib loyihalashtiramiz.</p>
          </div>
          <div class="text-green-600 font-black text-6xl opacity-10 hidden md:block">01 / HARDWARE</div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-green-100">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">🏗️</div>
            <h3 class="text-xl font-bold mb-3">Profil Karkas</h3>
            <p class="text-gray-600">Zangga chidamli, galvanizatsiyalangan profil. Payvandlashsiz, 100% boltli ulanish.</p>
          </div>
          <div class="p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-green-100">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">💎</div>
            <h3 class="text-xl font-bold mb-3">Polikarbonat</h3>
            <p class="text-gray-600">8-16 mm qalinlikdagi, ikki tomonlama UV himoyali premium qoplama. 10 yil kafolat.</p>
          </div>
          <div class="p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-green-100">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-6">⚙️</div>
            <h3 class="text-xl font-bold mb-3">Modulli Tizim</h3>
            <p class="text-gray-600">Issiqxonani istalgan vaqtda qismlarga ajratish, ko'chirish yoki kengaytirish imkoniyati.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="py-24 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold mb-6 italic">Biz Haqimizda</h2>
          <p class="text-gray-600 text-lg leading-relaxed">
            Bizning jamoa O'zbekiston iqlim sharoiti uchun maxsus moslashtirilgan, harorat keskin o'zgarganda ham barqaror hosil beruvchi smart-tizimlarni loyihalashtiradi. 
          </p>
        </div>
        <div class="md:w-1/2 grid grid-cols-2 gap-8">
          <div class="text-center p-8 bg-green-50 rounded-3xl">
             <div class="text-4xl font-black text-green-600">50+</div>
             <div class="text-gray-500 uppercase tracking-tighter text-sm">O'rnatilgan ob'ektlar</div>
          </div>
          <div class="text-center p-8 bg-green-50 rounded-3xl">
             <div class="text-4xl font-black text-green-600">24/7</div>
             <div class="text-gray-500 uppercase tracking-tighter text-sm">Texnik yordam</div>
          </div>
        </div>
      </div>
    </section>
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

