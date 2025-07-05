// Calculadora de propinas

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    const limpiarBtn = document.getElementById('limpiarBtn');
    const propinaTotal = document.getElementById('propinaTotal');
    const propinaPersona = document.getElementById('propinaPersona');
    const totalPersona = document.getElementById('totalPersona');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const total = parseFloat(document.getElementById('totalCuenta').value);
            const porcentaje = parseFloat(document.getElementById('porcentajePropina').value);
            const personas = parseInt(document.getElementById('numPersonas').value);

            if (isNaN(total) || isNaN(porcentaje) || isNaN(personas) || personas < 1) {
                propinaTotal.textContent = 'Por favor, ingresa valores válidos.';
                propinaPersona.textContent = '';
                totalPersona.textContent = '';
                return;
            }

            const totalPropina = total * (porcentaje / 100);
            const propinaPorPersona = totalPropina / personas;
            const totalPorPersona = (total + totalPropina) / personas;

            propinaTotal.textContent = `Propina total: $${totalPropina.toFixed(2)}`;
            propinaPersona.textContent = `Propina por persona: $${propinaPorPersona.toFixed(2)}`;
            totalPersona.textContent = `Total a pagar por persona: $${totalPorPersona.toFixed(2)}`;
        });
    }

    if (limpiarBtn) {
        limpiarBtn.addEventListener('click', function() {
            form.reset();
            propinaTotal.textContent = '';
            propinaPersona.textContent = '';
            totalPersona.textContent = '';
        });
    }
});
