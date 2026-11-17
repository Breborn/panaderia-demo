/**
 * PAN • PANADERÍA Y BOLLERÍA DE MASA MADRE
 * Interactive Application Engine: Video Hero, Lead Hero Slider, Digital Menu & WhatsApp Checkout
 * Developed by Breborn.cl
 */

// Teléfono oficial para pedidos WhatsApp (+56 9 9185 9762 - PAN)
const WHATSAPP_PHONE = '56991859762';
const DELIVERY_FEE = 2500;

// Estado Global
const AppState = {
  cart: [],
  selectedMode: 'retiro-barros-arana', // 'retiro-barros-arana' | 'retiro-esmeralda' | 'delivery'
  selectedFilter: 'all',
  currentSlide: 0
};

// Catálogo Completo de Productos (PAN)
const PRODUCTS = [
  // 1. Buns & Potato Rolls (Línea Hamburgueserías)
  {
    id: 'buns-not-martins',
    name: 'Not Martins • Potato Rolls (Pack 4x)',
    category: 'buns',
    categoryName: 'Línea Hamburgueserías',
    tag: 'Hit Smash Burgers',
    weight: 'Pack 4 un. (340g)',
    price: 4500,
    desc: 'El preferido de las mejores smash burgers. Creado para sostener los jugos de la carne sin perder esponjosidad. Brillo mantequilla y semilla de sésamo.',
    image: 'assets/images/buns_hamburguesa.jpg'
  },
  {
    id: 'buns-classic-brioche',
    name: 'Classic Brioche Burger Buns (Pack 4x)',
    category: 'buns',
    categoryName: 'Línea Hamburgueserías',
    tag: '100% Mantequilla',
    weight: 'Pack 4 un. (360g)',
    price: 4200,
    desc: 'Pan brioche francés tradicional con mantequilla pura de vaca y huevo de campo. Dorado acaramelado con textura nube resistente a salsas intensas.',
    image: 'assets/images/buns_hamburguesa.jpg'
  },
  {
    id: 'buns-dark-brioche',
    name: 'Dark Brioche Black Buns (Pack 4x)',
    category: 'buns',
    categoryName: 'Línea Hamburgueserías',
    tag: 'Edición Negra Gourmet',
    weight: 'Pack 4 un. (360g)',
    price: 4800,
    desc: 'Pan brioche negro natural teñido con carbón activado vegetal y cacao amargo. Visualmente impresionante y con sabor sutilmente tostado.',
    image: 'assets/images/buns_hamburguesa.jpg'
  },
  {
    id: 'buns-vegan-sourdough',
    name: 'Vegan Potato Buns de Masa Madre (Pack 4x)',
    category: 'buns',
    categoryName: 'Línea Hamburgueserías',
    tag: '100% Plant-Based',
    weight: 'Pack 4 un. (340g)',
    price: 4400,
    desc: 'Versión vegana con aceite de oliva extra virgen y puré de papa natural fermentado con masa madre. Sin lácteos ni huevos, ultra suave.',
    image: 'assets/images/buns_hamburguesa.jpg'
  },

  // 2. Hogazas de Masa Madre (PAN)
  {
    id: 'hogaza-campesina',
    name: 'Hogaza Tradicional Campesina (1kg)',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Favorito • 36h Fermentación',
    weight: 'Hogaza 1kg',
    price: 5500,
    desc: '100% harina de trigo no blanqueada de molino a piedra, agua pura, sal de Cahuil y cultivo vivo. Miga abierta, húmeda y acidez láctica suave.',
    image: 'assets/images/hero_hogaza.jpg'
  },
  {
    id: 'hogaza-esculpida-botanica',
    name: 'Hogaza Esculpida • Arte Botánico',
    category: 'hogazas',
    categoryName: 'Edición Especial',
    tag: 'Greña de Autor',
    weight: 'Hogaza 950g',
    price: 6400,
    desc: 'Grabada a mano alzada con navajas UFO antes de entrar al horno de piedra. Espigas y hojas doradas crujientes sobre miga esponjosa.',
    image: 'assets/images/sourdough_scoring.jpg'
  },
  {
    id: 'hogaza-multisemillas',
    name: 'Hogaza Multisemillas & Centeno (1kg)',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Nutritivo • 48h Fermentación',
    weight: 'Hogaza 1kg',
    price: 6200,
    desc: 'Masa madre de centeno integral con mix tostado de semillas de zapallo, girasol, sésamo negro y linaza dorada. Textura densa y aromática.',
    image: 'assets/images/hogaza_semillas.jpg'
  },
  {
    id: 'hogaza-aceitunas-romero',
    name: 'Hogaza Aceitunas de Huasco & Romero',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Especialidad Salada',
    weight: 'Hogaza 900g',
    price: 6400,
    desc: 'Hidratación al 80% con aceitunas sevillanas y kalamata marinadas en aceite de oliva virgen extra y romero recién cortado.',
    image: 'assets/images/focaccia_baguettes.jpg'
  },
  {
    id: 'hogaza-nuez-chocolate',
    name: 'Hogaza Nuez & Chocolate Bitter 70%',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Gourmet • Para la Once',
    weight: 'Hogaza 850g',
    price: 6800,
    desc: 'Insuperable para el desayuno o la merienda: masa madre rústica con nueces chilenas tostadas y trozos de chocolate amargo belga 70%.',
    image: 'assets/images/hero_hogaza.jpg'
  },

  // 3. Focaccias & Baguettes
  {
    id: 'baguette-tradicional',
    name: 'Baguette Rústica Tradicional',
    category: 'focaccias',
    categoryName: 'Panadería Francesa',
    tag: 'Clásico París • 24h',
    weight: 'Pieza 300g',
    price: 2200,
    desc: 'Elaborada bajo el método poolish con 24 horas de reposo. Piel fina que cruje al partirla y miga crema con grandes ojos irregulares.',
    image: 'assets/images/baguettes_basket.jpg'
  },
  {
    id: 'focaccia-pomodoro',
    name: 'Focaccia Pomodoro, Albahaca & Flor de Sal',
    category: 'focaccias',
    categoryName: 'Focaccias a la Piedra',
    tag: 'Crocante & Aireada',
    weight: 'Porción 350g',
    price: 4200,
    desc: 'Alta hidratación al 85%, aceite de oliva virgen extra de primer prensado en frío, tomates cherry confitados, albahaca y flor de sal.',
    image: 'assets/images/focaccia_baguettes.jpg'
  },
  {
    id: 'focaccia-cebolla-cabra',
    name: 'Focaccia Cebolla Caramelizada & Cabra',
    category: 'focaccias',
    categoryName: 'Focaccias a la Piedra',
    tag: 'Especialidad Salada',
    weight: 'Porción 350g',
    price: 4600,
    desc: 'Masa madre con oliva EVOO, cebollas moradas lentamente confitadas al tomillo fresco y medallones de queso de cabra artesanal.',
    image: 'assets/images/focaccia_baguettes.jpg'
  },
  {
    id: 'pan-molde-brioche',
    name: 'Pan de Molde Brioche Artesanal',
    category: 'focaccias',
    categoryName: 'Panes de Mesa',
    tag: 'Desayuno Perfecto',
    weight: 'Molde 700g',
    price: 5200,
    desc: 'Miga aterciopelada y esponjosa, enriquecida con mantequilla de campo y huevos de gallina libre. Ideal para tostadas gourmet o french toast.',
    image: 'assets/images/hero_hogaza.jpg'
  },

  // 4. Bollería Hojaldrada & Dulces Artesanales
  {
    id: 'croissant-clasico',
    name: 'Croissant Francés 100% Mantequilla',
    category: 'bolleria',
    categoryName: 'Bollería Artesanal Quilpué',
    tag: '100% Mantequilla Pura',
    weight: 'Unidad 120g',
    price: 2400,
    desc: 'Hojaldre francés tradicional de masa madre con 27 capas doradas y crocantes, con interior suave y sedoso de elaboración propia.',
    image: 'assets/images/croissants_bolleria.jpg'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat Callebaut',
    category: 'bolleria',
    categoryName: 'Hojaldre de Masa Madre',
    tag: 'Chocolate Belga 54%',
    weight: 'Unidad 130g',
    price: 2800,
    desc: 'Croissant hojaldrado relleno con dos barras de chocolate belga semi-amargo Callebaut 54%. Horneado a punto cada mañana.',
    image: 'assets/images/croissants_bolleria.jpg'
  },
  {
    id: 'cinnamon-roll-brioche',
    name: 'Cinnamon Roll Brioche de Masa Madre',
    category: 'bolleria',
    categoryName: 'Bollería Artesanal',
    tag: 'Recién Horneado',
    weight: 'Unidad 150g',
    price: 2900,
    desc: 'Masa brioche enriquecida con masa madre viva, canela de Ceilán, azúcar morena y glaseado de queso crema y vainilla natural.',
    image: 'assets/images/cinnamon_babka.jpg'
  },
  {
    id: 'babka-chocolate-avellanas',
    name: 'Babka de Chocolate & Avellanas Tostadas',
    category: 'bolleria',
    categoryName: 'Bollería Artesanal',
    tag: 'Para Compartir',
    weight: 'Pieza 450g',
    price: 6900,
    desc: 'Pan dulce trenzado artesanal con masa brioche de masa madre, generosos remolinos de ganache de chocolate amargo y avellanas crocantes.',
    image: 'assets/images/cinnamon_babka.jpg'
  },

  // 5. Pan de Pascua & Especiales de Temporada (Fotografías de Estudio Distintas)
  {
    id: 'pan-de-pascua-chocolate',
    name: 'Pan de Pascua de Masa Madre • Chips de Chocolate',
    category: 'pascua',
    categoryName: 'Especiales de Temporada',
    tag: 'Edición Especial Chocolate',
    weight: 'Unidad 750g',
    price: 8900,
    desc: 'Elaborado con masa madre viva de fermentación lenta 36h, abundante chocolate bitter al 60% en chips y textura ultra suave y húmeda con aroma a miel y mantequilla.',
    image: 'assets/images/pan_pascua_chocolate_artesanal.jpg'
  },
  {
    id: 'pan-de-pascua-tradicional',
    name: 'Pan de Pascua Artesanal • Nueces & Almendras',
    category: 'pascua',
    categoryName: 'Especiales de Temporada',
    tag: 'Clásico Navideño Tradicional',
    weight: 'Unidad 750g',
    price: 8900,
    desc: 'Receta tradicional con masa madre: coronado con nueces chilenas tostadas, almendras enteras, canela de Ceilán, clavo de olor y toque de licor añejo.',
    image: 'assets/images/pan_pascua_tradicional_artesanal.jpg'
  },
  // 6. Muffins Artesanales de Autor (Recién Horneados)
  {
    id: 'muffin-chocolate-belga',
    name: 'Muffin de Chocolate Belga & Doble Chips',
    category: 'muffins',
    categoryName: 'Muffins Artesanales',
    tag: 'Doble Cacao & Chips 60%',
    weight: 'Unidad 150g',
    price: 2800,
    desc: 'Muffin artesanal horneado a diario con puro cacao holandés, domo alto y húmedo coronado con abundante lluvia de chips de chocolate semi-amargo.',
    image: 'assets/images/muffin_chocolate_artesanal.jpg'
  },
  {
    id: 'muffin-arandano-silvestre',
    name: 'Muffin de Arándanos Silvestres & Crumble',
    category: 'muffins',
    categoryName: 'Muffins Artesanales',
    tag: 'Arándano Fresco & Crumble',
    weight: 'Unidad 150g',
    price: 2800,
    desc: 'Masa esponjosa y húmeda con vainilla natural y generosos arándanos frescos que estallan al hornearse, terminado con un crocante streusel de mantequilla.',
    image: 'assets/images/muffin_arandano_artesanal.jpg'
  }
];

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCategoryFilters();
  initLeadHeroSlider();
  initCartDrawer();
  initModePills();
  initMobileMenu();
  loadCartFromStorage();
  updateCartUI();
});

