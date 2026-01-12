import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="py-20 bg-green-900 text-white rounded-[4rem] mx-4 mb-10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
        <div class="md:w-1/2">
          <h2 class="text-4xl font-bold mb-6">Nega bizning muhandislik?</h2>
          <p class="text-green-100 text-lg opacity-80 leading-relaxed italic">
            "Biz shunchaki metal yig'maymiz. Biz har bir issiqxonani alohida jonli organizm deb hisoblaymiz va unga eng zamonaviy 'miya' — AI ni o'rnatamiz."
          </p>
          <div class="mt-10 flex gap-10">
            <div><div class="text-3xl font-bold">150+</div><div class="text-sm opacity-60 uppercase tracking-widest">Sensorlar</div></div>
            <div><div class="text-3xl font-bold">24/7</div><div class="text-sm opacity-60 uppercase tracking-widest">Nazorat</div></div>
          </div>
        </div>
        <div class="md:w-1/2 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
          <h4 class="text-xl font-bold mb-4 underline decoration-green-500 underline-offset-8">Sifat Nazorati</h4>
          <p class="text-green-50">Har bir profil 5 bosqichli testdan o'tadi va AI tizimi yuklanishdan oldin 48 soat davomida simulyatsiya qilinadi.</p>
        </div>
      </div>
    </section>
  );
});