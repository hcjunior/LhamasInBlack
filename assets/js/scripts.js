document.addEventListener("DOMContentLoaded", function() {
    const helitonBtn = document.getElementById('evento-heliton-btn');
    const halloweenBtn = document.getElementById('evento-halloween-btn');
    const helitonEvent = document.getElementById('evento-heliton');
    const halloweenEvent = document.getElementById('evento-halloween');

    let activeBtn = null;

    function toggleEvent(eventToShow, eventToHide, btn) {
        if (activeBtn === btn) {
            eventToShow.classList.remove('show');
            btn.classList.remove('active');
            activeBtn = null;
        } else {
            eventToShow.classList.add('show');
            if (eventToHide.classList.contains('show')) {
                eventToHide.classList.remove('show');
            }
            btn.classList.add('active');
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }
            activeBtn = btn;
        }
    }

    helitonBtn.addEventListener('click', function() {
        toggleEvent(helitonEvent, halloweenEvent, helitonBtn);
    });

    halloweenBtn.addEventListener('click', function() {
        toggleEvent(halloweenEvent, helitonEvent, halloweenBtn);
    });

    // Lógica para os confirmados
    const confirmadosHelitonBtn = document.getElementById('confirmados-heliton-btn');
    const confirmadosHeliton = document.getElementById('confirmados-heliton');
    
    const confirmadosHalloweenBtn = document.getElementById('confirmados-halloween-btn');
    const confirmadosHalloween = document.getElementById('confirmados-halloween');

    function toggleConfirmados(confirmadosList) {
        const isVisible = confirmadosList.classList.contains('show');
        if (isVisible) {
            confirmadosList.classList.remove('show');
        } else {
            confirmadosList.classList.add('show');
        }
    }

    confirmadosHelitonBtn.addEventListener('click', function() {
        toggleConfirmados(confirmadosHeliton);
    });

    confirmadosHalloweenBtn.addEventListener('click', function() {
        toggleConfirmados(confirmadosHalloween);
    });
});