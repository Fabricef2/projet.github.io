// Pour icone de chargement de la page 

window.onload = function() {
    let loader = document.getElementById('loader');
    loader.style.display = 'none';

    let content = document.getElementById('content');
    content.style.display = 'block';
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action="traitement.php"]');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const prenom = document.getElementById('prenom');
            const nom = document.getElementById('nom');
            const sujet = document.getElementById('sujet');
            const detailSujet = document.querySelector('textarea[name="Detail_sujet"]');
            
            let hasError = false;
            
            if (!prenom.value.trim()) {
                alert('Veuillez saisir votre prénom');
                prenom.focus();
                hasError = true;
            } else if (!nom.value.trim()) {
                alert('Veuillez saisir votre nom');
                nom.focus();
                hasError = true;
            } else if (!sujet.value.trim()) {
                alert('Veuillez saisir un sujet');
                sujet.focus();
                hasError = true;
            } else if (!detailSujet.value.trim()) {
                alert('Veuillez saisir les détails de votre sujet');
                detailSujet.focus();
                hasError = true;
            }
            
            if (hasError) {
                event.preventDefault();
            }
        });
    }
});