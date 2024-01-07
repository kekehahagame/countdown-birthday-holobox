
// Ngày đến 24/01/2024
const targetDate = new Date('2024-01-24T00:00:00');

function updateCountdown() {
    // Ngày hiện tại
    const currentDate = new Date();

    // Tính số ngày còn lại
    const daysRemaining = Math.floor((targetDate - currentDate) / (1000 * 60 * 60 * 24));

    // Hiển thị kết quả trên element có class "day-remain"
    const dayRemainElement = document.querySelector('.day-remain');
    if (dayRemainElement) {
        dayRemainElement.textContent = daysRemaining;
    }
}

// Cập nhật đồng hồ đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm cập nhật ngay khi trang được tải
updateCountdown();