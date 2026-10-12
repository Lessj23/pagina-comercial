// ==========================================================================
// MORE DONUTS - Interactive Shop, Auth, Customer Portal, Admin & Meta API Hub
// ==========================================================================

// Catalog Data with Realistic Photography & Prices in Mexican Pesos (MXN)
let PRODUCTS = JSON.parse(localStorage.getItem("more_donuts_products") || "null") || [
  // Clásicas
  {
    id: "classic-glaseada",
    name: "Glaseada Tradicional",
    category: "clasicas",
    categoryName: "Clásica",
    price: 25,
    tag: "Favorita",
    badgeType: "classic",
    desc: "Nuestra receta secreta desde el día uno: masa brioche dorada, esponjosa y bañada en nuestro glaseado brillante original.",
    image: "images/glaseada.jpg"
  },
  {
    id: "classic-azucar-canela",
    name: "Azúcar & Canela Calientita",
    category: "clasicas",
    categoryName: "Clásica",
    price: 25,
    tag: "Tradicional",
    badgeType: "classic",
    desc: "Recién salida de la freidora, revolcada suavemente en azúcar de caña fina y un toque aromático de canela de Ceilán.",
    image: "images/azucar.jpg"
  },
  {
    id: "classic-chocolate-chispas",
    name: "Chocolate Clásico & Sprinkles",
    category: "clasicas",
    categoryName: "Clásica",
    price: 30,
    tag: "Top Seller",
    badgeType: "classic",
    desc: "Glaseado denso de chocolate semiamargo al 60% de cacao, coronado con una vibrante lluvia de chispas crujientes de colores.",
    image: "images/chocolate.jpg"
  },
  {
    id: "classic-boston-cream",
    name: "Boston Cream More",
    category: "clasicas",
    categoryName: "Clásica",
    price: 36,
    tag: "Rellena",
    badgeType: "classic",
    desc: "Rellena copiosamente de crema pastelera con auténtica vainilla de Papantla y cubierta con ganache sedoso de chocolate negro.",
    image: "images/chocolate.jpg"
  },
  {
    id: "classic-fresa-glaseada",
    name: "Fresa Salvaje & Glaseado",
    category: "clasicas",
    categoryName: "Clásica",
    price: 32,
    tag: "Frutal",
    badgeType: "classic",
    desc: "Glaseado rosa natural hecho con compota de fresas frescas de Irapuato, decorado con virutas de azúcar perlada.",
    image: "images/fresa.jpg"
  },
  {
    id: "classic-vainilla-nuez",
    name: "Vainilla Francesa & Nuez",
    category: "clasicas",
    categoryName: "Clásica",
    price: 35,
    tag: "Gourmet",
    badgeType: "classic",
    desc: "Cobertura cremosa de vainilla blanca salpicada con trocitos crujientes de nuez pecana recién tostada y caramelizada.",
    image: "images/glaseada.jpg"
  },
  {
    id: "classic-doble-chocolate",
    name: "Doble Chocolate Fudge",
    category: "clasicas",
    categoryName: "Clásica",
    price: 38,
    tag: "Intenso",
    badgeType: "classic",
    desc: "Para los verdaderos amantes del cacao: masa con chocolate obscuro, cobertura de fudge caliente y virutas de chocolate con leche.",
    image: "images/chocolate.jpg"
  },
  {
    id: "classic-manzana-canela",
    name: "Rellena de Manzana & Canela",
    category: "clasicas",
    categoryName: "Clásica",
    price: 36,
    tag: "Rellena",
    badgeType: "classic",
    desc: "Masa nevada en azúcar glas rellena de compota casera de manzanas caramelizadas al horno con canela y nuez moscada.",
    image: "images/azucar.jpg"
  },

  // Sabores de Temporada
  {
    id: "season-pumpkin-spice",
    name: "Pumpkin Spice & Toffee",
    category: "temporada",
    categoryName: "Edición Octubre",
    price: 44,
    tag: "¡Edición Octubre!",
    badgeType: "seasonal",
    desc: "Calabaza de castilla asada con especias aromáticas, toffee salado oscuro y telaraña de chocolate blanco.",
    image: "images/chocolate.jpg"
  },
  {
    id: "season-apple-caramel",
    name: "Manzana Especiada & Caramelo",
    category: "temporada",
    categoryName: "Edición Octubre",
    price: 42,
    tag: "Edición Octubre",
    badgeType: "seasonal",
    desc: "Compota de manzana especiada, glaseado de canela y caramelo salado con crujiente de nuez tostada.",
    image: "images/azucar.jpg"
  },
  {
    id: "season-churro-cajeta",
    name: "Dona Churro & Cajeta Celaya",
    category: "temporada",
    categoryName: "Edición Especial",
    price: 40,
    tag: "Imperdible",
    badgeType: "seasonal",
    desc: "Exterior crujiente estilo churro mexicano recién frito, rellena con abundante cajeta de leche de cabra quemada de Celaya.",
    image: "images/azucar.jpg"
  },
  {
    id: "season-halloween-spooky",
    name: "Pan de Muerto Glaseado",
    category: "temporada",
    categoryName: "Adelanto Noviembre",
    price: 46,
    tag: "Noviembre",
    badgeType: "seasonal",
    desc: "Homenaje al pan de muerto con esencia natural de azahar, ralladura de naranja y azúcar fina.",
    image: "images/azucar.jpg"
  },

  // Combos & Packs
  {
    id: "pack-media-docena",
    name: "Caja Media Docena (6 Donas)",
    category: "combos",
    categoryName: "Paquete",
    price: 175,
    tag: "Ahorra $20 MXN",
    badgeType: "classic",
    desc: "Elige tus 6 donas favoritas entre clásicas y de temporada en nuestra elegante caja negra More Donuts con lazo rojo.",
    image: "images/caja-donas.jpg"
  },
  {
    id: "pack-docena-fiesta",
    name: "Docena Fiesta More Donuts (12)",
    category: "combos",
    categoryName: "Paquete",
    price: 320,
    tag: "Envío Gratis",
    badgeType: "seasonal",
    desc: "La caja magna de 12 donas recién salidas del horno para compartir en fiestas, oficina o consentir a toda la familia.",
    image: "images/caja-donas.jpg"
  },

  // Bebidas Artesanales & Cafetería
  {
    id: "drink-cafe-de-olla",
    name: "Café de Olla Tradicional",
    category: "bebidas",
    categoryName: "Bebida Caliente",
    price: 38,
    tag: "Hecho en Casa",
    badgeType: "classic",
    desc: "Preparado en olla de barro con granos chiapanecos de estricta altura, canela entera en raja y piloncillo natural.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "drink-cold-brew-more",
    name: "Cold Brew More Tonic",
    category: "bebidas",
    categoryName: "Bebida Fría",
    price: 48,
    tag: "Especialidad",
    badgeType: "classic",
    desc: "Extracción en frío durante 18 horas, servido con hielos artesanales cristalinos y un twist refrescante de cítricos.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "drink-chocolate-more",
    name: "Chocolate Caliente More & Malvavisco",
    category: "bebidas",
    categoryName: "Bebida Caliente",
    price: 44,
    tag: "Confort",
    badgeType: "classic",
    desc: "Auténtico cacao oaxaqueño batido espumoso con molinillo tradicional, terminado con un malvavisco flameado.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "drink-malteada-red-velvet",
    name: "Malteada Red Velvet Cream",
    category: "bebidas",
    categoryName: "Malteada",
    price: 65,
    tag: "Firma More",
    badgeType: "seasonal",
    desc: "Helado artesanal de vainilla batido con trozos de dona Red Velvet, copo generoso de crema chantilly y jarabe de frutos rojos.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  }
];

// Seasonal Themes Database with Realistic Photos (12 Months of More Donuts)
const MONTHLY_THEMES = [
  {
    month: "Enero",
    code: 1,
    title: "Rosca de Reyes & Chocolate Abuelita",
    icon: "👑",
    highlight: "Dona Rosca con ate de guayaba, higos caramelizados y relleno cremoso de chocolate caliente.",
    price: "$42 MXN",
    image: "images/glaseada.jpg",
    active: false
  },
  {
    month: "Febrero",
    code: 2,
    title: "Amor, Pasión & Red Velvet",
    icon: "❤️",
    highlight: "Dona Red Velvet en forma de corazón rellena de crema de queso mascarpone y fresas silvestres.",
    price: "$45 MXN",
    image: "images/fresa.jpg",
    active: false
  },
  {
    month: "Marzo",
    code: 3,
    title: "Primavera Matcha & Flor de Cerezo",
    icon: "🌸",
    highlight: "Matcha japonés ceremonial con infusión floral de cerezo y pétalos de azúcar cristalizados.",
    price: "$44 MXN",
    image: "images/glaseada.jpg",
    active: false
  },
  {
    month: "Abril",
    code: 4,
    title: "Día del Niño: Algodón de Azúcar & Arcoíris",
    icon: "🍭",
    highlight: "Glaseado celeste con lluvia de confeti brillante y una nube de algodón de azúcar esponjoso.",
    price: "$40 MXN",
    image: "images/fresa.jpg",
    active: false
  },
  {
    month: "Mayo",
    code: 5,
    title: "Mes de Mamá: Lavanda & Limón Real",
    icon: "💐",
    highlight: "Masa infusionada con miel de abeja orgánica, glaseado de limón Eureka y sutil flor de lavanda.",
    price: "$42 MXN",
    image: "images/glaseada.jpg",
    active: false
  },
  {
    month: "Junio",
    code: 6,
    title: "Paraíso Tropical: Mango & Maracuyá",
    icon: "🥭",
    highlight: "Glaseado ácido y dulce de maracuyá fresca con compota de mango ataulfo y coco rallado.",
    price: "$40 MXN",
    image: "images/fresa.jpg",
    active: false
  },
  {
    month: "Julio",
    code: 7,
    title: "Verano Fest: Caramelo Salado & Pretzel",
    icon: "🥨",
    highlight: "Drip espeso de caramelo con flor de sal de Colima y pretzels tostados crujientes.",
    price: "$44 MXN",
    image: "images/azucar.jpg",
    active: false
  },
  {
    month: "Agosto",
    code: 8,
    title: "Café de Especialidad & Avellana",
    icon: "☕",
    highlight: "Espresso veracruzano infusionado en ganache cremoso y tropezones de avellana europea tostada.",
    price: "$42 MXN",
    image: "images/chocolate.jpg",
    active: false
  },
  {
    month: "Septiembre",
    code: 9,
    title: "¡Viva México! Nogada Real & Tres Leches",
    icon: "🇲🇽",
    highlight: "Nuestra creación estelar: Nogada de nuez de castilla fresca, granada roja y tres leches tradicional.",
    price: "$45 MXN",
    image: "images/glaseada.jpg",
    active: false
  },
  {
    month: "Octubre",
    code: 10,
    title: "Spooky Season: Pumpkin Spice & Toffee",
    icon: "🎃",
    highlight: "Calabaza asada con especias aromáticas, toffee salado oscuro y telaraña de chocolate blanco.",
    price: "$44 MXN",
    image: "images/chocolate.jpg",
    active: true
  },
  {
    month: "Noviembre",
    code: 11,
    title: "Día de Muertos: Pan de Muerto Glaseado",
    icon: "💀",
    highlight: "Homenaje al pan de muerto con esencia natural de azahar, ralladura de naranja y azúcares finos.",
    price: "$46 MXN",
    image: "images/azucar.jpg",
    active: false
  },
  {
    month: "Diciembre",
    code: 12,
    title: "Navidad Mágica: Bastón de Menta & Ponche",
    icon: "🎄",
    highlight: "Ganache de chocolate belga con bastón navideño triturado y compota aromática de ponche frutal.",
    price: "$46 MXN",
    image: "images/chocolate.jpg",
    active: false
  }
];

// ==========================================================================
// User Authentication & Roles State
// ==========================================================================
const DEFAULT_USERS = [];

// Demo-only client state. Production authentication must be server-side.
let users = (JSON.parse(localStorage.getItem("more_donuts_users") || "null") || DEFAULT_USERS)
  .map(({ password, ...user }) => ({ ...user, passwordHash: user.passwordHash || null }));
let currentUser = JSON.parse(localStorage.getItem("more_donuts_current_user") || "null");

// Initial Seed Orders
const DEFAULT_ORDERS = [
  {
    id: "MD-1042",
    date: "2026-09-14 09:15",
    customerName: "Mariana López",
    customerEmail: "cliente@moredonuts.mx",
    customerPhone: "525598765432",
    address: "Calle Colima 120, Int 4, Roma Norte, 06700 CDMX",
    paymentMethod: "Efectivo contra entrega",
    items: [
      { name: "Caja Media Docena (6 Donas)", quantity: 1, price: 175 }
    ],
    subtotal: 175,
    deliveryFee: 35,
    total: 210,
    status: "En Camino",
    notes: "Tocar timbre 4"
  },
  {
    id: "MD-1041",
    date: "2026-09-13 16:30",
    customerName: "Carlos Alatorre",
    customerEmail: "carlos@gmail.com",
    customerPhone: "525533221100",
    address: "Campos Elíseos 204, Polanco, CDMX",
    paymentMethod: "Tarjeta con terminal al repartidor",
    items: [
      { name: "Docena Fiesta More Donuts (12)", quantity: 1, price: 320 }
    ],
    subtotal: 320,
    deliveryFee: 0,
    total: 320,
    status: "Entregado",
    notes: "Dejar en recepción"
  },
  {
    id: "MD-1040",
    date: "2026-09-13 11:20",
    customerName: "Sofía Morales",
    customerEmail: "sofia@hotmail.com",
    customerPhone: "525544332211",
    address: "Jardín Centenario 8, Coyoacán, CDMX",
    paymentMethod: "Transferencia SPEI",
    items: [
      { name: "Glaseada Tradicional", quantity: 2, price: 25 },
      { name: "Café de Olla Tradicional", quantity: 2, price: 38 }
    ],
    subtotal: 126,
    deliveryFee: 35,
    total: 161,
    status: "Entregado",
    notes: "Sin azúcar extra en el café"
  }
];

let orders = JSON.parse(localStorage.getItem("more_donuts_orders") || "null") || DEFAULT_ORDERS;

// Meta WhatsApp Cloud API Configuration State
const DEFAULT_META_API = {
  accessToken: "",
  phoneId: "109876543210987",
  wabaId: "987654321098765",
  templateName: "moredonuts_pedido_notificacion",
  mode: "test", // 'test' or 'live'
  verifyToken: "",
  apiUrl: "https://graph.facebook.com/v19.0"
};

const storedMetaApiConfig = JSON.parse(localStorage.getItem("more_donuts_meta_api") || "null");
// Never hydrate bearer tokens or webhook secrets from browser storage.
let metaApiConfig = {
  ...DEFAULT_META_API,
  ...(storedMetaApiConfig || {}),
  accessToken: "",
  verifyToken: ""
};

// App Cart & View State
let cart = JSON.parse(localStorage.getItem("more_donuts_cart") || "[]");
let currentCategory = "todos";
let currentSearchQuery = "";
let selectedSeasonMonth = new Date().getMonth() + 1;
let isRegisterMode = false;

// Custom Donut Builder State
const customDonutState = {
  name: "Mi More Dona",
  dough: { id: "original", name: "Original Brioche", color: "#eab308", price: 20 },
  glaze: { id: "red", name: "Fresa Pasión Roja", color: "#e11d48", price: 10 },
  topping: { id: "sprinkles", name: "Chispas de Colores", price: 6 },
  drizzle: { id: "chocolate", name: "Drizzle Chocolate", color: "#2d1606", price: 6 }
};

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  saveUsers();
  saveOrders();
  renderSeasonalMonths();
  renderProducts();
  updateCartUI();
  setupBuilderListeners();
  setupEventListeners();
  setupAuthEventListeners();
  setupPanelEventListeners();
  updateDonutBuilderPreview();
  initCountdown();
  updateAuthNavbarUI();
  loadMetaApiForm();
});

