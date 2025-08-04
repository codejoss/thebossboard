// Módulo para manejar el formulario de registro
import { RegistrationManager } from './modules/RegistrationManager.js';

// Inicializar la aplicación de registro cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new RegistrationManager();
});

// Función global para cerrar el modal de éxito y redirigir
definirRedireccion();
function definirRedireccion() {
    window.closeSuccessModal = function() {
        const modal = document.getElementById('success-modal');
        modal.classList.add('hidden');
        window.location.href = 'index.html';
    };
}

// Redirección automática después de mostrar el modal de éxito
const observer = new MutationObserver((mutations) => {
    const modal = document.getElementById('success-modal');
    if (modal && !modal.classList.contains('hidden')) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000); // 3 segundos
    }
});
observer.observe(document.body, { childList: false, subtree: true, attributes: true }); 