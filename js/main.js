// Modal functions
function showModal() {
    const modal = document.getElementById('confirmModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() {
    const modal = document.getElementById('confirmModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

function goToStore() {
    closeModal();
    setTimeout(() => {
        switchView('store');
    }, 300);
}

// Page View Navigation
function switchView(viewId) {
    const views = document.querySelectorAll('.page-view');
    const navBar = document.querySelectorAll('.nav-link');

    // Fade out current view
    views.forEach(view => {
        if (view.classList.contains('active')) {
            view.classList.add('fade-out');
            setTimeout(() => {
                view.classList.remove('active', 'fade-out');
            }, 300);
        }
    });

    // Fade in new view
    setTimeout(() => {
        const newView = document.getElementById('view-' + viewId);
        if (newView) {
            newView.classList.add('active', 'fade-in');
            setTimeout(() => {
                newView.classList.remove('fade-in');
            }, 300);
        }
    }, 300);

    // Update nav active state
    navBar.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.view === viewId || (viewId === 'home' && link.dataset.view === 'home')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('[data-view]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const viewId = this.dataset.view;
            switchView(viewId);
        });
    });

    // Subscribe form handling
    const subscribeForm = document.querySelector('.subscribe-bar');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('.subscribe-btn');
            const input = this.querySelector('.subscribe-input');
            
            btn.textContent = '[ SENDING... ]';
            btn.disabled = true;

            // Simulate form submission (replace with actual Formspree fetch)
            setTimeout(() => {
                btn.textContent = '[ SENT ✓ ]';
                input.value = '';
                showModal();
                
                setTimeout(() => {
                    btn.textContent = '[ SUBMIT ]';
                    btn.disabled = false;
                }, 2000);
            }, 1000);
        });
    }
});
