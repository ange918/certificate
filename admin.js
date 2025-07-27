// FUTUR Certify - Admin Script
class FuturAdmin {
    constructor() {
        this.students = this.loadStudents();
        this.isAuthenticated = false;
        this.correctPassword = 'FUTUR2025';
        
        this.initializeAuth();
        this.initializeEventListeners();
    }

    // Load students from localStorage
    loadStudents() {
        const stored = localStorage.getItem('futur_students');
        return stored ? JSON.parse(stored) : [];
    }

    // Save students to localStorage
    saveStudents() {
        localStorage.setItem('futur_students', JSON.stringify(this.students));
        this.updateStats();
    }

    // Initialize authentication
    initializeAuth() {
        const isLoggedIn = sessionStorage.getItem('futur_admin_logged_in');
        if (isLoggedIn === 'true') {
            this.authenticateUser();
        } else {
            this.showLoginModal();
        }
    }

    // Show login modal
    showLoginModal() {
        const loginModal = document.getElementById('loginModal');
        const adminContent = document.getElementById('adminContent');
        
        loginModal.classList.remove('hidden');
        adminContent.classList.add('hidden');
    }

    // Hide login modal and show admin content
    authenticateUser() {
        const loginModal = document.getElementById('loginModal');
        const adminContent = document.getElementById('adminContent');
        
        this.isAuthenticated = true;
        loginModal.classList.add('hidden');
        adminContent.classList.remove('hidden');
        
        // Load admin data
        this.updateStats();
        this.loadStudentsList();
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        // Add student form
        const addStudentForm = document.getElementById('addStudentForm');
        if (addStudentForm) {
            addStudentForm.addEventListener('submit', (e) => this.handleAddStudent(e));
        }

        // Auto-format matricule input
        const matriculeInput = document.getElementById('matricule');
        if (matriculeInput) {
            matriculeInput.addEventListener('input', (e) => {
                let value = e.target.value.toUpperCase();
                value = value.replace(/[^A-Z0-9]/g, '');
                e.target.value = value;
            });
        }

        // Photo upload handler
        const photoInput = document.getElementById('photo');
        if (photoInput) {
            photoInput.addEventListener('change', (e) => this.handlePhotoUpload(e));
        }
    }

    // Handle login
    handleLogin(e) {
        e.preventDefault();
        
        const passwordInput = document.getElementById('passwordInput');
        const loginError = document.getElementById('loginError');
        const password = passwordInput.value;

        if (password === this.correctPassword) {
            sessionStorage.setItem('futur_admin_logged_in', 'true');
            loginError.classList.add('hidden');
            this.authenticateUser();
            this.showNotification('Connexion réussie', 'success');
        } else {
            loginError.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    // Logout
    logout() {
        sessionStorage.removeItem('futur_admin_logged_in');
        this.isAuthenticated = false;
        this.showLoginModal();
        this.showNotification('Déconnexion réussie', 'info');
    }

    // Handle photo upload
    handlePhotoUpload(e) {
        const file = e.target.files[0];
        const photoLabel = document.getElementById('photoLabel');
        const photoPreview = document.getElementById('photoPreview');
        const previewImage = document.getElementById('previewImage');

        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                this.showNotification('Veuillez sélectionner un fichier image valide', 'error');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                this.showNotification('La taille du fichier ne doit pas dépasser 5MB', 'error');
                return;
            }

            // Update label
            photoLabel.textContent = file.name;

            // Show preview
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                photoPreview.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        } else {
            photoLabel.textContent = 'Choisir une photo';
            photoPreview.classList.add('hidden');
        }
    }

    // Handle add student
    handleAddStudent(e) {
        e.preventDefault();

        const prenom = document.getElementById('prenom').value.trim();
        const nom = document.getElementById('nom').value.trim();
        const matricule = document.getElementById('matricule').value.trim().toUpperCase();
        const photoInput = document.getElementById('photo');
        
        // Get selected filières
        const filiereCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const filieres = Array.from(filiereCheckboxes).map(cb => cb.value);

        // Validation
        if (!prenom || !nom || !matricule) {
            this.showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        if (filieres.length === 0) {
            this.showNotification('Veuillez sélectionner au moins une filière', 'error');
            return;
        }

        // Check if matricule already exists
        console.log('Checking matricule:', matricule);
        console.log('Existing students:', this.students.map(s => s.matricule));
        
        const existingStudent = this.students.find(s => s.matricule === matricule);
        if (existingStudent) {
            this.showNotification('Ce numéro matricule existe déjà', 'error');
            return;
        }
        
        // Get photo as base64 if uploaded
        if (photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const photoData = e.target.result;
                this.createStudent(prenom, nom, matricule, filieres, photoData);
            };
            reader.readAsDataURL(photoInput.files[0]);
            return; // Exit early, will continue in reader.onload
        }

        // No photo uploaded, continue normally
        this.createStudent(prenom, nom, matricule, filieres, null);
    }

