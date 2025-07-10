document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const imgSrc = btn.dataset.img;
      const title = btn.dataset.title;
      const price = btn.dataset.price;
      const desc = btn.dataset.desc;

      // Isi modal
      document.getElementById('modalImage').src = imgSrc;
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalPrice').textContent = price;
      document.getElementById('modalDesc').textContent = desc;

      // Tampilkan modal Bootstrap secara manual
      const modalElement = document.getElementById('productPreviewModal'); // Pastikan ini ID modal yang benar
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    });
  });
});
