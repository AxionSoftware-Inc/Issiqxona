import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const items = [
    { title: "Polikarbonat", desc: "Issiqlikni saqlaydi va UV nurlaridan himoya qiladi." },
    { title: "Profil Karkas", desc: "Zangga chidamli po'latdan mustahkam konstruksiya." },
    { title: "Modulli Tizim", desc: "Istalgan o'lchamda kengaytirish imkoniyati." }
  ];
  return (
    <section class="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {items.map(item => (
        <div key={item.title} class="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:shadow-xl transition-all">
          <h3 class="text-2xl font-bold mb-4 text-green-800">{item.title}</h3>
          <p class="text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </section>
  );
});