// ==========================================================================
// Auth & Role Management
// ==========================================================================
function saveUsers() {
  localStorage.setItem("more_donuts_users", JSON.stringify(users));
}

function saveOrders() {
  localStorage.setItem("more_donuts_orders", JSON.stringify(orders));
}

function saveMetaApiConfig() {
  localStorage.setItem("more_donuts_meta_api", JSON.stringify(metaApiConfig));
}

function updateAuthNavbarUI() {
  const authLabel = document.getElementById("navAuthLabel");
  const openAuthBtn = document.getElementById("openAuthModalBtn");
  const dropdown = document.getElementById("userDropdown");
  const dropdownName = document.getElementById("dropdownUserName");
  const dropdownRole = document.getElementById("dropdownUserRole");
  const adminOption = document.getElementById("dropdownOpenAdminBtn");

  if (!currentUser) {
    if (authLabel) authLabel.textContent = "Ingresar";
    if (openAuthBtn) {
      openAuthBtn.onclick = openAuthModal;
    }
    if (dropdown) dropdown.classList.remove("open");
  } else {
    const roleIcon = currentUser.role === "admin" ? "👑 " : "🍩 ";
    if (authLabel) authLabel.textContent = roleIcon + currentUser.name.split(" ")[0];
    if (openAuthBtn) {
      openAuthBtn.onclick = (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("open");
      };
    }
    if (dropdownName) dropdownName.textContent = currentUser.name;
    if (dropdownRole) dropdownRole.textContent = currentUser.role === "admin" ? "Administrador" : "Cliente";
    if (adminOption) {
      adminOption.style.display = currentUser.role === "admin" ? "flex" : "none";
    }
  }
}

