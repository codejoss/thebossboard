// Datos de ejemplo directamente en JavaScript (para evitar problemas de CORS)
const sampleData = [
    {
        "nombre": "María González",
        "edad": 28,
        "ciudad_pais": "Madrid, España",
        "profesion": "Desarrolladora Frontend",
        "proposito_sueno": "Crear aplicaciones web que hagan la vida más fácil a las personas",
        "motivacion": "La pasión por la tecnología y el impacto positivo que puede tener en la sociedad",
        "red_social": "https://linkedin.com/in/mariagonzalez",
        "mensaje": "Creo firmemente que la tecnología debe ser accesible para todos. Mi objetivo es crear experiencias digitales inclusivas y significativas.",
        "foto": "https://images.unsplash.com/photo-1494790108755-2616b612b194?w=400&h=400&fit=crop&crop=face"
    },
    {
        "nombre": "Carlos Rodríguez",
        "edad": 35,
        "ciudad_pais": "Ciudad de México, México",
        "profesion": "Diseñador UX/UI",
        "proposito_sueno": "Diseñar interfaces que conecten emocionalmente con los usuarios",
        "motivacion": "La búsqueda constante de la simplicidad y elegancia en el diseño",
        "red_social": "https://behance.net/carlosrodriguez",
        "mensaje": "El buen diseño es invisible. Trabajo cada día para crear experiencias que sean intuitivas y memorables.",
        "foto": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
        "nombre": "Ana Martínez",
        "edad": 31,
        "ciudad_pais": "Buenos Aires, Argentina",
        "profesion": "Product Manager",
        "proposito_sueno": "Liderar equipos para crear productos que resuelvan problemas reales",
        "motivacion": "El desafío de convertir ideas en productos exitosos que impacten positivamente",
        "red_social": "https://twitter.com/anamartinez",
        "mensaje": "La innovación surge cuando combinamos tecnología, diseño y una comprensión profunda de las necesidades humanas.",
        "foto": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
        "nombre": "David Chen",
        "edad": 29,
        "ciudad_pais": "Barcelona, España",
        "profesion": "Desarrollador Full Stack",
        "proposito_sueno": "Construir sistemas escalables que soporten el crecimiento de startups",
        "motivacion": "La satisfacción de resolver problemas complejos con código elegante",
        "red_social": "https://github.com/davidchen",
        "mensaje": "Cada línea de código es una oportunidad para hacer algo mejor. Me apasiona la arquitectura de software y las buenas prácticas.",
        "foto": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
        "nombre": "Laura Sánchez",
        "edad": 26,
        "ciudad_pais": "Bogotá, Colombia",
        "profesion": "Data Scientist",
        "proposito_sueno": "Usar datos para generar insights que transformen industrias",
        "motivacion": "La capacidad de los datos para revelar patrones ocultos y predecir el futuro",
        "red_social": "https://linkedin.com/in/laurasanchez",
        "mensaje": "Los datos cuentan historias fascinantes. Mi trabajo es descifrar esas historias y convertirlas en decisiones inteligentes.",
        "foto": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
        "nombre": "Roberto Silva",
        "edad": 33,
        "ciudad_pais": "São Paulo, Brasil",
        "profesion": "DevOps Engineer",
        "proposito_sueno": "Automatizar procesos para que los equipos puedan enfocarse en crear",
        "motivacion": "La eficiencia y la mejora continua de los procesos de desarrollo",
        "red_social": "https://linkedin.com/in/robertosilva",
        "mensaje": "La infraestructura debe ser invisible pero robusta. Trabajo para que los desarrolladores puedan desplegar sin preocupaciones.",
        "foto": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
];

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
                         class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                </div>
                
                <!-- Card Info -->
                <div class="flex-1 flex flex-col justify-between text-center">
                    <div>
                        <h3 class="text-lg font-semibold text-stone-800 mb-2 line-clamp-2">
                            ${person.nombre}
                        </h3>
                        <p class="text-sm text-stone-600 mb-3">
                            ${person.ciudad_pais}
                        </p>
                    </div>
                    
                    <div class="space-y-3">
                        <div class="bg-gradient-to-r from-stone-500 to-stone-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                            ${person.profesion}
                        </div>
                        
                        <a href="${person.red_social}" 
                           class="inline-flex items-center justify-center w-full px-4 py-2 bg-stone-200/80 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-full transition-all duration-200 hover:shadow-md backdrop-blur-sm border border-stone-300/50"
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