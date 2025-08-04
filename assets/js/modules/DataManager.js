// Módulo para manejar la carga de datos de la comunidad
export class DataManager {
    static async loadData() {
        try {
            // Intentar cargar desde JSON primero
            const response = await fetch('./assets/data/community.json');
            if (response.ok) {
                const allData = await response.json();
                // Filtrar solo los miembros autorizados
                return this.filterAuthorizedMembers(allData);
            }
        } catch (error) {
            console.log('Error cargando datos desde JSON, usando datos de ejemplo:', error);
        }
        
        // Si falla, usar datos de ejemplo
        return this.getSampleData();
    }
    
    static filterAuthorizedMembers(data) {
        // Filtrar solo los miembros que tengan autorizado: true
        const authorizedMembers = data.filter(member => member.autorizado === true);
        const totalMembers = data.length;
        const authorizedCount = authorizedMembers.length;
        
        console.log(`📊 Total de miembros: ${totalMembers}`);
        console.log(`✅ Miembros autorizados: ${authorizedCount}`);
        console.log(`❌ Miembros pendientes: ${totalMembers - authorizedCount}`);
        
        return authorizedMembers;
    }
    
    static getSampleData() {
        return [
            {
                "nombre": "Andrea Cazarín",
                "edad": 31,
                "ciudad_pais": "Puebla, México",
                "profesion": "Fundadora de The Boss Room VIP",
                "proposito_sueno": "Empoderar a mujeres para que descubran su poder personal, construyan libertad financiera desde el mundo digital y se atrevan a vivir una vida que se sienta libre, coherente y suya.",
                "motivacion": "Ver a más mujeres apostando por ellas mismas, creando libertad con lo que aman y demostrando que sí pueden. Me mueve saber que no tienen que hacerlo solas, y que yo puedo ser parte de ese impulso.",
                "red_social": "https://www.instagram.com/_andreacazarin",
                "mensaje": "Que no están solas. Que este espacio es para crecer, equivocarnos, levantarnos y lograrlo juntas. Aquí hay apoyo real, impulso y herramientas para que construyas tu camino con propósito y poder.",
                "foto": "./assets/images/profiles/andrea_cazarin.jpg",
                "autorizado": true
            }
        ];
    }
} 