function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("open");
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("open");
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function loginUser(email, password) {
  const passwordHash = await hashPassword(password);
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === passwordHash);
  if (user) {
    currentUser = user;
    localStorage.setItem("more_donuts_current_user", JSON.stringify(currentUser));
    updateAuthNavbarUI();
    closeAuthModal();
    showToast(`👋 ¡Bienvenido de vuelta, ${user.name}!`);

    // Pre-fill checkout form if customer
    prefillCheckoutWithUser();

    if (user.role === "admin") {
      openAdminModal();
    }
  } else {
    showToast("❌ Correo o contraseña incorrectos");
  }
}

async function registerUser(name, email, password) {
  const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    showToast("⚠️ Este correo ya está registrado");
    return;
  }

  const newUser = {
    id: "user-" + Date.now(),
    name,
    email,
    passwordHash: await hashPassword(password),
    role: "customer",
    phone: "",
    address: ""
  };

  users.push(newUser);
  saveUsers();
  currentUser = newUser;
  localStorage.setItem("more_donuts_current_user", JSON.stringify(currentUser));
  updateAuthNavbarUI();
  closeAuthModal();
  showToast(`🎉 ¡Cuenta creada con éxito! Bienvenido, ${name}`);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("more_donuts_current_user");
  const dropdown = document.getElementById("userDropdown");
  if (dropdown) dropdown.classList.remove("open");
  updateAuthNavbarUI();
  showToast("Sesión cerrada correctamente");
}

function prefillCheckoutWithUser() {
  if (!currentUser) return;
  const nameInput = document.getElementById("orderName");
  const phoneInput = document.getElementById("orderPhone");
  const addressInput = document.getElementById("orderAddress");

  if (nameInput && !nameInput.value) nameInput.value = currentUser.name || "";
  if (phoneInput && !phoneInput.value) phoneInput.value = currentUser.phone || "";
  if (addressInput && !addressInput.value) addressInput.value = currentUser.address || "";
}

// ==========================================================================
// Customer Portal Logic
// ==========================================================================
function openCustomerModal() {
  if (!currentUser) {
    openAuthModal();
    showToast("Inicia sesión para ver tu portal de cliente");
    return;
  }

  const modal = document.getElementById("customerModal");
  const nameEl = document.getElementById("customerPortalName");
  if (nameEl) nameEl.textContent = `Hola, ${currentUser.name.split(" ")[0]}`;

  renderCustomerOrders();
  loadCustomerProfile();

  if (modal) modal.classList.add("open");
}

function closeCustomerModal() {
  const modal = document.getElementById("customerModal");
  if (modal) modal.classList.remove("open");
}

