import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const specs = [
    { title: "8mm Multi-Wall", desc: "Issiqlik o'tkazuvchanligi past (K-value: 2.1), bu energiya sarfini 45% ga tejaydi.", icon: "💎" },
    { title: "Anodlangan Profil", desc: "AlMgSi alyuminiy qotishmasi — korroziyaga 30 yil kafolat bilan.", icon: "🛡️" },
    { title: "Smart Ventilation", desc: "AI sensorlar orqali avtomatik ochiluvchi motorli darchalar tizimi.", icon: "🌀" },
  ];

  return (
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-10">
          {specs.map((s) => (
            <div key={s.title} class="group bg-white p-10 rounded-3xl border border-gray-100 hover:bg-green-600 transition-all duration-500">
              <div class="text-5xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 class="text-2xl font-bold mb-4 group-hover:text-white">{s.title}</h3>
              <p class="text-gray-600 group-hover:text-green-50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});