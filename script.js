// Sample data when the data.json don't load
const sampleData = [
    {
    "nombre": "Andrea Cazarín",
    "edad": 31,
    "ciudad_pais": "Puebla, México",
    "profesion": "Fundadora de The Boss Room VIP",
    "proposito_sueno": "Empoderar a mujeres para que descubran su poder personal, construyan libertad financiera desde el mundo digital y se atrevan a vivir una vida que se sienta libre, coherente y suya.",
    "motivacion": "Ver a más mujeres apostando por ellas mismas, creando libertad con lo que aman y demostrando que sí pueden. Me mueve saber que no tienen que hacerlo solas, y que yo puedo ser parte de ese impulso.",
    "red_social": "https://www.instagram.com/_andreacazarin",
    "mensaje": "Que no están solas. Que este espacio es para crecer, equivocarnos, levantarnos y lograrlo juntas. Aquí hay apoyo real, impulso y herramientas para que construyas tu camino con propósito y poder.",
    "foto": "./assets/profileimg/andrea_cazarin.jpg"
  }
]

// Colores para las tarjetas
const cardColors = [
    'from-stone-50 to-stone-100 border-stone-200',
    /*'from-amber-50 to-amber-100 border-amber-200',
    'from-yellow-50 to-yellow-100 border-yellow-200',
    'from-orange-50 to-orange-100 border-orange-200',
    'from-red-50 to-red-100 border-red-200',
    'from-rose-50 to-rose-100 border-rose-200',
    'from-pink-50 to-pink-100 border-pink-200',
    'from-stone-100 to-stone-200 border-stone-300'*/
];

// Módulo para manejar los datos
class DataManager {
    static async loadData() {
        try {
            // Intentar cargar desde JSON primero
            const response = await fetch('data.json');
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log('Usando datos de ejemplo integrados');
        }
        // Si falla, usar datos de ejemplo
        return sampleData;
    }
}

// Módulo para crear las tarjetas
class CardBuilder {
    static createCard(person, index) {
        const cardColor = cardColors[index % cardColors.length];
        
        const card = document.createElement('div');
        card.className = `group bg-gradient-to-br ${cardColor} backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-slide-up`;
        card.style.animationDelay = `${index * 100}ms`;
        card.setAttribute('data-person', JSON.stringify(person));
        
        card.innerHTML = `
            <div class="flex flex-col h-full">
                <!-- Profile Photo -->
                <div class="flex justify-center mb-4">
                    <img src="${person.foto}" alt="${person.nombre}" 
                         class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:shadow-xl">
                </div>
                
                <!-- Card Info -->
                <div class="flex-1 flex flex-col justify-between text-center">
                    <div>
                        <h3 class="text-lg font-semibold text-stone-800 mb-2 line-clamp-2 capitalize">
                            ${person.nombre}
                        </h3>
                        <p class="font-bold text-sm text-stone-500 mb-3">
                            ${person.ciudad_pais}
                        </p>
                    </div>
                    
                    <div class="space-y-3">
                        <div class="bg-gradient-to-r from-[#968279] to-[#8d766c] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                            ${person.profesion}
                        </div>
                        
                        <a href="${person.red_social}" 
                           class="inline-flex items-center justify-center w-full px-4 py-2 bg-stone-200/80 hover:bg-stone-200 text-stone-700 text-sm font-bold rounded-full transition-all duration-200 hover:shadow-md backdrop-blur-sm border border-stone-300/50"
                           target="_blank" rel="noopener noreferrer" 
                           onclick="event.stopPropagation()">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                            Ver perfil
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    static renderCards(people, container) {
        container.innerHTML = '';
        people.forEach((person, index) => {
            const card = this.createCard(person, index);
            container.appendChild(card);
        });
    }
}

// Módulo para manejar el modal
class ModalManager {
    constructor() {
        this.modal = document.getElementById('modal');
        this.closeBtn = document.querySelector('.close');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Cerrar modal con X
        this.closeBtn.parentElement.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Cerrar modal clickeando fuera
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }
    
    openModal(person) {
        // Llenar los datos del modal
        document.getElementById('modal-name').textContent = person.nombre;
        document.getElementById('modal-age').textContent = person.edad;
        document.getElementById('modal-location').textContent = person.ciudad_pais;
        document.getElementById('modal-profession').textContent = person.profesion;
        document.getElementById('modal-purpose').textContent = person.proposito_sueno;
        document.getElementById('modal-motivation').textContent = person.motivacion;
        document.getElementById('modal-message').textContent = person.mensaje;
        
        // Configurar foto
        const modalPhoto = document.getElementById('modal-photo');
        modalPhoto.src = person.foto;
        modalPhoto.alt = person.nombre;
        
        // Configurar enlace social
        const socialLink = document.getElementById('modal-social-link');
        socialLink.href = person.red_social;
        
        // Mostrar modal
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
    
    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
}

// Módulo principal de la aplicación
class CommunityApp {
    constructor() {
        this.modalManager = new ModalManager();
        this.cardsContainer = document.getElementById('cards-container');
        this.init();
    }
    
    async init() {
        try {
            // Mostrar mensaje de carga
            this.cardsContainer.innerHTML = `
                <div class="col-span-full flex items-center justify-center py-12">
                    <div class="text-center">
                        <div class="animate-spin rounded-full h-12 w-12 border-4 border-stone-600 border-t-transparent mx-auto mb-4"></div>
                        <p class="text-stone-700 text-xl font-light">Cargando comunidad...</p>
                    </div>
                </div>
            `;
            
            // Cargar datos
            const people = await DataManager.loadData();
            
            if (people.length === 0) {
                this.cardsContainer.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <p class="text-stone-700 text-xl font-light">No se pudieron cargar los datos de la comunidad.</p>
                    </div>
                `;
                return;
            }
            
            // Renderizar tarjetas
            CardBuilder.renderCards(people, this.cardsContainer);
            
            // Agregar event listeners a las tarjetas
            this.setupCardListeners();
            
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
            this.cardsContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-stone-700 text-xl font-light">Error al cargar la comunidad.</p>
                </div>
            `;
        }
    }
    
    setupCardListeners() {
        const cards = this.cardsContainer.querySelectorAll('[data-person]');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // No abrir modal si se clickea en el enlace social
                if (e.target.closest('a')) {
                    return;
                }
                
                const personData = JSON.parse(card.getAttribute('data-person'));
                this.modalManager.openModal(personData);
            });
        });
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CommunityApp();
});