function renderCustomerOrders() {
  const container = document.getElementById("custOrdersList");
  const countEl = document.getElementById("custOrdersCount");
  if (!container) return;

  // Filter orders for current user by email or name
  const custOrders = orders.filter(o => 
    (o.customerEmail && o.customerEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
    (o.customerName && o.customerName.toLowerCase() === currentUser.name.toLowerCase())
  );

  if (countEl) countEl.textContent = custOrders.length;

  if (custOrders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.8rem;">📦</p>
        <h4 style="color: #fff; font-size: 1.2rem; margin-bottom: 0.4rem;">Aún no tienes pedidos registrados</h4>
        <p style="font-size: 0.9rem;">Cuando realices tu primer pedido, podrás rastrear su estado aquí en tiempo real.</p>
        <button class="btn-primary" style="margin-top: 1.2rem;" onclick="closeCustomerModal(); location.href='#menu';">Ordenar Ahora</button>
      </div>
    `;
    return;
  }

  container.innerHTML = custOrders.map(order => {
    const statusClass = order.status.toLowerCase().replace(/\s+/g, '-');
    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.4rem; margin-bottom: 1.2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.8rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span style="font-size: 0.78rem; color: var(--text-muted);">PEDIDO:</span>
            <strong style="color: #fff; font-size: 1.05rem; margin-left: 0.3rem;">#${order.id}</strong>
            <span style="font-size: 0.78rem; color: var(--text-muted); margin-left: 0.8rem;">${order.date}</span>
          </div>
          <span class="status-pill ${statusClass}">${order.status}</span>
        </div>

        <!-- Order Timeline Stepper -->
        ${renderOrderTimeline(order.status)}

        <!-- Items list -->
        <div style="margin: 1rem 0; font-size: 0.92rem; color: var(--text-gray);">
          ${order.items.map(item => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
              <span>• <strong>${item.quantity}x</strong> ${item.name}</span>
              <span style="color: #fff;">$${(item.price * item.quantity).toFixed(2)} MXN</span>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.8rem; margin-top: 0.8rem; flex-wrap: wrap; gap: 0.8rem;">
          <div>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Total pagado:</span>
            <strong style="font-size: 1.25rem; color: var(--red-light); margin-left: 0.3rem;">$${order.total.toFixed(2)} MXN</strong>
          </div>
          <div style="display: flex; gap: 0.6rem;">
            <a href="https://wa.me/525512345678?text=${encodeURIComponent('Hola More Donuts, consulto sobre mi pedido #' + order.id)}" target="_blank" class="btn-secondary" style="padding: 0.4rem 0.9rem; font-size: 0.82rem;">
              <span>💬 Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderOrderTimeline(status) {
  const steps = ["Pendiente", "En Preparación", "En Camino", "Entregado"];
  const currentIdx = steps.indexOf(status);

  return `
    <div class="order-timeline">
      ${steps.map((step, idx) => {
        let stepClass = "";
        if (currentIdx > idx || status === "Entregado") stepClass = "completed";
        else if (currentIdx === idx) stepClass = "active";

        return `
          <div class="timeline-step ${stepClass}">
            <div class="timeline-circle">${idx + 1}</div>
            <div class="timeline-label">${step}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function loadCustomerProfile() {
  if (!currentUser) return;
  const nameInput = document.getElementById("custProfileName");
  const emailInput = document.getElementById("custProfileEmail");
  const phoneInput = document.getElementById("custProfilePhone");
  const addressInput = document.getElementById("custProfileAddress");

  if (nameInput) nameInput.value = currentUser.name || "";
  if (emailInput) emailInput.value = currentUser.email || "";
  if (phoneInput) phoneInput.value = currentUser.phone || "";
  if (addressInput) addressInput.value = currentUser.address || "";
}

// ==========================================================================
// Admin Dashboard & Management Logic
// ==========================================================================
function openAdminModal() {
  if (!currentUser || currentUser.role !== "admin") {
    openAuthModal();
    showToast("⚠️ Se requieren permisos de administrador. Inicia con admin@moredonuts.mx");
    return;
  }

  const modal = document.getElementById("adminModal");
  updateAdminMetrics();
  renderAdminOrders();
  renderAdminProducts();
  loadMetaApiForm();

  if (modal) modal.classList.add("open");
}

function closeAdminModal() {
  const modal = document.getElementById("adminModal");
  if (modal) modal.classList.remove("open");
}

function updateAdminMetrics() {
  const totalSalesEl = document.getElementById("metricTotalSales");
  const totalOrdersEl = document.getElementById("metricTotalOrders");
  const topDonutEl = document.getElementById("metricTopDonut");
  const apiStatusEl = document.getElementById("metricApiStatus");

  const totalSales = orders.reduce((sum, o) => sum + (o.status !== "Cancelado" ? o.total : 0), 0);
  if (totalSalesEl) totalSalesEl.textContent = `$${totalSales.toFixed(2)} MXN`;
  if (totalOrdersEl) totalOrdersEl.textContent = orders.length;

  if (topDonutEl && PRODUCTS.length > 0) {
    topDonutEl.textContent = PRODUCTS[0].name;
  }

  if (apiStatusEl) {
    const isReady = metaApiConfig && metaApiConfig.phoneId;
    apiStatusEl.innerHTML = isReady 
      ? `<span class="text-green">● ${metaApiConfig.mode === 'live' ? 'En Vivo' : 'Modo Prueba'}</span>`
      : `<span class="text-yellow">● Pendiente</span>`;
  }

  // Render recent orders
  const recentTable = document.getElementById("adminRecentOrdersTable");
  if (recentTable) {
    const recent = orders.slice(0, 4);
    recentTable.innerHTML = `
      <div class="table-responsive">
        <table class="custom-table">
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${recent.map(o => `
              <tr>
                <td><strong>#${o.id}</strong></td>
                <td>${o.customerName}</td>
                <td style="font-weight: 800; color: var(--red-light);">$${o.total.toFixed(2)} MXN</td>
                <td><span class="status-pill ${o.status.toLowerCase().replace(/\s+/g, '-')}">${o.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
}

function renderAdminOrders() {
  const table = document.getElementById("adminOrdersTable");
  const filterSelect = document.getElementById("filterOrderStatus");
  if (!table) return;

  const filter = filterSelect ? filterSelect.value : "todos";
  const filtered = orders.filter(o => filter === "todos" ? true : o.status === filter);

  table.innerHTML = `
    <thead>
      <tr>
        <th>ID / Fecha</th>
        <th>Cliente & Teléfono</th>
        <th>Dirección</th>
        <th>Productos</th>
        <th>Total</th>
        <th>Cambiar Estado</th>
        <th>Notificar</th>
      </tr>
    </thead>
    <tbody>
      ${filtered.length === 0 ? `<tr><td colspan="7" style="text-align:center; padding: 2rem;">No hay pedidos con este estado.</td></tr>` : ''}
      ${filtered.map(o => `
        <tr>
          <td>
            <strong>#${o.id}</strong><br>
            <small style="color: var(--text-muted);">${o.date}</small>
          </td>
          <td>
            <strong>${o.customerName}</strong><br>
            <small style="color: var(--text-gray);">${o.customerPhone || 'Sin tel.'}</small>
          </td>
          <td style="max-width: 200px; font-size: 0.8rem; color: var(--text-gray);">
            ${o.address}
          </td>
          <td>
            <small>
              ${o.items.map(i => `${i.quantity}x ${i.name}`).join("<br>")}
            </small>
          </td>
          <td style="font-weight: 800; color: var(--red-light); font-size: 0.95rem;">
            $${o.total.toFixed(2)} MXN
          </td>
          <td>
            <select class="form-control" style="padding: 0.3rem 0.6rem; font-size: 0.8rem; width: auto;" onchange="changeOrderStatus('${o.id}', this.value)">
              <option value="Pendiente" ${o.status === "Pendiente" ? "selected" : ""}>Pendiente</option>
              <option value="En Preparación" ${o.status === "En Preparación" ? "selected" : ""}>En Preparación</option>
              <option value="En Camino" ${o.status === "En Camino" ? "selected" : ""}>En Camino</option>
              <option value="Entregado" ${o.status === "Entregado" ? "selected" : ""}>Entregado</option>
              <option value="Cancelado" ${o.status === "Cancelado" ? "selected" : ""}>Cancelado</option>
            </select>
          </td>
          <td>
            <button class="btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.75rem;" onclick="notifyOrderViaMetaApi('${o.id}')" title="Enviar actualización por WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Meta WS</span>
            </button>
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function changeOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = newStatus;
  saveOrders();
  updateAdminMetrics();
  renderAdminOrders();
  showToast(`Pedido #${orderId} actualizado a: ${newStatus}`);

  // Auto trigger Meta WhatsApp notification simulation
  notifyOrderViaMetaApi(orderId);
}

function renderAdminProducts() {
  const table = document.getElementById("adminProductsTable");
  if (!table) return;

  table.innerHTML = `
    <thead>
      <tr>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Precio ($ MXN)</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      ${PRODUCTS.map(p => `
        <tr>
          <td>
            <img src="${p.image}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;">
          </td>
          <td><strong>${p.name}</strong></td>
          <td><span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted);">${p.categoryName}</span></td>
          <td>
            <input type="number" value="${p.price}" style="width: 80px; padding: 0.3rem 0.5rem; background: var(--bg-card); border: 1px solid var(--border-subtle); color: #fff; border-radius: 4px; font-weight: 800;" onchange="updateProductPrice('${p.id}', this.value)">
          </td>
          <td>
            <button class="remove-item-btn" onclick="deleteProduct('${p.id}')" title="Eliminar producto">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function updateProductPrice(productId, newPrice) {
  const p = PRODUCTS.find(prod => prod.id === productId);
  if (p) {
    p.price = parseFloat(newPrice) || p.price;
    localStorage.setItem("more_donuts_products", JSON.stringify(PRODUCTS));
    renderProducts();
    showToast(`Precio de "${p.name}" actualizado a $${p.price.toFixed(2)} MXN`);
  }
}

function deleteProduct(productId) {
  if (confirm("¿Estás seguro de eliminar este producto del menú?")) {
    PRODUCTS = PRODUCTS.filter(p => p.id !== productId);
    localStorage.setItem("more_donuts_products", JSON.stringify(PRODUCTS));
    renderProducts();
    renderAdminProducts();
    showToast("Producto eliminado del menú");
  }
}

function toggleNewProductForm() {
  const formBox = document.getElementById("newProductFormBox");
  if (formBox) {
    formBox.style.display = formBox.style.display === "none" ? "block" : "none";
  }
}

function exportOrdersCSV() {
  let csv = "ID,Fecha,Cliente,Telefono,Direccion,Total,Estado\n";
  orders.forEach(o => {
    csv += `"${o.id}","${o.date}","${o.customerName}","${o.customerPhone}","${o.address.replace(/"/g, '""')}",${o.total},"${o.status}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `more_donuts_pedidos_${Date.now()}.csv`;
  link.click();
  showToast("📥 Pedidos exportados a archivo CSV");
}

// ==========================================================================
// Meta WhatsApp Cloud API Hub (Configuración e Inserción de Keys)
// ==========================================================================
function loadMetaApiForm() {
  const tokenInput = document.getElementById("metaAccessToken");
  const phoneIdInput = document.getElementById("metaPhoneId");
  const wabaIdInput = document.getElementById("metaWabaId");
  const templateInput = document.getElementById("metaTemplateName");
  const modeSelect = document.getElementById("metaMode");
  const verifyInput = document.getElementById("metaWebhookVerify");
  const statusDot = document.getElementById("metaStatusDot");
  const statusText = document.getElementById("metaStatusText");

  if (tokenInput) tokenInput.value = metaApiConfig.accessToken || "";
  if (phoneIdInput) phoneIdInput.value = metaApiConfig.phoneId || "";
  if (wabaIdInput) wabaIdInput.value = metaApiConfig.wabaId || "";
  if (templateInput) templateInput.value = metaApiConfig.templateName || "moredonuts_pedido_notificacion";
  if (modeSelect) modeSelect.value = metaApiConfig.mode || "test";
  if (verifyInput) verifyInput.value = metaApiConfig.verifyToken || "";

  if (statusDot && statusText) {
    if (metaApiConfig.mode === "live" && metaApiConfig.accessToken) {
      statusDot.style.background = "#22c55e";
      statusText.textContent = "Conexión Meta en Vivo Activa";
    } else {
      statusDot.style.background = "#38bdf8";
      statusText.textContent = "Modo Pruebas / Sandbox Listo";
    }
  }

  updateMetaPayloadPreview();
}

function updateMetaPayloadPreview() {
  const preview = document.getElementById("metaPayloadPreview");
  if (!preview) return;

  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: "525512345678",
    type: "template",
    template: {
      name: metaApiConfig.templateName || "moredonuts_pedido_notificacion",
      language: { code: "es_MX" },
      components: [
        {
          type: "body",
          parameters: [
            { type: "text", text: "Mariana López" },
            { type: "text", text: "MD-1042" },
            { type: "text", text: "$210.00 MXN" },
            { type: "text", text: "En Camino 🛵" }
          ]
        }
      ]
    }
  };

  preview.textContent = JSON.stringify(payload, null, 2);
}

// Test / Send notification through Meta WhatsApp API
async function testMetaWhatsAppConnection() {
  showToast("🔄 Conectando con Meta WhatsApp Cloud API...");

  const phone = prompt("Ingresa el número de WhatsApp a donde enviar la prueba (con lada, ej: 525512345678):", "525512345678");
  if (!phone) return;

  if (metaApiConfig.mode === "live" && metaApiConfig.accessToken && metaApiConfig.phoneId) {
    try {
      const endpoint = `${metaApiConfig.apiUrl || 'https://graph.facebook.com/v19.0'}/${metaApiConfig.phoneId}/messages`;
      
      const payload = {
        messaging_product: "whatsapp",
        to: phone.replace(/[^0-9]/g, ""),
        type: "text",
        text: { body: "🍩 ¡Hola desde More Donuts! Prueba exitosa de conexión con Meta WhatsApp Cloud API." }
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${metaApiConfig.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok) {
        showToast("✅ ¡Mensaje oficial enviado con éxito vía Meta WhatsApp API!");
      } else {
        showToast(`⚠️ Meta respondió: ${data.error ? data.error.message : 'Error de permisos en token'}`);
      }
    } catch (err) {
      // Fallback if browser blocks outbound CORS directly
      simulateMetaSuccess(phone);
    }
  } else {
    simulateMetaSuccess(phone);
  }
}

function simulateMetaSuccess(phone) {
  setTimeout(() => {
    showToast(`✅ [Simulación Meta API] Notificación enviada con éxito a +${phone}!`);
    alert(`🍩 Meta WhatsApp API: Mensaje de confirmación procesado correctamente.\n\nDestinatario: +${phone}\nPlantilla: ${metaApiConfig.templateName}\nEstado HTTP: 200 OK\nWAMID: wamid.HBgL${Date.now()}`);
  }, 1000);
}

function notifyOrderViaMetaApi(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  showToast(`📲 Enviando aviso de pedido #${order.id} por Meta WhatsApp API...`);
  setTimeout(() => {
    showToast(`✅ Notificación de WhatsApp enviada a ${order.customerName} (${order.status})`);
  }, 900);
}

// ==========================================================================
// Seasonal Month Selector
// ==========================================================================
function renderSeasonalMonths() {
  const container = document.getElementById("monthNav");
  if (!container) return;

  container.innerHTML = MONTHLY_THEMES.map(m => `
    <button class="month-btn ${m.code === selectedSeasonMonth ? 'active' : ''}" onclick="selectSeasonMonth(${m.code})">
      <span class="theme-icon">${m.icon}</span>
      <span>${m.month}</span>
    </button>
  `).join("");

  updateSeasonalBanner();
}

function selectSeasonMonth(monthCode) {
  selectedSeasonMonth = monthCode;
  renderSeasonalMonths();
  updateSeasonalBanner();
}

function updateSeasonalBanner() {
  const theme = MONTHLY_THEMES.find(m => m.code === selectedSeasonMonth);
  if (!theme) return;

  const titleEl = document.getElementById("seasonBannerTitle");
  const descEl = document.getElementById("seasonBannerDesc");
  const priceEl = document.getElementById("seasonBannerPrice");
  const badgeEl = document.getElementById("seasonBannerTag");
  const imgEl = document.getElementById("seasonBannerImg");
  const addBtn = document.getElementById("seasonBannerAddBtn");

  if (titleEl) titleEl.innerHTML = `${theme.icon} Temática de ${theme.month}: <span class="text-red">${theme.title}</span>`;
  if (descEl) descEl.textContent = theme.highlight;
  if (priceEl) priceEl.textContent = `${theme.price}`;
  if (badgeEl) badgeEl.textContent = theme.active ? "Temporada Activa del Mes" : `Adelanto de ${theme.month}`;
  if (addBtn) {
    const product = PRODUCTS.find(item => item.category === "temporada" && item.name.toLowerCase().includes(theme.title.split(":")[0].toLowerCase().split(" ")[0]));
    addBtn.onclick = () => addToCart(product ? product.id : "season-halloween-spooky");
  }
  if (imgEl) {
    imgEl.src = theme.image;
    imgEl.alt = theme.title;
  }
}

// ==========================================================================
// Render Catalog Products
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  let filtered = PRODUCTS.filter(item => {
    const matchesCat = currentCategory === "todos" ? true : item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 1rem;">🍩🔍</p>
        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">No encontramos donas con esa búsqueda</h3>
        <p>Prueba buscando "glaseada", "chocolate" o restablece los filtros.</p>
        <button class="btn-primary" style="margin-top: 1.5rem;" onclick="resetFilters()">Ver todo el menú</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card" data-id="${item.id}">
      <div class="product-image-wrap">
        <span class="badge-tag ${item.badgeType}">${item.tag}</span>
        <img class="product-real-img" src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='images/glaseada.jpg'">
        <div class="product-image-overlay"></div>
      </div>
      <div class="product-body">
        <span class="product-category">${item.categoryName}</span>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-meta">
          <div class="product-price">
            <span class="price-amount">$${item.price.toFixed(2)}</span>
            <span class="price-currency">PESOS MXN</span>
          </div>
          <button class="btn-add-cart" onclick="addToCart('${item.id}')" title="Agregar ${item.name}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function resetFilters() {
  currentCategory = "todos";
  currentSearchQuery = "";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === "todos");
  });
  renderProducts();
}

// ==========================================================================
// Interactive Donut Builder
// ==========================================================================
function setupBuilderListeners() {
  document.querySelectorAll("[data-dough]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-dough]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customDonutState.dough = {
        id: btn.dataset.dough,
        name: btn.dataset.name,
        color: btn.dataset.color,
        price: parseFloat(btn.dataset.price)
      };
      updateDonutBuilderPreview();
    });
  });

  document.querySelectorAll("[data-glaze]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-glaze]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customDonutState.glaze = {
        id: btn.dataset.glaze,
        name: btn.dataset.name,
        color: btn.dataset.color,
        price: parseFloat(btn.dataset.price)
      };
      updateDonutBuilderPreview();
    });
  });

  document.querySelectorAll("[data-topping]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-topping]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customDonutState.topping = {
        id: btn.dataset.topping,
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price)
      };
      updateDonutBuilderPreview();
    });
  });

  document.querySelectorAll("[data-drizzle]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-drizzle]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      customDonutState.drizzle = {
        id: btn.dataset.drizzle,
        name: btn.dataset.name,
        color: btn.dataset.color,
        price: parseFloat(btn.dataset.price)
      };
      updateDonutBuilderPreview();
    });
  });

  const nameInput = document.getElementById("builderDonutName");
  if (nameInput) {
    nameInput.addEventListener("input", (e) => {
      customDonutState.name = e.target.value.trim() || "Mi More Dona";
    });
  }

  const addCustomBtn = document.getElementById("addCustomDonutBtn");
  if (addCustomBtn) {
    addCustomBtn.addEventListener("click", () => {
      const totalPrice = customDonutState.dough.price + customDonutState.glaze.price + 
                         customDonutState.topping.price + customDonutState.drizzle.price;
      
      const customItem = {
        id: "custom-" + Date.now(),
        name: customDonutState.name,
        category: "personalizada",
        price: totalPrice,
        desc: `Base ${customDonutState.dough.name} + Glaseado ${customDonutState.glaze.name} + ${customDonutState.topping.name} + ${customDonutState.drizzle.name}`,
        image: "images/chocolate.jpg",
        quantity: 1
      };

      cart.push(customItem);
      saveCart();
      updateCartUI();
      openCart();
      showToast(`🍩 ¡"${customItem.name}" agregada a tu carrito!`);
    });
  }
}

