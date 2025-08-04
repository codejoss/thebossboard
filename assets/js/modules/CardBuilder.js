// Módulo para crear las tarjetas de la comunidad
export class CardBuilder {
    static cardColors = [
        'from-stone-50 to-stone-100 border-stone-200',
        /* 'from-amber-50 to-amber-100 border-amber-200',
        'from-yellow-50 to-yellow-100 border-yellow-200',
        'from-orange-50 to-orange-100 border-orange-200',
        'from-red-50 to-red-100 border-red-200',
        'from-rose-50 to-rose-100 border-rose-200',
        'from-pink-50 to-pink-100 border-pink-200',
        'from-stone-100 to-stone-200 border-stone-300' */
    ];
    
    static createCard(person, index) {
        const cardColor = this.cardColors[index % this.cardColors.length];
        
        const card = document.createElement('div');
        card.className = `group bg-gradient-to-br ${cardColor} backdrop-blur-sm border rounded-2xl p-6 cursor-pointer card-hover opacity-0 translate-y-8`;
        card.setAttribute('data-person', JSON.stringify(person));
        card.setAttribute('data-index', index);
        
        card.innerHTML = this.generateCardHTML(person);
        
        return card;
    }
    
    static generateCardHTML(person) {
        return `
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
                           class="inline-flex items-center justify-center w-full px-4 py-2 bg-stone-200/80 hover:bg-stone-200 text-stone-700 text-sm font-bold rounded-full transition-all duration-200 hover:shadow-md backdrop-blur-sm border border-stone-300/50 social-button"
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
    }
    
    static renderCards(people, container) {
        container.innerHTML = '';
        people.forEach((person, index) => {
            const card = this.createCard(person, index);
            container.appendChild(card);
        });
        
        // Animate cards in with staggered delay
        this.animateCardsIn(container);
    }
    
    static animateCardsIn(container) {
        const cards = container.querySelectorAll('[data-index]');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-8');
                card.classList.add('opacity-100', 'translate-y-0');
            }, index * 100); // Stagger each card by 100ms
        });
    }
    
    static showLoadingState(container) {
        container.innerHTML = `
            <div class="col-span-full flex items-center justify-center py-12">
                <div class="text-center">
                    <div class="loading-spinner w-12 h-12 mx-auto mb-4"></div>
                    <p class="text-stone-700 text-xl font-light">Cargando comunidad...</p>
                </div>
            </div>
        `;
    }
    
    static showErrorState(container, message = 'No se pudieron cargar los datos de la comunidad.') {
        container.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-stone-700 text-xl font-light">${message}</p>
            </div>
        `;
    }
} 