function editProfile() {
    // Profil düzenleme işlemleri
    alert('Profil düzenleme sayfasına yönlendiriliyorsunuz.');
}

function editCompanyInfo() {
    // Şirket bilgilerini düzenleme işlemleri
    alert('Şirket bilgileri düzenleme sayfasına yönlendiriliyorsunuz.');
}

function editProfile() {
    const profileSection = document.querySelector('.profile-section');
    const allInfoDivs = profileSection.querySelectorAll('.profile-info, .export-info, .financial-info, .logistics-info');

    allInfoDivs.forEach(div => {
        const paragraphs = div.querySelectorAll('p');
        paragraphs.forEach(p => {
            const text = p.innerText;
            const [label, value] = text.split(':').map(item => item.trim());

            // Create input element
            const input = document.createElement('input');
            input.type = 'text';
            input.value = value;
            input.style.marginTop = '5px';
            input.style.width = '100%';

            // Replace paragraph text with label and input
            p.innerHTML = `<strong>${label}:</strong>`;
            p.appendChild(input);
        });
    });

    // Change button to "Save" and add event listener
    const editButton = document.querySelector('.edit-btn');
    editButton.innerText = 'Kaydet';
    editButton.onclick = function () {
        allInfoDivs.forEach(div => {
            const paragraphs = div.querySelectorAll('p');
            paragraphs.forEach(p => {
                const input = p.querySelector('input');
                if (input) {
                    const newValue = input.value;
                    const label = p.querySelector('strong').innerText;
                    p.innerHTML = `<strong>${label}</strong>: ${newValue}`;
                }
            });
        });

        // Restore the button's original state
        editButton.innerText = 'Profilimi Düzenle';
        editButton.onclick = editProfile;
    };
}