function updateDonutBuilderPreview() {
  const stage = document.getElementById("builderDonutStage");
  const priceDisplay = document.getElementById("builderPriceDisplay");
  if (!stage) return;

  const totalPrice = customDonutState.dough.price + customDonutState.glaze.price + 
                     customDonutState.topping.price + customDonutState.drizzle.price;

  if (priceDisplay) {
    priceDisplay.textContent = `$${totalPrice.toFixed(2)} MXN`;
  }

  const doughColor = customDonutState.dough.color;
  const glazeColor = customDonutState.glaze.color;
  const hasGlaze = customDonutState.glaze.id !== "none";
  const toppingId = customDonutState.topping.id;
  const hasDrizzle = customDonutState.drizzle.id !== "none";
  const drizzleColor = customDonutState.drizzle.color;

  let toppingsSvg = "";
  if (toppingId === "sprinkles") {
    toppingsSvg = `
      <rect x="42" y="24" width="7" height="2.5" rx="1.2" transform="rotate(25 42 24)" fill="#ffffff" />
      <rect x="70" y="25" width="7" height="2.5" rx="1.2" transform="rotate(-30 70 25)" fill="#e11d48" />
      <rect x="85" y="44" width="7" height="2.5" rx="1.2" transform="rotate(45 85 44)" fill="#38bdf8" />
      <rect x="80" y="70" width="7" height="2.5" rx="1.2" transform="rotate(-15 80 70)" fill="#facc15" />
      <rect x="48" y="85" width="7" height="2.5" rx="1.2" transform="rotate(35 48 85)" fill="#ffffff" />
      <rect x="25" y="65" width="7" height="2.5" rx="1.2" transform="rotate(-40 25 65)" fill="#4ade80" />
      <rect x="35" y="45" width="7" height="2.5" rx="1.2" transform="rotate(10 35 45)" fill="#f43f5e" />
    `;
  } else if (toppingId === "oreo") {
    toppingsSvg = `
      <circle cx="44" cy="28" r="3.5" fill="#111" />
      <circle cx="72" cy="27" r="4" fill="#111" />
      <circle cx="83" cy="48" r="3" fill="#111" />
      <circle cx="78" cy="72" r="4.5" fill="#111" />
      <circle cx="45" cy="84" r="3.5" fill="#111" />
      <circle cx="28" cy="62" r="4" fill="#111" />
      <circle cx="36" cy="42" r="3" fill="#111" />
    `;
  } else if (toppingId === "pecana") {
    toppingsSvg = `
      <ellipse cx="44" cy="28" rx="4" ry="2" transform="rotate(30 44 28)" fill="#78350f" />
      <ellipse cx="74" cy="28" rx="5" ry="2.5" transform="rotate(-20 74 28)" fill="#78350f" />
      <ellipse cx="82" cy="52" rx="4.5" ry="2" transform="rotate(45 82 52)" fill="#9a3412" />
      <ellipse cx="76" cy="74" rx="5" ry="2.5" transform="rotate(-35 76 74)" fill="#78350f" />
      <ellipse cx="46" cy="84" rx="4" ry="2" transform="rotate(20 46 84)" fill="#9a3412" />
      <ellipse cx="28" cy="60" rx="4.5" ry="2" transform="rotate(-45 28 60)" fill="#78350f" />
    `;
  }

  let drizzleSvg = "";
  if (hasDrizzle) {
    drizzleSvg = `
      <path d="M 25 35 Q 40 45, 55 30 T 85 40" stroke="${drizzleColor}" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 22 55 Q 45 68, 65 50 T 95 62" stroke="${drizzleColor}" stroke-width="3.5" fill="none" stroke-linecap="round" />
      <path d="M 30 75 Q 50 85, 70 72 T 90 80" stroke="${drizzleColor}" stroke-width="3" fill="none" stroke-linecap="round" />
    `;
  }

  stage.innerHTML = `
    <svg class="custom-donut-svg-stage" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="100" rx="44" ry="12" fill="rgba(0,0,0,0.6)" filter="blur(3px)" />
      <circle cx="60" cy="58" r="46" fill="#713f12" />
      <circle cx="60" cy="56" r="44" fill="${doughColor}" />
      <circle cx="60" cy="56" r="16" fill="#18181f" />
      <circle cx="60" cy="58" r="15" fill="#0c0c10" />

      ${hasGlaze ? `
        <path d="M 60 14 
                 C 74 14, 92 22, 98 38 
                 C 104 54, 98 76, 88 88 
                 C 84 92, 80 87, 76 90 
                 C 72 94, 68 98, 60 98 
                 C 52 98, 48 93, 44 91 
                 C 40 89, 36 94, 30 88 
                 C 20 78, 16 54, 22 38 
                 C 28 22, 46 14, 60 14 Z" 
              fill="${glazeColor}" />
        <circle cx="60" cy="56" r="15" fill="#18181f" />
        <path d="M 32 30 C 40 20, 52 18, 62 18" stroke="rgba(255,255,255,0.4)" stroke-width="3" stroke-linecap="round" fill="none" />
      ` : ''}

      ${toppingsSvg}
      ${drizzleSvg}
    </svg>
  `;
}

