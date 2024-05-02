document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector(".signupForm");
    const usernameInput = document.querySelector("#username");
    const message = document.querySelector(".message");
    const usernamePattern = /^[a-z]{6,10}$/; // Kullanıcı adı için geçerli olacak desen (6 ile 10 karakter arası küçük harf)

    form.addEventListener('submit', e => {
        e.preventDefault(); // Formun varsayılan gönderme davranışını engelle

        const usernameValue = usernameInput.value.trim(); // Kullanıcı adı değerini al, baştaki ve sondaki boşlukları temizle

        if (usernamePattern.test(usernameValue)) {
            showMessage('Başarılı', 'success'); // Geçerli ise başarı mesajı göster
            console.log(message.textContent);
        } else {
            showMessage('Başarısız', 'error'); // Geçerli değilse başarısız mesajı göster
            console.log(message.textContent);
        }
    });

    // Kullanıcı adı input alanına keyup olayıyla dinleyici ekleme
    usernameInput.addEventListener('keyup', e => {
        const usernameValue = usernameInput.value.trim(); // Kullanıcı adı değerini al, baştaki ve sondaki boşlukları temizle

        if (usernamePattern.test(usernameValue)) {
            usernameInput.classList.remove('error');
            usernameInput.classList.add('success');
        } else {
            usernameInput.classList.remove('success');
            usernameInput.classList.add('error');
        }
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.className = `message ${type}`;
    }
});
