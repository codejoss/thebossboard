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
        
        // Event listener para vista previa de imagen
        const fotoInput = document.getElementById('foto');
        fotoInput.addEventListener('change', (e) => {
            this.handleImagePreview(e);
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
            if (key === 'foto') {
                // Manejar el archivo de imagen
                const file = value;
                if (file && file.size > 0) {
                    const fileName = this.generateFileName(data.nombre, file);
                    data.foto = `./assets/images/profiles/${fileName}`;
                    data.originalFile = file; // Guardar el archivo original para procesamiento
                }
            } else {
                data[key] = value.trim();
            }
        }
        
        // Agregar el campo autorizado como false
        data.autorizado = false;
        
        return data;
    }
    
    generateFileName(nombre, file) {
        // Convertir nombre a formato de archivo: "Ana Karen González" -> "ana-karen-gonzalez"
        const normalizedName = nombre
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remover acentos
            .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
            .replace(/\s+/g, '-') // Reemplazar espacios con guiones
            .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
            .replace(/^-|-$/g, ''); // Remover guiones al inicio y final
        
        // Obtener la extensión del archivo original
        const extension = file.name.split('.').pop().toLowerCase();
        
        return `${normalizedName}.${extension}`;
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
        
        // Validar archivo de imagen
        if (data.originalFile) {
            const file = data.originalFile;
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (file.size > maxSize) {
                this.showErrorState('La imagen es demasiado grande. El tamaño máximo es 5MB.');
                return false;
            }
            
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.type)) {
                this.showErrorState('Formato de imagen no válido. Usa JPG, PNG o GIF.');
                return false;
            }
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
    
    handleImagePreview(event) {
        const file = event.target.files[0];
        const previewDiv = document.getElementById('image-preview');
        const previewImg = document.getElementById('preview-img');
        const fileNameDiv = document.getElementById('file-name');
        
        if (file) {
            // Validar tipo de archivo
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.type)) {
                this.showErrorState('Formato de imagen no válido. Usa JPG, PNG o GIF.');
                event.target.value = '';
                previewDiv.classList.add('hidden');
                return;
            }
            
            // Validar tamaño
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                this.showErrorState('La imagen es demasiado grande. El tamaño máximo es 5MB.');
                event.target.value = '';
                previewDiv.classList.add('hidden');
                return;
            }
            
            // Mostrar vista previa
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImg.src = e.target.result;
                previewDiv.classList.remove('hidden');
                fileNameDiv.textContent = `Archivo: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
            };
            reader.readAsDataURL(file);
        } else {
            previewDiv.classList.add('hidden');
        }
    }
    
    async addNewMember(memberData) {
        try {
            console.log('📝 Nuevo miembro registrado:', memberData);
            
            // Simular delay de procesamiento
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Procesar el archivo de imagen si existe
            if (memberData.originalFile) {
                await this.processImageFile(memberData);
            }
            
            // Preparar datos para el JSON (sin el archivo original)
            const jsonData = { ...memberData };
            delete jsonData.originalFile;
            
            // Mostrar instrucciones para agregar al JSON
            this.logMemberData(jsonData);
            
        } catch (error) {
            throw new Error('Error al agregar el nuevo miembro');
        }
    }
    
    async processImageFile(memberData) {
        const file = memberData.originalFile;
        const fileName = memberData.foto.split('/').pop(); // Obtener solo el nombre del archivo
        
        console.log('📁 Procesando archivo de imagen:', fileName);
        console.log('📋 Instrucciones para guardar la imagen:');
        console.log(`1. Guarda el archivo "${file.name}" como "${fileName}"`);
        console.log(`2. Colócalo en la carpeta: assets/images/profiles/`);
        console.log(`3. Asegúrate de que el archivo sea accesible desde la web`);
        
        // En un entorno real, aquí se subiría el archivo al servidor
        // Por ahora, solo mostramos las instrucciones
    }
    
    logMemberData(memberData) {
        console.log('🎯 Datos del nuevo miembro para agregar al JSON:');
        console.log(JSON.stringify(memberData, null, 2));
        console.log('📋 Instrucciones para agregar manualmente al archivo community.json:');
        console.log('1. Abre el archivo assets/data/community.json');
        console.log('2. Agrega el siguiente objeto al final del array (antes del corchete de cierre):');
        console.log(JSON.stringify(memberData, null, 2));
        console.log('3. Asegúrate de agregar una coma después del objeto anterior');
        console.log('4. El miembro aparecerá con autorizado: false hasta que lo cambies a true');
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