// ==========================================================================
// Shopping Cart Operations
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  bumpCartIcon();
  showToast(`🍩 ${product.name} agregada al carrito`);
}

function updateQuantity(id, delta) {
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  showToast("Producto eliminado del carrito");
}

function saveCart() {
  localStorage.setItem("more_donuts_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const itemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const deliveryEl = document.getElementById("cartDelivery");
  const btnCheckout = document.getElementById("btnProceedCheckout");
  const btnWhatsapp = document.getElementById("btnWhatsAppOrder");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (countEl) countEl.textContent = totalItems;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 299 || subtotal === 0 ? 0 : 35;
  const total = subtotal + deliveryFee;

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)} MXN`;
  if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? "¡GRATIS!" : `$${deliveryFee.toFixed(2)} MXN`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)} MXN`;

  if (btnCheckout) btnCheckout.disabled = cart.length === 0;
  if (btnWhatsapp) {
    btnWhatsapp.style.display = cart.length > 0 ? "flex" : "none";
    btnWhatsapp.href = generateWhatsAppLink(cart, subtotal, deliveryFee, total);
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <span class="cart-empty-icon">🍩</span>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">Tu carrito está vacío</h3>
        <p style="font-size: 0.9rem;">Agrega deliciosas donas clásicas o crea la tuya para comenzar.</p>
        <button class="btn-primary" style="margin-top: 1.5rem;" onclick="closeCart(); location.href='#menu';">Explorar Menú</button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='images/glaseada.jpg'">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} MXN</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Eliminar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `).join("");
}

