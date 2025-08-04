// Módulo para manejar el formulario de registro
import { RegistrationManager } from './modules/RegistrationManager.js';

// Inicializar la aplicación de registro cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new RegistrationManager();
});

// Función global para cerrar el modal de éxito
window.closeSuccessModal = function() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('hidden');
}; 