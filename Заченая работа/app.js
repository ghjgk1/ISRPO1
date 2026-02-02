document.addEventListener('DOMContentLoaded', function() {
    const addCardBtn = document.querySelector('.add-card-btn');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (addCardBtn && modal && closeModalBtn) {
        addCardBtn.addEventListener('click', function() {
            modal.classList.remove('hidden');
        });
        
        closeModalBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
        
        const addBtn = modal.querySelector('button:first-of-type');
        if (addBtn) {
            addBtn.addEventListener('click', function() {
                modal.classList.add('hidden');
            });
        }
    }
});