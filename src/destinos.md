---
layout: base.njk
title: "Nossos Destinos"
fullWidth: true
---

<section class="destination-list">
  {% for destino in collections.destinos %}
  <a href="{{ destino.url }}" class="destination-card">
    <img src="{{ destino.data.image }}" alt="{{ destino.data.title }}" class="destination-card__img">
    <div class="destination-card__overlay">
      <div class="destination-card__content">
        <span class="destination-card__info">{{ destino.data.location }}</span>
        <h2 class="destination-card__title">{{ destino.data.title }}</h2>
        <p class="destination-card__info">{{ destino.data.description }}</p>
      </div>
    </div>
  </a>
  {% endfor %}
</section>
