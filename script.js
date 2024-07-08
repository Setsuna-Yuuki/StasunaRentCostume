document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');
	const orderBtn = document.getElementById('orderBtn');
    const popup2 = document.getElementById('popup2');

    openPopupBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
    orderBtn.addEventListener('click', () => {
        popup2.style.display = 'block';
    });
    window.addEventListener('click', (event) => {
        if (event.target == popup2) {
            popup2.style.display = 'none';
        }
    });
});