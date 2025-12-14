import React from 'react';
import craftsmanship from '../assets/craftmanship.png';
import dance from '../assets/dance.jpg';
import jewelry from '../assets/jewelary.jpg';
import music from '../assets/music.png';

export default function Data() {
return (
<div className="relative bg-white">
  <div
    className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Tribal Heritage & Culture
      </h2>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Discover the rich cultural heritage and traditions of indigenous tribes. Each tribe carries centuries of wisdom,
        unique customs, and deep connection with nature that has shaped their identity and way of life.
      </p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Population</dt>
          <dd className="mt-2 text-sm text-gray-600">Over 104 million indigenous people across India</dd>
        </div>
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Languages</dt>
          <dd className="mt-2 text-sm text-gray-600">700+ distinct tribal languages and dialects</dd>
        </div>
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Regions</dt>
          <dd className="mt-2 text-sm text-gray-600">Found across forests, hills, and coastal areas</dd>
        </div>
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Art Forms</dt>
          <dd className="mt-2 text-sm text-gray-600">Traditional painting, weaving, and craftsmanship</dd>
        </div>
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Traditions</dt>
          <dd className="mt-2 text-sm text-gray-600">Unique festivals, rituals, and cultural practices</dd>
        </div>
        <div
          className="border-t border-gray-300 pt-4 transform transition-all duration-500 hover:scale-105 hover:border-amber-600">
          <dt className="font-semibold text-gray-900">Heritage</dt>
          <dd className="mt-2 text-sm text-gray-600">Ancient wisdom passed through generations</dd>
        </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src={craftsmanship} alt="Traditional tribal art and craftsmanship"
        className="rounded-lg bg-gray-100 transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl object-cover h-full" />
      <img src={dance} alt="Tribal dance and cultural festival"
        className="rounded-lg bg-gray-100 transform transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl object-cover h-full" />
      <img src={jewelry} alt="Traditional tribal clothing and jewelry"
        className="rounded-lg bg-gray-100 transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl object-cover h-full" />
      <img src={music} alt="Tribal musical instruments and traditions"
        className="rounded-lg bg-gray-100 transform transition-all duration-500 hover:scale-105 hover:-rotate-2 hover:shadow-2xl object-cover h-full" />
    </div>
  </div>
</div>
);
}