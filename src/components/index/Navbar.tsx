import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-2xl font-bold text-green-700 italic">SmartGreen.AI</div>
        <div class="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="/" class="hover:text-green-600">Asosiy</a>
          <a href="/ai" class="hover:text-green-600">AI Tizimi</a>
          <a href="/technalogy" class="hover:text-green-600">Loyihalar</a>
          <a href="#about" class="hover:text-green-600">Biz haqimizda</a>
        </div>
        <button class="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Aloqa</button>
      </div>
    </nav>
  );
});