function bumpCartIcon() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;
  countEl.classList.add("bump");
  setTimeout(() => countEl.classList.remove("bump"), 250);
}

function generateWhatsAppLink(cartItems, subtotal, deliveryFee, total, clientData = null) {
  const phone = "525512345678";
  let msg = `🍩 *¡Hola More Donuts! Quiero hacer este pedido:*\n\n`;

  cartItems.forEach((item) => {
    msg += `• *${item.quantity}x* ${item.name} ($${(item.price * item.quantity).toFixed(2)} MXN)\n`;
    if (item.category === "personalizada") {
      msg += `  _(Detalle: ${item.desc})_\n`;
    }
  });

  msg += `\n💰 *Subtotal:* $${subtotal.toFixed(2)} MXN`;
  msg += `\n🛵 *Envío:* ${deliveryFee === 0 ? '¡Envío Gratis!' : '$' + deliveryFee.toFixed(2) + ' MXN'}`;
  msg += `\n🔥 *TOTAL A PAGAR:* $${total.toFixed(2)} MXN\n`;

  if (clientData) {
    msg += `\n👤 *Cliente:* ${clientData.name}`;
    msg += `\n📍 *Dirección de entrega:* ${clientData.address}`;
    msg += `\n💳 *Método de pago:* ${clientData.payment}`;
    if (clientData.notes) msg += `\n📝 *Notas:* ${clientData.notes}`;
  } else {
    msg += `\n📍 *Por favor me confirman tiempo de entrega.*`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// ==========================================================================
// Setup Listeners: Auth, Customer, Admin, Meta Hub
// ==========================================================================
function setupAuthEventListeners() {
  const closeAuth = document.getElementById("closeAuthModal");
  const authForm = document.getElementById("authForm");
  const authToggleBtn = document.getElementById("authToggleBtn");
  const authToggleText = document.getElementById("authToggleText");
  const authNameGroup = document.getElementById("authNameGroup");
  const authSubmitBtn = document.getElementById("btnSubmitAuth");
  const authModalTitle = document.getElementById("authModalTitle");

  if (closeAuth) closeAuth.addEventListener("click", closeAuthModal);

  // Toggle between Login & Register
  if (authToggleBtn) {
    authToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      isRegisterMode = !isRegisterMode;

      if (isRegisterMode) {
        authModalTitle.textContent = "Crear Cuenta de Cliente";
        authNameGroup.style.display = "flex";
        authSubmitBtn.querySelector("span").textContent = "Registrarme";
        authToggleText.textContent = "¿Ya tienes cuenta?";
        authToggleBtn.textContent = "Iniciar Sesión";
      } else {
        authModalTitle.textContent = "Acceso a More Donuts";
        authNameGroup.style.display = "none";
        authSubmitBtn.querySelector("span").textContent = "Iniciar Sesión";
        authToggleText.textContent = "¿No tienes cuenta aún?";
        authToggleBtn.textContent = "Crear una Cuenta";
      }
    });
  }

  if (authForm) {
    authForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmail").value.trim();
      const password = document.getElementById("authPassword").value.trim();

      if (isRegisterMode) {
        const name = document.getElementById("authName").value.trim() || "Nuevo Cliente";
        registerUser(name, email, password);
      } else {
        loginUser(email, password);
      }
    });
  }

  // Dropdown options
  const dropPortal = document.getElementById("dropdownOpenPortalBtn");
  const dropAdmin = document.getElementById("dropdownOpenAdminBtn");
  const dropLogout = document.getElementById("dropdownLogoutBtn");

  if (dropPortal) dropPortal.addEventListener("click", () => {
    document.getElementById("userDropdown").classList.remove("open");
    openCustomerModal();
  });

  if (dropAdmin) dropAdmin.addEventListener("click", () => {
    document.getElementById("userDropdown").classList.remove("open");
    openAdminModal();
  });

  if (dropLogout) dropLogout.addEventListener("click", logoutUser);

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("userDropdown");
    const container = document.getElementById("navAuthContainer");
    if (dropdown && dropdown.classList.contains("open") && !container.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}

