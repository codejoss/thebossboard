// Módulo para manejar el formulario de registro
export class RegistrationManager {
    constructor() {
        this.form = document.getElementById('registration-form');
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }
    
    async handleFormSubmission() {
        try {
            // Obtener los datos del formulario
            const formData = this.getFormData();
            
            // Validar los datos
            if (!this.validateFormData(formData)) {
                return;
            }
            
            // Mostrar estado de carga
            this.showLoadingState();
            
            // Agregar el nuevo miembro al archivo JSON
            await this.addNewMember(formData);
            
            // Mostrar modal de éxito
            this.showSuccessModal();
            
            // Limpiar el formulario
            this.form.reset();
            
        } catch (error) {
            console.error('Error al procesar el registro:', error);
            this.showErrorState('Error al procesar el registro. Por favor, intenta de nuevo.');
        }
    }
    
    getFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value.trim();
        }
        
        // Agregar el campo autorizado como false
        data.autorizado = false;
        
        return data;
    }
    
    validateFormData(data) {
        const requiredFields = ['nombre', 'edad', 'ciudad_pais', 'profesion', 'proposito_sueno', 'motivacion', 'red_social', 'mensaje', 'foto'];
        
        for (let field of requiredFields) {
            if (!data[field] || data[field].length === 0) {
                this.showErrorState(`El campo "${field}" es obligatorio.`);
                return false;
            }
        }
        
        // Validar edad
        const edad = parseInt(data.edad);
        if (isNaN(edad) || edad < 18 || edad > 100) {
            this.showErrorState('La edad debe ser un número entre 18 y 100.');
            return false;
        }
        
        // Validar URL de red social
        if (!this.isValidUrl(data.red_social)) {
            this.showErrorState('Por favor, ingresa una URL válida para tu red social.');
            return false;
        }
        
        // Validar URL de foto
        if (!this.isValidUrl(data.foto)) {
            this.showErrorState('Por favor, ingresa una URL válida para tu foto de perfil.');
            return false;
        }
        
        return true;
    }
    
    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    async addNewMember(memberData) {
        try {
            // En un entorno real, aquí enviarías los datos a un servidor
            // Por ahora, simularemos el proceso
            
            console.log('📝 Nuevo miembro registrado:', memberData);
            
            // Simular delay de procesamiento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // En un entorno real, aquí se guardaría en el archivo JSON
            // Por ahora, solo mostramos los datos en consola
            this.logMemberData(memberData);
            
        } catch (error) {
            throw new Error('Error al agregar el nuevo miembro');
        }
    }
    
    logMemberData(memberData) {
        console.log('🎯 Datos del nuevo miembro para agregar al JSON:');
        console.log(JSON.stringify(memberData, null, 2));
        console.log('📋 Instrucciones para agregar manualmente al archivo community.json:');
        console.log('1. Abre el archivo assets/data/community.json');
        console.log('2. Agrega el siguiente objeto al final del array (antes del corchete de cierre):');
        console.log(JSON.stringify(memberData, null, 2));
        console.log('3. Asegúrate de agregar una coma después del objeto anterior');
    }
    
    showLoadingState() {
        const submitButton = this.form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <div class="flex items-center justify-center">
                <div class="loading-spinner w-5 h-5 mr-2"></div>
                Procesando...
            </div>
        `;
    }
    
    showSuccessModal() {
        const modal = document.getElementById('success-modal');
        modal.classList.remove('hidden');
    }
    
    showErrorState(message) {
        // Crear o actualizar mensaje de error
        let errorDiv = document.getElementById('error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-message';
            errorDiv.className = 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6';
            this.form.insertBefore(errorDiv, this.form.firstChild);
        }
        
        errorDiv.innerHTML = `
            <div class="flex items-center">
                <span class="text-red-500 mr-2">❌</span>
                <span>${message}</span>
            </div>
        `;
        
        // Restaurar botón
        this.restoreSubmitButton();
        
        // Scroll al error
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remover error después de 5 segundos
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    restoreSubmitButton() {
        const submitButton = this.form.querySelector('button[type="submit"]');
        submitButton.disabled = false;
        submitButton.innerHTML = '📤 Subir Datos';
    }
} 