const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// Array sederhana untuk menyimpan data pengguna (untuk contoh)
let users = [];

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    // Simpan data pengguna ke dalam array (diganti dengan penyimpanan ke database)
    users.push({ username, email, password });

    // Tampilkan pesan sukses atau lakukan tindakan lain
    alert('Registrasi berhasil!');
    registerForm.reset();
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Cari pengguna yang cocok
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Login berhasil
        alert('Login berhasil!');
        // Arahkan ke halaman dashboard atau lakukan tindakan lain
    } else {
        // Login gagal
        alert('Username atau password salah.');
    }
});