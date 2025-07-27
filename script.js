// FUTUR Certify - Main Script
class FuturCertify {
    constructor() {
        this.students = this.loadStudents();
        this.initializeEventListeners();
        this.initializeSampleData();
    }

    // Load students from localStorage
    loadStudents() {
        const stored = localStorage.getItem('futur_students');
        return stored ? JSON.parse(stored) : [];
    }

    // Save students to localStorage
    saveStudents() {
        localStorage.setItem('futur_students', JSON.stringify(this.students));
    }

    // Initialize sample data if empty
    initializeSampleData() {
        if (this.students.length === 0) {
            // Only initialize with empty array, no sample data
            this.students = [];
            this.saveStudents();
        }
    }

    // Initialize event listeners
    initializeEventListeners() {
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');

        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.searchStudent());
        }

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchStudent();
                }
            });

            // Auto-format matricule input
            searchInput.addEventListener('input', (e) => {
                let value = e.target.value.toUpperCase();
                // Remove any non-alphanumeric characters except spaces
                value = value.replace(/[^A-Z0-9]/g, '');
                e.target.value = value;
            });
        }
    }

    // Search for student by matricule
    async searchStudent() {
        const searchInput = document.getElementById('searchInput');
        const matricule = searchInput.value.trim();

        if (!matricule) {
            this.showNotification('Veuillez entrer un numéro matricule', 'error');
            return;
        }

        this.showLoading(true);
        
        // Simulate search delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));

        const student = this.students.find(s => 
            s.matricule.toLowerCase() === matricule.toLowerCase()
        );

        this.showLoading(false);

        if (student) {
            this.displayStudentCard(student);
        } else {
            this.showNoResults();
        }
    }

    // Display student card
    displayStudentCard(student) {
        const resultsSection = document.getElementById('resultsSection');
        const studentCard = document.getElementById('studentCard');
        const noResults = document.getElementById('noResults');

        // Hide no results section
        noResults.classList.add('hidden');

        // Create student card HTML
        const cardHTML = `
            <div class="student-card fade-in">
                <div class="flex flex-col md:flex-row">
                    <!-- Photo Section -->
                    <div class="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-cyan/10 to-orange/10">
                        <div class="relative mb-6">
                            <img 
                                src="${student.photo || 'https://via.placeholder.com/150x150/0b1d3a/00ffff?text=' + student.prenom.charAt(0) + student.nom.charAt(0)}" 
                                alt="${student.prenom} ${student.nom}"
                                class="profile-picture"
                                onerror="this.src='https://via.placeholder.com/150x150/0b1d3a/00ffff?text=${student.prenom.charAt(0)}${student.nom.charAt(0)}'"
                            >
                            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <i class="fas fa-check text-white text-sm"></i>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="inline-flex items-center px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-full text-green-400 text-sm font-medium mb-4">
                                <i class="fas fa-certificate mr-2"></i>
                                Certificat Vérifié
                            </div>
                        </div>
                    </div>

                    <!-- Info Section -->
                    <div class="md:w-2/3 p-8">
                        <div class="mb-6">
                            <h2 class="text-3xl font-bold text-white mb-2">
                                ${student.prenom} ${student.nom}
                            </h2>
                            <div class="flex items-center space-x-4 text-cyan">
                                <span class="flex items-center">
                                    <i class="fas fa-id-card mr-2"></i>
                                    ${student.matricule}
                                </span>
                                <span class="flex items-center">
                                    <i class="fas fa-calendar mr-2"></i>
                                    ${new Date().getFullYear()}
                                </span>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-lg font-semibold text-white mb-3 flex items-center">
                                <i class="fas fa-graduation-cap text-orange mr-2"></i>
                                Filières Certifiées
                            </h3>
                            <div class="flex flex-wrap gap-2">
                                ${student.filieres.map(filiere => `
                                    <span class="badge">${filiere}</span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="border-t border-cyan/20 pt-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div class="flex items-center text-gray-300">
                                    <i class="fas fa-building text-cyan mr-3"></i>
                                    <span>Programme FUTUR</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <i class="fas fa-award text-orange mr-3"></i>
                                    <span>Certification Officielle</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <i class="fas fa-shield-alt text-cyan mr-3"></i>
                                    <span>Authentifié</span>
                                </div>
                                <div class="flex items-center text-gray-300">
                                    <i class="fas fa-calendar-check text-orange mr-3"></i>
                                    <span>Valide ${new Date().getFullYear()}</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8 flex flex-col sm:flex-row gap-4">
                            <button onclick="window.print()" class="btn-secondary flex-1">
                                <i class="fas fa-print mr-2"></i>
                                Imprimer le Certificat
                            </button>
                            <button onclick="clearSearch()" class="btn-primary flex-1">
                                <i class="fas fa-search mr-2"></i>
                                Nouvelle Recherche
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        studentCard.innerHTML = cardHTML;
        resultsSection.classList.remove('hidden');

        // Smooth scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Show no results message
    showNoResults() {
        const resultsSection = document.getElementById('resultsSection');
        const noResults = document.getElementById('noResults');

        resultsSection.classList.add('hidden');
        noResults.classList.remove('hidden');

        // Smooth scroll to no results
        noResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Show/hide loading animation
    showLoading(show) {
        const loading = document.getElementById('loading');
        const resultsSection = document.getElementById('resultsSection');
        const noResults = document.getElementById('noResults');

        if (show) {
            loading.classList.remove('hidden');
            resultsSection.classList.add('hidden');
            noResults.classList.add('hidden');
        } else {
            loading.classList.add('hidden');
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-circle' : 
                    'info-circle';

        notification.innerHTML = `
            <i class="fas fa-${icon} mr-2"></i>
            ${message}
        `;

        document.body.appendChild(notification);

        // Auto remove after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 4000);
    }
}

// Clear search function (global)
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const resultsSection = document.getElementById('resultsSection');
    const noResults = document.getElementById('noResults');

    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }

    if (resultsSection) {
        resultsSection.classList.add('hidden');
    }

    if (noResults) {
        noResults.classList.add('hidden');
    }

    // Smooth scroll to search section
    const searchSection = searchInput?.closest('.max-w-2xl');
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FuturCertify();
});

// Print styles for certificate
const printStyles = `
    @media print {
        body * {
            visibility: hidden;
        }
        
        #studentCard, #studentCard * {
            visibility: visible;
        }
        
        #studentCard {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
        }
        
        .student-card {
            border: 2px solid #0b1d3a !important;
            background: white !important;
        }
        
        .text-white {
            color: black !important;
        }
        
        .text-cyan, .text-orange {
            color: #0b1d3a !important;
        }
        
        .badge {
            background: #f3f4f6 !important;
            color: #374151 !important;
            border: 1px solid #d1d5db !important;
        }
    }
`;

// Add print styles to head
const styleElement = document.createElement('style');
styleElement.textContent = printStyles;
document.head.appendChild(styleElement);