    // Create student (simplified function)
    createStudent(prenom, nom, matricule, filieres, photoData) {
        // Create new student
        const newStudent = {
            id: Date.now().toString(),
            prenom,
            nom,
            matricule,
            photo: photoData,
            filieres,
            dateCreated: new Date().toISOString(),
            isActive: true
        };

        // Add to students array
        this.students.push(newStudent);
        this.saveStudents();

        // Reset form
        const form = document.getElementById('addStudentForm');
        form.reset();
        
        // Reset photo preview
        const photoPreview = document.getElementById('photoPreview');
        const photoLabel = document.getElementById('photoLabel');
        photoPreview.classList.add('hidden');
        photoLabel.textContent = 'Choisir une photo';

        // Show success message
        this.showNotification(`Étudiant ${prenom} ${nom} ajouté avec succès`, 'success');

        // Refresh students list
        this.loadStudentsList();
    }

    // Update dashboard stats
    updateStats() {
        const totalStudentsEl = document.getElementById('totalStudents');
        const activeCertificatesEl = document.getElementById('activeCertificates');

        if (totalStudentsEl) {
            totalStudentsEl.textContent = this.students.length;
        }

        if (activeCertificatesEl) {
            const activeCertificates = this.students.filter(s => s.isActive).length;
            activeCertificatesEl.textContent = activeCertificates;
        }
    }

    // Load students list
    loadStudentsList() {
        const studentsListEl = document.getElementById('studentsList');
        const noStudentsEl = document.getElementById('noStudents');

        if (this.students.length === 0) {
            studentsListEl.classList.add('hidden');
            noStudentsEl.classList.remove('hidden');
            return;
        }

        studentsListEl.classList.remove('hidden');
        noStudentsEl.classList.add('hidden');

        // Sort students by date created (newest first)
        const sortedStudents = [...this.students].sort((a, b) => 
            new Date(b.dateCreated) - new Date(a.dateCreated)
        );

        studentsListEl.innerHTML = sortedStudents.map(student => `
            <div class="bg-white/5 border border-cyan/20 rounded-lg p-4 hover:border-cyan/40 transition-all slide-in">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <img 
                            src="${student.photo || `https://via.placeholder.com/60x60/0b1d3a/00ffff?text=${student.prenom.charAt(0)}${student.nom.charAt(0)}`}" 
                            alt="${student.prenom} ${student.nom}"
                            class="w-12 h-12 rounded-full object-cover border-2 border-cyan"
                            onerror="this.src='https://via.placeholder.com/60x60/0b1d3a/00ffff?text=${student.prenom.charAt(0)}${student.nom.charAt(0)}'"
                        >
                        <div>
                            <h3 class="text-white font-semibold">${student.prenom} ${student.nom}</h3>
                            <p class="text-cyan text-sm">${student.matricule}</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="hidden md:flex flex-wrap gap-1 max-w-xs">
                            ${student.filieres.slice(0, 2).map(filiere => `
                                <span class="px-2 py-1 bg-orange/20 text-orange text-xs rounded border border-orange/30">
                                    ${filiere}
                                </span>
                            `).join('')}
                            ${student.filieres.length > 2 ? `
                                <span class="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">
                                    +${student.filieres.length - 2}
                                </span>
                            ` : ''}
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <button 
                                onclick="admin.editStudent('${student.id}')"
                                class="text-cyan hover:text-white transition-colors p-2"
                                title="Modifier"
                            >
                                <i class="fas fa-edit"></i>
                            </button>
                            <button 
                                onclick="admin.deleteStudent('${student.id}')"
                                class="text-red-400 hover:text-red-300 transition-colors p-2"
                                title="Supprimer"
                            >
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="mt-3 flex flex-wrap gap-1 md:hidden">
                    ${student.filieres.map(filiere => `
                        <span class="px-2 py-1 bg-orange/20 text-orange text-xs rounded border border-orange/30">
                            ${filiere}
                        </span>
                    `).join('')}
                </div>
                
                <div class="mt-3 pt-3 border-t border-cyan/20 flex items-center justify-between text-sm text-gray-400">
                    <span>Ajouté le ${new Date(student.dateCreated).toLocaleDateString('fr-FR')}</span>
                    <span class="flex items-center">
                        <i class="fas fa-circle text-green-400 text-xs mr-2"></i>
                        Actif
                    </span>
                </div>
            </div>
        `).join('');
    }

    // Edit student (placeholder for future implementation)
    editStudent(studentId) {
        this.showNotification('Fonctionnalité de modification en développement', 'info');
    }

    // Delete student
    deleteStudent(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return;

        if (confirm(`Êtes-vous sûr de vouloir supprimer ${student.prenom} ${student.nom} ?`)) {
            this.students = this.students.filter(s => s.id !== studentId);
            this.saveStudents();
            this.loadStudentsList();
            this.showNotification(`Étudiant ${student.prenom} ${student.nom} supprimé`, 'success');
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

// Global admin instance
let admin;

// Initialize the admin application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    admin = new FuturAdmin();
});

// Make admin instance globally available for onclick handlers
window.admin = admin;
