document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');
    const modal = document.getElementById('profileModal');
    const selectedProfileImg = document.getElementById('selectedProfileImg');
    const closeBtn = document.querySelector('.close-btn');
    const confirmBtn = document.getElementById('confirmBtn');
    const currentProfileImg = document.getElementById('currentProfileImg');
    let selectedProfile = null;

    // Check if currentProfileImg element exists
    if (currentProfileImg) {
        const storedProfile = localStorage.getItem('selectedProfileImg');
        if (storedProfile) {
            currentProfileImg.src = storedProfile;
        }
    }

    profiles.forEach(profile => {
        profile.addEventListener('click', () => {
            const imgSrc = profile.querySelector('img').src;
            selectedProfileImg.src = imgSrc;
            selectedProfile = profile.dataset.profile;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        localStorage.setItem('selectedProfileImg', selectedProfileImg.src);
        window.location.href = 'index.html'; // Redirect to index.html
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
