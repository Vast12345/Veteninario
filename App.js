document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
        clearInputs($el);
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Function to clear input fields
    function clearInputs($modal) {
        const $inputs = $modal.querySelectorAll('input');
        $inputs.forEach(($input) => {
            $input.value = ''; // Clear input value
            $input.classList.remove('is-danger'); // Remove any validation error class
        });
    }

    // Function to validate input fields
    function validateInputs($inputs) {
        let isValid = true;

        $inputs.forEach(($input) => {
            if ($input.value.trim() === '') {
                $input.classList.add('is-danger');
                isValid = false;
            } else {
                $input.classList.remove('is-danger');
            }
        });

        return isValid;
    }



    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add event listener to the "Save changes" button
    (document.querySelectorAll('.modal-card-foot .button.is-success') || []).forEach(($saveButton) => {
        const $modal = $saveButton.closest('.modal');
        const modalTarget = $saveButton.dataset.target;
        const $target = document.getElementById(modalTarget);
        const $inputs = $modal.querySelectorAll('input');

        $saveButton.addEventListener('click', () => {
            // Validate input fields
            const isValid = validateInputs($inputs);

            if (isValid) {
                // Close the modal if all inputs are valid
                if ($saveButton.id === "saveData") {
                    // Aqui hagas los funciones para recojer los datos para subir lo al base de datos
                    // Esto es un ejemplo arragando los valores de los inputs, en el function suyo debes arragar todos estos datos y ponerlo en el base de datos.
                    let nombrePersona = document.getElementById("citaNombre").value;
                    let tipoAnimal = document.getElementById("citaAnimal").value;
                    let cc = document.getElementById("citaCedula").value;
                    let raza = document.getElementById("citaBreed").value;
                    let fecha_cita = document.getElementById("citaDate").value;
                    console.log(nombrePersona, tipoAnimal, cc, raza, fecha_cita);
                }
                if ($saveButton.id === "obtainData") {
                    // Hagas la funcion para obtener los datos dentro del base de datos y crear html dentro del table para mostrar los datos.

                }
                closeModal($modal);
                openModal($target);
            }
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-card-head .delete, .modal-card-foot .button:not(.is-success)') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            if ($close.id === "eraseTable") {
                document.getElementById("tableBody").innerHTML = "";
                console.log("Successfully erased table.");
            }
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
});