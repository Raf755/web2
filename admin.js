// Sistem Admin Lengkap
class AdminSystem {
    constructor() {
        this.currentAdmin = null;
        this.init();
    }

    init() {
        this.checkLogin();
        this.setupEventListeners();
    }

    checkLogin() {
        this.currentAdmin = JSON.parse(sessionStorage.getItem('currentAdmin'));
        
        if (!this.currentAdmin && !window.location.pathname.includes('login.html')) {
            window.location.href = 'login.html';
        }
        
        if (this.currentAdmin) {
            this.loadDashboard();
            document.getElementById('current-user').textContent = this.currentAdmin.username;
            
            if (this.currentAdmin.role === 'superadmin') {
                document.getElementById('adminManagementLink').style.display = 'block';
            }
        }
    }

    setupEventListeners() {
        // Login Form
        document.getElementById('loginForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Logout Button
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            sessionStorage.removeItem('currentAdmin');
            window.location.href = 'login.html';
        });

        // Navigation
        document.querySelectorAll('.admin-menu .nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSection(link.getAttribute('data-section'));
            });
        });
    }

    // ... (Lengkapi dengan semua method lainnya)
}

// Initialize
new AdminSystem();
