// Módulo principal de la aplicación que coordina todos los demás módulos
import { DataManager } from './DataManager.js';
import { CardBuilder } from './CardBuilder.js';
import { ModalManager } from './ModalManager.js';

export class CommunityApp {
    constructor() {
        this.modalManager = new ModalManager();
        this.cardsContainer = document.getElementById('cards-container');
        this.init();
    }
    
    async init() {
        try {
            // Mostrar mensaje de carga
            CardBuilder.showLoadingState(this.cardsContainer);
            
            // Cargar datos
            const people = await DataManager.loadData();
            
            if (people.length === 0) {
                CardBuilder.showErrorState(this.cardsContainer);
                return;
            }
            
            // Add a small delay before rendering cards to ensure smooth transition from loading
            setTimeout(() => {
                // Renderizar tarjetas
                CardBuilder.renderCards(people, this.cardsContainer);
                
                // Agregar event listeners a las tarjetas
                this.setupCardListeners();
            }, 200);
            
        } catch (error) {
            console.error('Error al inicializar la aplicación:', error);
            CardBuilder.showErrorState(this.cardsContainer, 'Error al cargar la comunidad.');
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