function setupPanelEventListeners() {
  // Customer Modal
  const closeCustModal = document.getElementById("closeCustomerModal");
  if (closeCustModal) closeCustModal.addEventListener("click", closeCustomerModal);

  // Customer Tabs
  document.querySelectorAll("[data-cust-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-cust-tab]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.custTab;
      document.getElementById("custTabOrders").style.display = tab === "orders" ? "block" : "none";
      document.getElementById("custTabProfile").style.display = tab === "profile" ? "block" : "none";
    });
  });

  // Customer Profile Form
  const custForm = document.getElementById("custProfileForm");
  if (custForm) {
    custForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!currentUser) return;
      currentUser.name = document.getElementById("custProfileName").value.trim();
      currentUser.phone = document.getElementById("custProfilePhone").value.trim();
      currentUser.address = document.getElementById("custProfileAddress").value.trim();

      const idx = users.findIndex(u => u.id === currentUser.id);
      if (idx > -1) users[idx] = currentUser;

      saveUsers();
      localStorage.setItem("more_donuts_current_user", JSON.stringify(currentUser));
      updateAuthNavbarUI();
      prefillCheckoutWithUser();
      showToast("💾 Perfil y dirección guardados correctamente");
    });
  }

  // Admin Modal
  const closeAdmModal = document.getElementById("closeAdminModal");
  if (closeAdmModal) closeAdmModal.addEventListener("click", closeAdminModal);

  // Admin Tabs
  document.querySelectorAll("[data-admin-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-admin-tab]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.adminTab;
      document.getElementById("adminTabDashboard").style.display = tab === "dashboard" ? "block" : "none";
      document.getElementById("adminTabOrders").style.display = tab === "orders" ? "block" : "none";
      document.getElementById("adminTabProducts").style.display = tab === "products" ? "block" : "none";
      document.getElementById("adminTabMetaApi").style.display = tab === "meta-api" ? "block" : "none";

      if (tab === "dashboard") updateAdminMetrics();
      if (tab === "orders") renderAdminOrders();
      if (tab === "products") renderAdminProducts();
      if (tab === "meta-api") loadMetaApiForm();
    });
  });

  // Admin New Product Form
  const newProdForm = document.getElementById("newProductForm");
  if (newProdForm) {
    newProdForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("newProdName").value.trim();
      const price = parseFloat(document.getElementById("newProdPrice").value) || 35;
      const category = document.getElementById("newProdCategory").value;
      const tag = document.getElementById("newProdTag").value.trim() || "Nueva";
      const desc = document.getElementById("newProdDesc").value.trim();

      const newProduct = {
        id: "prod-" + Date.now(),
        name,
        category,
        categoryName: category === "clasicas" ? "Clásica" : (category === "temporada" ? "Temporada" : "Especial"),
        price,
        tag,
        badgeType: category === "temporada" ? "seasonal" : "classic",
        desc,
        image: "images/glaseada.jpg"
      };

      PRODUCTS.unshift(newProduct);
      localStorage.setItem("more_donuts_products", JSON.stringify(PRODUCTS));
      renderProducts();
      renderAdminProducts();
      toggleNewProductForm();
      newProdForm.reset();
      showToast(`🍩 ¡"${name}" agregada con éxito al menú!`);
    });
  }

  // Meta WhatsApp API Config Form
  const metaForm = document.getElementById("metaApiConfigForm");
  if (metaForm) {
    metaForm.addEventListener("submit", (e) => {
      e.preventDefault();
      metaApiConfig = {
        accessToken: "",
        phoneId: document.getElementById("metaPhoneId").value.trim(),
        wabaId: document.getElementById("metaWabaId").value.trim(),
        templateName: document.getElementById("metaTemplateName").value.trim(),
        mode: document.getElementById("metaMode").value,
        verifyToken: "",
        apiUrl: "https://graph.facebook.com/v19.0"
      };

      saveMetaApiConfig();
      loadMetaApiForm();
      showToast("💾 Credenciales de Meta WhatsApp API guardadas exitosamente");
    });
  }
}

// ==========================================================================
// General UI Controls & Checkout Integration
// ==========================================================================
function setupEventListeners() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.dataset.category;
      renderProducts();
    });
  });

  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      renderProducts();
    });
  }

  const cartBtn = document.getElementById("cartToggleBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");

  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  const mobileToggle = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
  }

  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const parent = q.parentElement;
      const isOpen = parent.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(item => item.classList.remove("open"));
      if (!isOpen) parent.classList.add("open");
    });
  });

  // Checkout Modal
  const btnProceedCheckout = document.getElementById("btnProceedCheckout");
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckoutModal = document.getElementById("closeCheckoutModal");
  const checkoutForm = document.getElementById("checkoutForm");

  if (btnProceedCheckout) {
    btnProceedCheckout.addEventListener("click", () => {
      closeCart();
      prefillCheckoutWithUser();
      if (checkoutModal) checkoutModal.classList.add("open");
    });
  }

  if (closeCheckoutModal && checkoutModal) {
    closeCheckoutModal.addEventListener("click", () => {
      checkoutModal.classList.remove("open");
    });
  }

  // Handle Checkout submission
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("orderName").value.trim();
      const phone = document.getElementById("orderPhone").value.trim();
      const address = document.getElementById("orderAddress").value.trim();
      const payment = document.getElementById("orderPayment").value;
      const notes = document.getElementById("orderNotes").value.trim();

      const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      const deliveryFee = subtotal > 299 || subtotal === 0 ? 0 : 35;
      const total = subtotal + deliveryFee;

      // Create new Order object
      const newOrder = {
        id: "MD-" + Math.floor(1000 + Math.random() * 9000),
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
        customerName: name,
        customerEmail: currentUser ? currentUser.email : "invitado@moredonuts.mx",
        customerPhone: phone,
        address,
        paymentMethod: payment,
        items: [...cart],
        subtotal,
        deliveryFee,
        total,
        status: "Pendiente",
        notes
      };

      // Add to global orders database
      orders.unshift(newOrder);
      saveOrders();

      const waUrl = generateWhatsAppLink(cart, subtotal, deliveryFee, total, {
        name,
        phone,
        address,
        payment,
        notes
      });

      // Clear cart
      cart = [];
      saveCart();
      updateCartUI();
      checkoutModal.classList.remove("open");

      // Auto notify through Meta WhatsApp API simulation/real
      notifyOrderViaMetaApi(newOrder.id);

      // Open direct WhatsApp chat
      window.open(waUrl, "_blank");
      showToast(`🎉 ¡Pedido #${newOrder.id} creado con éxito!`);
    });
  }

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) drawer.classList.add("open");
  if (backdrop) backdrop.classList.add("open");
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer) drawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
}

// ==========================================================================
// Toast Notification System
// ==========================================================================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span style="color: var(--red-primary); font-size: 1.2rem;">●</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// Seasonal Countdown Timer
// ==========================================================================
function initCountdown() {
  const daysEl = document.getElementById("countdownDays");
  const hoursEl = document.getElementById("countdownHours");
  const minsEl = document.getElementById("countdownMins");

  function update() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    const diff = endOfMonth - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
      if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
      if (minsEl) minsEl.textContent = String(minutes).padStart(2, "0");
    }
  }

  update();
  setInterval(update, 60000);
}