/**
 * 1. Lead Hero Background Slider (Ken Burns + Smooth Crossfade)
 * Cycles high-definition bakery & burger bun photography one after another.
 */
function initLeadHeroSlider() {
  const slides = document.querySelectorAll('.lead-bg-slide');
  const prevBtn = document.getElementById('leadPrevBtn');
  const nextBtn = document.getElementById('leadNextBtn');
  const dotsContainer = document.getElementById('leadSliderDots');
  const heroSlider = document.querySelector('.lead-hero-slider');

  if (!slides || slides.length === 0) return;

  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoTimer = null;

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from({ length: totalSlides }).map((_, i) => 
      `<button class="lead-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Foto ${i + 1} de ${totalSlides}"></button>`
    ).join('');

    const dots = dotsContainer.querySelectorAll('.lead-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        goToSlide(idx);
        restartTimer();
      });
    });
  }

  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Toggle active class on background slides
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    // Toggle active class on dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.lead-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, 5500); // 5.5s per photo for relaxed visual enjoyment
  }

  function restartTimer() {
    if (autoTimer) clearInterval(autoTimer);
    startTimer();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
      restartTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
      restartTimer();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
    if (e.key === 'ArrowLeft') {
      prevSlide();
      restartTimer();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      restartTimer();
    }
  });

  // Pause on hover
  if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => {
      if (autoTimer) clearInterval(autoTimer);
    });
    heroSlider.addEventListener('mouseleave', () => {
      startTimer();
    });

    // Touch Swipe for Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    heroSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    heroSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          nextSlide(); // Swipe left -> next photo
        } else {
          prevSlide(); // Swipe right -> prev photo
        }
        restartTimer();
      }
    }, { passive: true });
  }

  // Initial timer start
  startTimer();
}

