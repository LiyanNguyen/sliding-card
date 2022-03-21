let shoeSizeList = document.querySelectorAll('.size li');
let sizePrice = document.querySelector('#price');
let shoePricesBasedOnSize = [59, 64, 69, 74, 79];

shoeSizeList.forEach((shoeSize, index) => {
	shoeSize.addEventListener('click', () => {
		shoeSizeList.forEach((allSizeChoices) => {
      allSizeChoices.classList.remove('selected');
    });
		shoeSize.classList.add('selected');
		sizePrice.innerHTML = shoePricesBasedOnSize[index];
		console.log(sizePrice);
	})
});