const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
	let error = formValidate();
	if (error > 0) {
		event.preventDefault();
		window.scrollTo(0,0)
	}
});


function formValidate() {
	let reqInputs = document.querySelectorAll('._req');
	let error = 0;

		for (let i = 0; i < reqInputs.length; i++) {
			const input = reqInputs[i];
			inputRemoveError(input);

			// Empty fields checker
			if (input.value === '') {
					inputAddError(input);
					error++;	
			} 
			// Email format checker
			else if (input.classList.contains('_email') && !emailTest(input)) {
					inputAddError(input);
					error++;
			} 
			// Checkbox filling out checker
			else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				inputAddError(input);
				error++;
			} 

		}

	return error;
}

function inputAddError(input) {
	input.parentElement.classList.add('_error');
	input.classList.add('_error');
}

function inputRemoveError(input) {
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
}

function emailTest(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
