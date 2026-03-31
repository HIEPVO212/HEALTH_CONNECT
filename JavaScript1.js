const hospitalData = [
    { id: 1, name: "Bệnh viện Chợ Rẫy", addr: "201B Nguyễn Chí Thanh, Q.5", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2024/07/19/093152-benh-vien-kham-nhi-tot-tphcm-1.png" },
    { id: 2, name: "BV Đa khoa Đồng Nai", addr: "Đồng Nai", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2024/07/18/091829-benh-vien-da-khoa-nam-sai-gon.png" },
    { id: 3, name: "Bệnh viện Bạch Mai", addr: "Giải Phóng, Hà Nội", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2025/12/17/154528-he-thong-nhi-dong-315.png" },
    { id: 4, name: "Bệnh viện Việt Đức", addr: "Tràng Thi, Hà Nội", spec: "Ngoại khoa", img: "https://cdn.bookingcare.vn/fo/2021/05/27/165413-benh-vien-quoc-te-city.jpg" },
    { id: 5, name: "Bệnh viện Hùng Vương", addr: "Hồng Bàng, Q.5", spec: "Phụ sản", img: "https://cdn.bookingcare.vn/fo/2021/01/26/145448-benh-vien-nhi-dong-thanh-pho.jpg" },
    { id: 6, name: "Bệnh viện Từ Dũ", addr: "Cống Quỳnh, Q.1", spec: "Phụ sản", img: "https://cdn.bookingcare.vn/fo/2021/02/22/150244-benh-vien-fv.jpg" },
    { id: 7, name: "BV Nhi Đồng 1", addr: "Sư Vạn Hạnh, Q.10", spec: "Nhi khoa", img: "https://cdn.bookingcare.vn/fo/2021/01/26/144752-benh-vien-nhi-dong-1.jpg" },
    { id: 8, name: "BV Nhi Đồng 2", addr: "Lý Tự Trọng, Q.1", spec: "Nhi khoa", img: "https://cdn.bookingcare.vn/fo/2021/03/24/142709-benh-vien-nhi-dong-2.jpg" },
    { id: 9, name: "Bệnh viện Bình Dân", addr: "Điện Biên Phủ, Q.3", spec: "Ngoại khoa", img: "https://cdn.bookingcare.vn/fo/2025/12/17/152043-review-kham-nhi-nhi-dong-315.png" },
    { id: 10, name: "Bệnh viện Gia Định", addr: "Nơ Trang Long, Bình Thạnh", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2021/02/11/143136-phong-kham-golden-healthcare.jpg" },
    { id: 11, name: "Bệnh viện 115", addr: "Sư Vạn Hạnh, Q.10", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2024/07/18/092116-phong-kham-simmed.png" },
    { id: 12, name: "BV Thống Nhất", addr: "Lý Thường Kiệt, Tân Bình", spec: "Đa khoa", img: "https://cdn.bookingcare.vn/fo/2023/06/13/143618-kham-nhi-tai-victoria-healthcare.png" },
    { id: 13, name: "BV Tai Mũi Họng", addr: "Trần Quốc Thảo, Q.3", spec: "Tai Mũi Họng", img: "https://cdn.bookingcare.vn/fo/2024/07/19/093152-benh-vien-kham-nhi-tot-tphcm-1.png" },
    { id: 14, name: "BV Răng Hàm Mặt", addr: "Nguyễn Chí Thanh, Q.5", spec: "Răng Hàm Mặt", img: "https://cdn.bookingcare.vn/fo/2024/07/18/091829-benh-vien-da-khoa-nam-sai-gon.png" },
    { id: 15, name: "Bệnh viện Mắt", addr: "Điện Biên Phủ, Q.3", spec: "Nhãn khoa", img: "https://cdn.bookingcare.vn/fo/2025/12/17/154528-he-thong-nhi-dong-315.png" },
    { id: 16, name: "Bệnh viện Da Liễu", addr: "Nguyễn Thông, Q.3", spec: "Da liễu", img: "https://cdn.bookingcare.vn/fo/2021/05/27/165413-benh-vien-quoc-te-city.jpg" },
    { id: 17, name: "BV Ung Bướu", addr: "Nơ Trang Long, Bình Thạnh", spec: "Ung bướu", img: "https://cdn.bookingcare.vn/fo/2021/01/26/145448-benh-vien-nhi-dong-thanh-pho.jpg" },
    { id: 18, name: "BV Tâm Thần", addr: "Hàm Tử, Q.5", spec: "Tâm thần", img: "https://cdn.bookingcare.vn/fo/2021/02/22/150244-benh-vien-fv.jpg" },
    { id: 19, name: "BV Chấn thương Chỉnh hình", addr: "Trần Hưng Đạo, Q.5", spec: "Ngoại khoa", img: "https://cdn.bookingcare.vn/fo/2021/01/26/144752-benh-vien-nhi-dong-1.jpg" },
    { id: 20, name: "BV Phục hồi chức năng", addr: "Lý Thường Kiệt, Q.8", spec: "PHCN", img: "https://cdn.bookingcare.vn/fo/2023/06/13/143618-kham-nhi-tai-victoria-healthcare.png" }
];

const doctorData = [
    { id: 1, hpId: 1, name: "BS. Vũ Mỹ Hương", title: "Phó giáo sư - Trưởng khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_s%E1%BB%B9_%C4%91o%C3%A0n_h%E1%BB%AFu_%C4%91%C3%B4ng.png" },
    { id: 2, hpId: 1, name: "BS. Nguyễn Hoài Hương", title: "Tiến sĩ - Khoa Nội", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 3, hpId: 2, name: "BS. Trần Văn An", title: "Thạc sĩ - Khoa Ngoại", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_qu%E1%BB%B9.png" },
    { id: 4, hpId: 2, name: "BS. Lê Thị Bình", title: "Bác sĩ Chuyên khoa I", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/le_anh_tuan.png" },
    { id: 5, hpId: 3, name: "BS. Phạm Minh Đức", title: "Giáo sư - Nội khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_v%C3%A2n_uy%C3%AAn.png" },
    { id: 6, hpId: 3, name: "BS. Hoàng Xuân Vinh", title: "Tiến sĩ - Tim mạch", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_th%E1%BB%8B_b%C3%ADch_lan.png" },
    { id: 7, hpId: 4, name: "BS. Ngô Bảo Châu", title: "Trưởng khoa Ngoại", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_kh%C3%A1nh_h%E1%BB%99i.png" },
    { id: 8, hpId: 5, name: "BS. Mai Phương Thúy", title: "BS Sản phụ khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/the_hue.jpg" },
    { id: 9, hpId: 6, name: "BS. Đặng Thu Thảo", title: "Chuyên gia hiếm muộn", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 10, hpId: 7, name: "BS. Xuân Bắc", title: "Bác sĩ Nhi khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_h%C3%B9ng.png" },
    { id: 11, hpId: 8, name: "BS. Công Lý", title: "Bác sĩ Nhi khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_s%E1%BB%B9_%C4%91o%C3%A0n_h%E1%BB%AFu_%C4%91%C3%B4ng.png" },
    { id: 12, hpId: 9, name: "BS. Tự Long", title: "BS Ngoại tiết niệu", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 13, hpId: 10, name: "BS. Quang Thắng", title: "Nội khoa tổng quát", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_qu%E1%BB%B9.png" },
    { id: 14, hpId: 11, name: "BS. Vân Dung", title: "BS Cấp cứu", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/le_anh_tuan.png" },
    { id: 15, hpId: 12, name: "BS. Chí Trung", title: "Lão khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_v%C3%A2n_uy%C3%AAn.png" },
    { id: 16, hpId: 13, name: "BS. Thành Trung", title: "Chuyên khoa TMH", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_th%E1%BB%8B_b%C3%ADch_lan.png" },
    { id: 17, hpId: 14, name: "BS. Trấn Thành", title: "BS Răng Hàm Mặt", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_kh%C3%A1nh_h%E1%BB%99i.png" },
    { id: 18, hpId: 15, name: "BS. Trường Giang", title: "BS Nhãn khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/the_hue.jpg" },
    { id: 19, hpId: 16, name: "BS. Hoài Linh", title: "Da liễu - Thẩm mỹ", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 20, hpId: 17, name: "BS. Việt Hương", title: "Ung bướu học", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_h%C3%B9ng.png" },
    { id: 21, hpId: 18, name: "BS. Đại Nghĩa", title: "Sức khỏe tâm thần", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_s%E1%BB%B9_%C4%91o%C3%A0n_h%E1%BB%AFu_%C4%91%C3%B4ng.png" },
    { id: 22, hpId: 19, name: "BS. Quyền Linh", title: "Chỉnh hình cơ xương", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 23, hpId: 20, name: "BS. Lý Hải", title: "Vật lý trị liệu", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_qu%E1%BB%B9.png" },
    { id: 24, hpId: 1, name: "BS. Minh Nhí", title: "BS Nội tiêu hóa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/le_anh_tuan.png" },
    { id: 25, hpId: 2, name: "BS. Hữu Châu", title: "Nội thần kinh", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_th%E1%BB%8B_v%C3%A2n_uy%C3%AAn.png" },
    { id: 26, hpId: 3, name: "BS. Thanh Thủy", title: "Nội tiết tố", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_th%E1%BB%8B_b%C3%ADch_lan.png" },
    { id: 27, hpId: 4, name: "BS. Thành Lộc", title: "Ngoại thần kinh", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/nguy%E1%BB%85n_kh%C3%A1nh_h%E1%BB%99i.png" },
    { id: 28, hpId: 5, name: "BS. Hồng Vân", title: "Phụ khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/the_hue.jpg" },
    { id: 29, hpId: 6, name: "BS. Kim Tử Long", title: "Sản khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/tr%E1%BA%A7n_ng%E1%BB%8Dc_h%C3%B9ng.png" },
    { id: 30, hpId: 7, name: "BS. Ngọc Giàu", title: "BS Nhi khoa", img: "https://media.benhvienhathanh.vn/media/doi_ngu_bac_si/b%C3%A1c_h%C3%B9ng.png" }
];

let currentHpId = null;

function renderHospitals(list = hospitalData) {
    const container = document.getElementById('hospital-list');
    container.innerHTML = list.map(h => `
        <div class="list-item" onclick="navigate('dv2', ${h.id})" style="cursor:pointer">
            <div class="d-flex align-items-center">
                <img src="${h.img}" onerror="this.src='https://via.placeholder.com/60'">
                <div><strong>${h.name}</strong><p class="mb-0 text-muted small">${h.addr} - ${h.spec}</p></div>
            </div>
            <i class="fas fa-chevron-right text-muted"></i>
        </div>
    `).join('');
}

function renderDoctors(hpId = null, list = null) {
    currentHpId = hpId;
    let filtered = list;

    if (!filtered) {
        if (hpId) {
            filtered = doctorData.filter(d => d.hpId === hpId);
        } else {
            filtered = doctorData;
        }
    }

    const container = document.getElementById('doctor-list');
    if (filtered.length === 0) {
        container.innerHTML = `<p class="p-3 text-center">Không tìm thấy bác sĩ phù hợp.</p>`;
        return;
    }
    container.innerHTML = filtered.map(d => {
        const hospital = hospitalData.find(h => h.id === d.hpId);
        const hospitalText = !hpId && hospital ? `<br><small class="text-teal">${hospital.name}</small>` : '';

        return `
        <div class="list-item">
            <div class="d-flex align-items-center">
                <img src="${d.img}" onerror="this.src='https://via.placeholder.com/150'">
                <div>
                    <strong>${d.name}</strong><br>
                    <small>${d.title}</small>${hospitalText}
                </div>
            </div>
            <button class="btn-booking" onclick="prepareBooking(${d.id}, '${d.name}', ${d.hpId})">Đặt lịch</button>
        </div>
        `;
    }).join('');
}

function filterHospitals() {
    const query = document.getElementById('hospitalSearch').value.toLowerCase();
    const filtered = hospitalData.filter(h => h.name.toLowerCase().includes(query) || h.addr.toLowerCase().includes(query));
    renderHospitals(filtered);
}

function filterDoctors() {
    const query = document.getElementById('doctorSearch').value.toLowerCase();
    const filtered = doctorData.filter(d => {
        const matchesHospital = currentHpId ? d.hpId === currentHpId : true;
        const matchesSearch = d.name.toLowerCase().includes(query) || d.title.toLowerCase().includes(query);
        return matchesHospital && matchesSearch;
    });
    renderDoctors(currentHpId, filtered);
}

function showPage(pId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item-custom').forEach(n => n.classList.remove('active'));
    document.getElementById(pId).classList.add('active');
    document.querySelectorAll('.nav-item-custom').forEach(nav => {
        if (nav.getAttribute('onclick') && nav.getAttribute('onclick').includes(pId)) nav.classList.add('active');
    });
    window.scrollTo(0, 0);
}

function toggleMenu() { document.getElementById('navMenu').classList.toggle('show'); }

function navigate(pId, dataId = null) {
    if (pId === 'dv2') {
        document.getElementById('doctorSearch').value = '';
        renderDoctors(dataId);
    }
    if (pId !== 'dv3') {
        currentBookingDoctor = null;
    }
    if (pId === 'dv3') {
        const headerElement = document.getElementById('booking-doctor-name');
        const mainContent = document.getElementById('booking-main-content');
        const emptyState = document.getElementById('booking-empty-state');

        if (currentBookingDoctor) {
            headerElement.innerHTML = `Lịch khám: <strong>${currentBookingDoctor.name}</strong> <small class="fw-normal">| ${currentBookingDoctor.hospitalName}</small>`;
            mainContent.style.display = 'block';
            emptyState.style.display = 'none';
        } else {
            headerElement.innerHTML = 'Đặt Lịch Khám';
            mainContent.style.display = 'none';
            emptyState.style.display = 'block';
        }
    }
    showPage(pId);
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('show');
}

// --- CALENDAR & BOOKING LOGIC ---
let currentBookingDoctor = null;
let currentDate = new Date();
let selectedTimestamp = null;
let selectedTimeSlotStr = null;

function prepareBooking(docId, docName, hpId) {
    const hospital = hospitalData.find(h => h.id === hpId);
    const hospitalName = hospital ? hospital.name : 'Phòng khám Đa khoa';
    currentBookingDoctor = { id: docId, name: docName, hospitalName: hospitalName };

    selectedTimestamp = null;
    selectedTimeSlotStr = null;
    document.getElementById('slots-container').classList.add('hidden');
    document.getElementById('slots-placeholder').style.display = 'block';
    document.getElementById('selected-date-display').innerText = '';

    renderCalendar();
    navigate('dv3');
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    document.getElementById('calendar-month-year').innerText = `Tháng ${month + 1}, ${year}`;

    const firstDayIndex = new Date(year, month, 1).getDay();
    const startDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = '';

    for (let i = 0; i < startDay; i++) {
        html += `<div class="calendar-day empty"></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const iterDate = new Date(year, month, i);
        const isPast = iterDate < today;
        const isSelected = selectedTimestamp === iterDate.getTime();

        let classes = 'calendar-day';
        if (isPast) classes += ' disabled';
        if (isSelected) classes += ' active';

        if (isPast) {
            html += `<div class="${classes}">${i}</div>`;
        } else {
            html += `<div class="${classes}" onclick="selectDate(${year}, ${month}, ${i})">${i}</div>`;
        }
    }

    document.getElementById('calendar-days').innerHTML = html;
}

function changeMonth(step) {
    currentDate.setMonth(currentDate.getMonth() + step);
    renderCalendar();
}

function selectDate(year, month, day) {
    const date = new Date(year, month, day);
    selectedTimestamp = date.getTime();
    selectedTimeSlotStr = null;
    renderCalendar();

    const dayStr = date.getDate().toString().padStart(2, '0');
    const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
    document.getElementById('selected-date-display').innerText = `(${dayStr}/${monthStr})`;

    document.getElementById('slots-placeholder').style.display = 'none';
    document.getElementById('slots-container').classList.remove('hidden');

    renderTimeSlots();
}

function renderTimeSlots() {
    const morning = ["08:00 - 08:30", "08:30 - 09:00", "09:00 - 09:30", "10:00 - 10:30", "11:00 - 11:30"];
    const afternoon = ["13:30 - 14:00", "14:30 - 15:00", "15:30 - 16:00", "16:00 - 16:30"];

    const createSlotHtml = (t) => {
        const isSelected = selectedTimeSlotStr === t;
        const clazz = isSelected ? "time-slot selected" : "time-slot";
        return `<div class="col-4"><div class="${clazz}" onclick="selectTimeSlot('${t}')">${t}</div></div>`;
    };

    document.getElementById('morning-slots').innerHTML = morning.map(createSlotHtml).join('');
    document.getElementById('afternoon-slots').innerHTML = afternoon.map(createSlotHtml).join('');
}

function selectTimeSlot(timeStr) {
    selectedTimeSlotStr = timeStr;
    renderTimeSlots();
}

function finishBookingSimple() {
    if (!currentBookingDoctor) {
        alert("Vui lòng chọn bác sĩ trước.");
        return;
    }
    if (!selectedTimestamp) {
        alert("Vui lòng chọn ngày khám.");
        return;
    }
    if (!selectedTimeSlotStr) {
        alert("Vui lòng chọn giờ khám.");
        return;
    }

    const code = "#HC-" + Math.floor(Math.random() * 9000);
    alert(`ĐẶT LỊCH THÀNH CÔNG!\nMã số của bạn là: ${code}`);

    currentBookingDoctor = null;
    navigate('dv1');
}

function handleCancelBooking() {
    currentBookingDoctor = null;
    navigate('dv3');
}

window.onload = () => {
    renderHospitals();
};