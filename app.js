/**
 * CERES MASA MADRE • PANADERÍA ARTESANAL & CAFÉ
 * Interactive Application Engine: Live Cart, Filters, Mode Selectors & WhatsApp Checkout
 * Developed by Breborn.cl
 */

// Teléfono oficial para pedidos (+56 9 5164 4492 o personalizable)
const WHATSAPP_PHONE = '56951644492';
const DELIVERY_FEE = 2500;

// Estado Global de la Aplicación
const AppState = {
  cart: [],
  selectedMode: 'retiro-lautaro', // 'retiro-lautaro' | 'retiro-bello' | 'delivery'
  selectedFilter: 'all'
};

// Catálogo de Productos Artesanales
const PRODUCTS = [
  // 1. Hogazas de Masa Madre
  {
    id: 'hogaza-campesina',
    name: 'Hogaza Tradicional Campesina',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Favorito • 36h Fermentación',
    weight: 'Hogaza 1kg',
    price: 5500,
    desc: '100% harina de trigo no blanqueada de molino a piedra, agua pura, sal de Cahuil y masa madre viva. Corteza caramelizada crujiente, miga abierta, húmeda y de acidez suave y láctica.',
    image: 'assets/images/hero_hogaza.jpg'
  },
  {
    id: 'hogaza-multisemillas',
    name: 'Hogaza Multisemillas & Centeno',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Nutritivo • 48h Fermentación',
    weight: 'Hogaza 1kg',
    price: 6200,
    desc: 'Masa madre de centeno integral con mix tostado de semillas de zapallo, girasol, sésamo negro y linaza dorada. Textura densa, aromática y altamente nutritiva.',
    image: 'assets/images/hogaza_semillas.jpg'
  },
  {
    id: 'hogaza-aceitunas-romero',
    name: 'Hogaza Aceitunas de Huasco & Romero',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Especialidad del Maestro',
    weight: 'Hogaza 900g',
    price: 6400,
    desc: 'Masa hidratada al 80% con aceitunas sevillanas y kalamata marinadas en aceite de oliva virgen extra y romero fresco recién cosechado.',
    image: 'assets/images/focaccia_baguettes.jpg'
  },
  {
    id: 'hogaza-nuez-chocolate',
    name: 'Hogaza Nuez & Chocolate Bitter 70%',
    category: 'hogazas',
    categoryName: 'Masa Madre Viva',
    tag: 'Gourmet • Edición Especial',
    weight: 'Hogaza 850g',
    price: 6800,
    desc: 'Insuperable para el desayuno o la once: masa madre rústica con nueces chilenas tostadas y trozos de chocolate amargo belga 70%.',
    image: 'assets/images/hero_hogaza.jpg'
  },

  // 2. Bollería Hojaldrada & Dulces
  {
    id: 'croissant-clasico',
    name: 'Croissant Francés 100% Mantequilla',
    category: 'bolleria',
    categoryName: 'Hojaldre de Masa Madre',
    tag: '100% Mantequilla Pura',
    weight: 'Unidad 120g',
    price: 2400,
    desc: 'Hojaldre francés tradicional elaborado con masa madre y mantequilla pura de vaca. 27 capas doradas y crocantes, con interior alveolado y sedoso.',
    image: 'assets/images/croissants_bolleria.jpg'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat Callebaut',
    category: 'bolleria',
    categoryName: 'Hojaldre de Masa Madre',
    tag: 'Chocolate Belga',
    weight: 'Unidad 130g',
    price: 2800,
    desc: 'Croissant hojaldrado relleno con dos barras de chocolate belga semi-amargo Callebaut 54%. Dorado a la perfección cada mañana.',
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
    desc: 'Masa brioche enriquecida con masa madre viva, canela de Ceilán, azúcar morena y glaseado aterciopelado de queso crema y vainilla natural.',
    image: 'assets/images/cinnamon_babka.jpg'
  },
  {
    id: 'babka-chocolate-avellanas',
    name: 'Babka de Chocolate & Avellanas',
    category: 'bolleria',
    categoryName: 'Bollería Artesanal',
    tag: 'Para Compartir',
    weight: 'Pieza 450g',
    price: 6900,
    desc: 'Pan dulce trenzado artesanal con masa brioche de masa madre, generosos remolinos de ganache de chocolate amargo y crocantes avellanas tostadas.',
    image: 'assets/images/cinnamon_babka.jpg'
  },

  // 3. Focaccias & Rústicos
  {
    id: 'focaccia-pomodoro',
    name: 'Focaccia Pomodoro, Albahaca & Flor de Sal',
    category: 'focaccias',
    categoryName: 'Focaccias a la Piedra',
    tag: 'Crocante & Aireada',
    weight: 'Porción 350g',
    price: 4200,
    desc: 'Alta hidratación al 85%, aceite de oliva virgen extra de primer prensado en frío, tomates cherry confitados, albahaca fresca y escamas de flor de sal.',
    image: 'assets/images/focaccia_baguettes.jpg'
  },
  {
    id: 'baguette-tradicional',
    name: 'Baguette Rústica Tradicional',
    category: 'focaccias',
    categoryName: 'Panadería Francesa',
    tag: 'Clásico París',
    weight: 'Pieza 300g',
    price: 2200,
    desc: 'Elaborada bajo el método tradicional con fermentación de 24 horas y masa madre. Corteza fina y quebradiza, con grandes alveolos y aroma a cereal tostado.',
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
    desc: 'Masa madre con oliva EVOO, cebollas moradas lentamente caramelizadas al tomillo fresco y medallones de queso de cabra artesanal de la zona central.',
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
    desc: 'Miga aterciopelada y esponjosa, enriquecida con mantequilla de campo y huevos de gallina libre. Ideal para tostadas gourmet, sándwiches o french toast.',
    image: 'assets/images/hero_hogaza.jpg'
  },

  // 4. Despensa Artesanal & Café
  {
    id: 'harina-fuerza-molino',
    name: 'Harina de Fuerza Molino a Piedra Orgánica',
    category: 'despensa',
    categoryName: 'Materia Prima Pura',
    tag: 'Molino a Piedra',
    weight: 'Paquete 1kg',
    price: 3500,
    desc: 'Harina de trigo integral agroecológica, molida lentamente a la piedra conservando el germen y salvado natural. Perfecta para alimentar tu masa madre.',
    image: 'assets/images/despensa_artesanal.jpg'
  },
  {
    id: 'mermelada-frutos-bosque',
    name: 'Mermelada Artesanal de Frutos del Bosque',
    category: 'despensa',
    categoryName: 'Dulces del Campo',
    tag: 'Fruta Chilena',
    weight: 'Frasco 320g',
    price: 4800,
    desc: 'Cocida lentamente en paila de cobre con frambuesas, moras y arándanos frescos con bajo contenido de azúcar añadida. El maridaje ideal para hogazas.',
    image: 'assets/images/despensa_artesanal.jpg'
  },
  {
    id: 'miel-quillay-organica',
    name: 'Miel de Quillay Cruda Orgánica',
    category: 'despensa',
    categoryName: 'Dulces del Campo',
    tag: '100% Pura de Bosque',
    weight: 'Frasco 500g',
    price: 5500,
    desc: 'Miel pura cruda sin pasteurizar cosechada en bosque nativo chileno. Notas florales ámbar ideales para acompañar quesos y panes rústicos.',
    image: 'assets/images/despensa_artesanal.jpg'
  },
  {
    id: 'cafe-especialidad-ceres',
    name: 'Café de Especialidad Ceres Blend (Grano)',
    category: 'despensa',
    categoryName: 'Café de Especialidad',
    tag: 'Tueste Medio Fresco',
    weight: 'Bolsa 250g',
    price: 8900,
    desc: 'Origen Colombia Huila & Etiopía Yirgacheffe, tostado artesanal semanal con notas a chocolate amargo, caramelo tostado y sutil acidez de frutos rojos.',
    image: 'assets/images/bg_horarios_panaderia.jpg'
  }
];

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCategoryFilters();
  initCartDrawer();
  initModePills();
  initFAQAccordion();
  initMobileMenu();
  loadCartFromStorage();
  updateCartUI();
});

