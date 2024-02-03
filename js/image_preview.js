	/*


	//Получаем инпут file в переменную
	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

	//Слушаем изменения в инпуте file
	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		// провераяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены только изображения.');
			formImage.value = '';
			return;
		}
		// проверим размер файла (<2 Мб)
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.');
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	}

*/
//---------------------------------------------------------------//

//More easy option

// Выводим картинку после выбора
const mainForm = document.forms.main; // Форма
const mainFormFile = mainForm.nameFile; // Инпут с типом file

mainFormFile.addEventListener("change", function (e) {

	let selectedFile = mainFormFile.files[0];

		// провераяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(selectedFile.type)) {
			alert('Разрешены только изображения.');
			mainFormFile.value = '';
			return;
		}
		// проверим размер файла (<2 Мб)
		if (selectedFile.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.');
			return;
		}

	// Получаем URL изображения
	let fileUrl = URL.createObjectURL(selectedFile);

	mainFormFile.parentElement.insertAdjacentHTML(
		"beforeend",
		`<div class="main-form__image">
			<img alt="" title="${selectedFile.name}" src="${fileUrl}">
		</div>`
	);
});