/**
 * 2. Render de Productos de la Carta Digital 
 */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = AppState.selectedFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === AppState.selectedFilter);

  grid.innerHTML = filtered.map(product => {
    const inCartItem = AppState.cart.find(item => item.id === product.id);
    const qty = inCartItem ? inCartItem.qty : 0;

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <span class="product-tag">${product.tag}</span>
          <span class="product-weight-badge">${product.weight}</span>
        </div>
        <div class="product-content">
          <span class="product-category-name">${product.categoryName}</span>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          <div class="product-card-footer">
            <span class="product-price">$${formatNumber(product.price)}</span>
            <button class="product-add-btn" onclick="addToCart('${product.id}')" aria-label="Agregar ${product.name} a la canasta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <span>${qty > 0 ? `Agregar (${qty})` : 'Agregar'}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 3. Filtros de Categorías
 */
function initCategoryFilters() {
  const buttons = document.querySelectorAll('.cat-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      AppState.selectedFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });
}

/**
 * 4. Gestión del Carrito (Agregar, Restar, Eliminar)
 */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: product.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
  showToast(`🥖 "${product.name}" agregado a tu canasta`);
}

function updateItemQty(productId, change) {
  const itemIndex = AppState.cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  AppState.cart[itemIndex].qty += change;

  if (AppState.cart[itemIndex].qty <= 0) {
    AppState.cart.splice(itemIndex, 1);
  }

  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
  renderProducts();
}

/**
 * 5. Actualización Visual del Carrito & Drawer
 */
function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const isDelivery = AppState.selectedMode === 'delivery';
  const deliveryFee = isDelivery ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + deliveryFee;

  // Header Cart Button
  const cartCountEl = document.getElementById('cartCount');
  const cartTotalHeaderEl = document.getElementById('cartTotalHeader');
  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (cartTotalHeaderEl) cartTotalHeaderEl.textContent = `$${formatNumber(grandTotal)}`;

  // Sticky Mobile Bar
  const mobileBar = document.getElementById('mobileStickyCart');
  const mobileBarCount = document.getElementById('mobileBarCount');
  const mobileBarItemsText = document.getElementById('mobileBarItemsText');
  const mobileBarTotal = document.getElementById('mobileBarTotal');
  if (mobileBar) {
    if (totalCount > 0) {
      mobileBar.style.display = 'block';
      if (mobileBarCount) mobileBarCount.textContent = totalCount;
      if (mobileBarItemsText) mobileBarItemsText.textContent = `${totalCount} ${totalCount === 1 ? 'pan' : 'delicias'}`;
      if (mobileBarTotal) mobileBarTotal.textContent = `$${formatNumber(grandTotal)}`;
    } else {
      mobileBar.style.display = 'none';
    }
  }

  // Drawer Totals
  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryTotal = document.getElementById('summaryTotal');
  const deliveryFeeLine = document.getElementById('deliveryFeeLine');
  const addressGroup = document.getElementById('addressGroup');

  if (summarySubtotal) summarySubtotal.textContent = `$${formatNumber(subtotal)}`;
  if (summaryTotal) summaryTotal.textContent = `$${formatNumber(grandTotal)}`;

  if (deliveryFeeLine) {
    deliveryFeeLine.style.display = isDelivery ? 'flex' : 'none';
  }
  if (addressGroup) {
    addressGroup.style.display = isDelivery ? 'flex' : 'none';
  }

  renderDrawerItems();
}

function renderDrawerItems() {
  const itemsContainer = document.getElementById('cartItemsBody');
  const drawerFooter = document.getElementById('drawerFooter');
  if (!itemsContainer) return;

  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-icon">🥖</div>
        <h4>Tu canasta está vacía</h4>
        <p>Aún no has agregado panes de masa madre, buns ni bollería.</p>
        <button class="btn-start-shopping" onclick="closeCartDrawer(); window.location.hash = '#pedir';">
          Explorar la Carta
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = 'none';
    return;
  }

  if (drawerFooter) drawerFooter.style.display = 'block';

  itemsContainer.innerHTML = AppState.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <span class="cart-item-unit-price">${item.weight} • $${formatNumber(item.price)} c/u</span>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)" aria-label="Disminuir">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div class="cart-item-subtotal">
        $${formatNumber(item.price * item.qty)}
      </div>
      <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Eliminar del pedido">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `).join('');
}