/**
 * 1. Render de Productos en la Cuadrícula
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
 * 2. Filtros de Categorías
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
 * 3. Gestión del Carrito (Agregar, Restar, Eliminar)
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
 * 4. Actualización Visual del Carrito & Drawer
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

  // Render Items in Drawer Body
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
        <p>Aún no has agregado panes de masa madre ni delicias horneadas.</p>
        <button class="btn-start-shopping" onclick="closeCartDrawer(); window.location.hash = '#catalogo';">
          Explorar la Vitrina
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
 * 5. Drawer Controls (Abrir, Cerrar)
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
 * 6. Selección de Modo de Retiro / Despacho
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
  if (branchName.includes('Lautaro')) {
    AppState.selectedMode = 'retiro-lautaro';
    const pill = document.getElementById('modeLautaroBtn');
    if (pill) {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
  } else if (branchName.includes('Bello')) {
    AppState.selectedMode = 'retiro-bello';
    const pill = document.getElementById('modeBelloBtn');
    if (pill) {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
  }
  updateCartUI();
  openCartDrawer();
}

/**
 * 7. Envío del Pedido a WhatsApp
 */
function sendWhatsAppOrder() {
  if (AppState.cart.length === 0) {
    alert('Tu canasta está vacía. Por favor agrega productos antes de enviar el pedido.');
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
    alert('Por favor ingresa tu nombre para identificar el pedido.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (AppState.selectedMode === 'delivery' && !address) {
    alert('Por favor ingresa tu dirección para el despacho a domicilio.');
    if (addressInput) addressInput.focus();
    return;
  }

  // Definir texto de la modalidad
  let modeText = '';
  let branchNote = '';
  if (AppState.selectedMode === 'retiro-lautaro') {
    modeText = 'Retiro en Local Lautaro (09:00 a 20:00 hrs)';
    branchNote = '📍 Sucursal Lautaro • Centro';
  } else if (AppState.selectedMode === 'retiro-bello') {
    modeText = 'Retiro en Local Andrés Bello (09:00 a 19:30 hrs)';
    branchNote = '📍 Sucursal Av. Andrés Bello';
  } else {
    modeText = `Delivery a Domicilio ($${formatNumber(DELIVERY_FEE)})`;
    branchNote = `🏠 Dirección: ${address}`;
  }

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = AppState.selectedMode === 'delivery' ? DELIVERY_FEE : 0;
  const grandTotal = subtotal + deliveryFee;

  // Armar lista de productos
  const itemsText = AppState.cart.map(item => 
    `• ${item.qty}x ${item.name} (${item.weight}) — $${formatNumber(item.price * item.qty)}`
  ).join('\n');

  // Construcción del mensaje para WhatsApp
  const messageLines = [
    '🥖 *PEDIDO EN LÍNEA • CERES MASA MADRE*',
    '----------------------------------------',
    `👤 *Cliente:* ${name}`,
    `📦 *Modalidad:* ${modeText}`,
    branchNote,
    `🕒 *Horario:* ${dateStr}`,
    '----------------------------------------',
    '🧺 *DETALLE DE LA CANASTA:*',
    itemsText,
    '----------------------------------------',
    `💵 *Subtotal:* $${formatNumber(subtotal)}`,
    AppState.selectedMode === 'delivery' ? `🛵 *Envío:* $${formatNumber(deliveryFee)}` : '🛵 *Envío:* $0 (Retiro en Tienda)',
    `✨ *TOTAL A PAGAR:* $${formatNumber(grandTotal)}`,
    notes ? `\n📝 *Notas:* ${notes}` : '',
    '----------------------------------------',
    'Hola Ceres Masa Madre! Acabo de armar este pedido en su web y me gustaría confirmarlo. ¿Me indican datos para transferencia o pago?'
  ];

  const fullMessage = messageLines.filter(line => line !== '').join('\n');
  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappUrl, '_blank', 'noopener');
}

/**
 * 8. FAQ Accordion
 */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        items.forEach(i => {
          i.classList.remove('active');
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
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
    localStorage.setItem('ceres_masa_madre_cart', JSON.stringify(AppState.cart));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('ceres_masa_madre_cart');
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
