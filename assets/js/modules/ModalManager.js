// Módulo para manejar el modal de detalles de la persona
export class ModalManager {
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
        this.populateModalData(person);
        this.showModal();
    }
    
    populateModalData(person) {
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
    }
    
    showModal() {
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
    
    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
} 