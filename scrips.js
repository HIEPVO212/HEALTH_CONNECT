// Hàm điều hướng giữa các trang (Sections)
function navigate(pageId) {
    // Ẩn tất cả section
    const sections = document.querySelectorAll('.page-content');
    sections.forEach(sec => sec.classList.remove('active'));

    // Hiển thị section mong muốn
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    // Cập nhật trạng thái Active trên Menu
    const navItems = document.querySelectorAll('.nav-item-custom');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(pageId)) {
            item.classList.add('active');
        }
    });

    // Đóng menu mobile (nếu có)
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.remove('show');
    
    window.scrollTo(0, 0);
}

// Bật/tắt menu trên mobile
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

// Xử lý khi nhấn nút xác nhận đặt lịch
function finishBooking() {
    const pName = document.getElementById('pName').value;
    
    if (pName.trim().length < 4) {
        alert("Vui lòng nhập họ tên bệnh nhân đầy đủ!");
        return;
    }

    // Tạo mã đặt lịch ngẫu nhiên
    const randomCode = "#HC-" + Math.floor(Math.random() * 9000 + 1000);
    document.getElementById('resCode').innerText = randomCode;

    // Chuyển sang trang thành công
    navigate('success');
}

// Lấy lời khuyên sức khỏe ngẫu nhiên từ API
async function loadHealthTip() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('health-tip').innerText = "Lời khuyên: " + data.slip.advice;
    } catch (error) {
        document.getElementById('health-tip').innerText = "Hãy uống đủ 2 lít nước mỗi ngày để cơ thể luôn khỏe mạnh!";
    }
}

// Chạy khi trang web tải xong
window.onload = function() {
    loadHealthTip();
};