/**
 * 6. Drawer Controls (Abrir, Cerrar)
 */
function initCartDrawer() {
  const openBtn = document.getElementById('openCartBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartBackdrop');
  const mobileBarBtn = document.getElementById('mobileCartBarBtn');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppOrderBtn');

  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);
  if (mobileBarBtn) mobileBarBtn.addEventListener('click', openCartDrawer);
  if (sendWhatsAppBtn) sendWhatsAppBtn.addEventListener('click', sendWhatsAppOrder);
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  }
  if (backdrop) {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
  if (backdrop) {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

/**
 * 7. Selección de Modo de Retiro / Despacho
 */
function initModePills() {
  const pills = document.querySelectorAll('.mode-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      AppState.selectedMode = pill.getAttribute('data-mode');
      updateCartUI();
    });
  });
}

function selectPickupBranch(branchName) {
  if (branchName.includes('Barros Arana') || branchName.includes('Quilpué')) {
    AppState.selectedMode = 'retiro-barros-arana';
    const pill = document.getElementById('modeBarrosAranaBtn');
    if (pill) {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
  } else if (branchName.includes('Esmeralda') || branchName.includes('Valparaíso')) {
    AppState.selectedMode = 'retiro-esmeralda';
    const pill = document.getElementById('modeEsmeraldaBtn');
    if (pill) {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
  }
  updateCartUI();
  openCartDrawer();
}

/**
 * 8. Envío del Pedido a WhatsApp
 */
function sendWhatsAppOrder() {
  if (AppState.cart.length === 0) {
    alert('Tu canasta está vacía. Por favor agrega panes antes de enviar tu pedido.');
    return;
  }

  const nameInput = document.getElementById('custName');
  const addressInput = document.getElementById('custAddress');
  const dateInput = document.getElementById('custDate');
  const notesInput = document.getElementById('custNotes');

  const name = nameInput ? nameInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const dateStr = dateInput ? dateInput.value : 'Lo antes posible';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (!name) {
    alert('Por favor ingresa tu nombre completo para identificar el pedido.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (AppState.selectedMode === 'delivery' && !address) {
    alert('Por favor ingresa tu dirección para el despacho a domicilio.');
    if (addressInput) addressInput.focus();
    return;
  }

  let modeText = '';
  let branchNote = '';
  if (AppState.selectedMode === 'retiro-barros-arana') {
    modeText = 'Retiro en Local Barros Arana (Quilpué)';
    branchNote = '📍 Sucursal Quilpué: Barros Arana 699, Quilpué';
  } else if (AppState.selectedMode === 'retiro-esmeralda') {
    modeText = 'Retiro en Local Esmeralda (Valparaíso)';
    branchNote = '📍 Sucursal Valparaíso: Esmeralda 125, Valparaíso';
  } else {
    modeText = `Delivery a Domicilio ($${formatNumber(DELIVERY_FEE)})`;
    branchNote = `🏠 Dirección: ${address}`;
  }

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = AppState.selectedMode === 'delivery' ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + deliveryFee;

  const itemsText = AppState.cart.map(item => 
    `• ${item.qty}x ${item.name} (${item.weight}) — $${formatNumber(item.price * item.qty)}`
  ).join('\n');

  const messageLines = [
    '🥖 *PEDIDO ONLINE • PAN | PANADERÍA ARTESANAL*',
    '----------------------------------------',
    `👤 *Cliente:* ${name}`,
    `📦 *Modalidad:* ${modeText}`,
    branchNote,
    `🕒 *Horario:* ${dateStr}`,
    '----------------------------------------',
    '🧺 *DETALLE DEL PEDIDO:*',
    itemsText,
    '----------------------------------------',
    `💵 *Subtotal:* $${formatNumber(subtotal)}`,
    AppState.selectedMode === 'delivery' ? `🛵 *Envío:* $${formatNumber(deliveryFee)}` : '🛵 *Envío:* $0 (Retiro en Tienda)',
    `✨ *TOTAL A PAGAR:* $${formatNumber(grandTotal)}`,
    notes ? `\n📝 *Notas:* ${notes}` : '',
    '----------------------------------------',
    'Hola PAN! Acabo de armar este pedido en su web y me gustaría confirmarlo. ¿Me indican datos para transferencia o pago?'
  ];

  const fullMessage = messageLines.filter(line => line !== '').join('\n');
  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank', 'noopener');
}

/**
 * 9. Mobile Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const collapse = document.getElementById('mobileNavCollapse');
  if (toggleBtn && collapse) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = collapse.classList.contains('open');
      collapse.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', !isOpen);
    });

    const links = collapse.querySelectorAll('.mobile-nav-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        collapse.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * 10. Toast Notification
 */
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toastNotice');
  const messageEl = document.getElementById('toastMessage');
  if (!toast || !messageEl) return;

  messageEl.textContent = msg;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/**
 * 11. LocalStorage Sync
 */
function saveCartToStorage() {
  try {
    localStorage.setItem('pan_masa_madre_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('pan_masa_madre_cart');
    if (saved) {
      AppState.cart = JSON.parse(saved);
    }
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

/**
 * Utilidades
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
