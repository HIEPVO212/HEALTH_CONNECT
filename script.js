/**
 * Hàm hiển thị trang theo ID
 */
function showPage(pId) {
    // Ẩn tất cả các section
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(p => p.classList.remove('active'));

    // Hiển thị section mục tiêu
    const target = document.getElementById(pId);
    if (target) {
        target.classList.add('active');
    }

    // Cập nhật trạng thái menu navigation
    const navItems = document.querySelectorAll('.nav-item-custom');
    navItems.forEach(n => n.classList.remove('active'));
    
    const activeNav = document.getElementById('nav-' + pId);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
}

/**
 * Hàm điều hướng khi click menu
 */
function navigate(pId) {
    showPage(pId);
    // Đóng menu mobile sau khi chọn
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.remove('show');
    
    // Lưu lại vị trí trên URL (Hash)
    history.pushState(null, null, '#' + pId);
}

/**
 * Bật/Tắt Menu trên điện thoại
 */
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.toggle('show');
}

/**
 * Xử lý sự kiện Đăng nhập
 */
function handleLogin() {
    const user = document.getElementById('username').value;
    if (user.trim() === "") {
        alert("Vui lòng nhập tài khoản!");
        return;
    }
    alert("Đăng nhập thành công! Chào mừng " + user);
    // Sau khi đăng nhập xong quay về giới thiệu hoặc chuyển trang đặt lịch
    navigate('intro');
}

/**
 * Lắng nghe sự kiện load trang và nút Back của trình duyệt
 */
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '') || 'intro';
    showPage(hash);
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'intro';
    showPage(hash);
});