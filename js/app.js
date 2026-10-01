/**
 * TRẠM KÝ ỨC - CONTROLLER CHÍNH
 * Tương tác Tri ân, Trình phát nhạc nền Huyền thoại Mẹ,
 * Bộ lọc 51 Mẹ VNAH và Sổ lưu bút trực tuyến.
 */

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Khởi tạo dịch vụ dữ liệu
  await window.memoryService.init();

  // 2. Khởi tạo các module
  initAudioPlayer();
  initAltarInteractions();
  initMothersGallery();
  initGuestbook();
  initNavigationScroll();
});

/* ==========================================================================
   MODULE 1: TRÌNH PHÁT NHẠC NỀN "HUYỀN THOẠI MẸ"
   ========================================================================== */
function initAudioPlayer() {
  const audio = document.getElementById("bgAudio");
  const toggleBtn = document.getElementById("musicToggleBtn");
  const musicLabel = document.getElementById("musicLabel");

  if (!audio || !toggleBtn) return;

  // Đặt âm lượng dịu nhẹ ban đầu (45%)
  audio.volume = 0.45;

  let isPlaying = false;

  const updateUI = (playing) => {
    isPlaying = playing;
    if (playing) {
      toggleBtn.classList.add("playing");
      musicLabel.textContent = "Huyền thoại Mẹ (Đang phát)";
    } else {
      toggleBtn.classList.remove("playing");
      musicLabel.textContent = "Bật nhạc tưởng niệm";
    }
  };

  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      updateUI(false);
    } else {
      audio.play().then(() => {
        updateUI(true);
      }).catch((err) => {
        console.warn("Trình duyệt chặn autoplay:", err);
      });
    }
  });

  // Tự động phát nhẹ nhàng khi người dùng chạm lần đầu vào trang (tuân thủ chính sách Autoplay)
  const enableAudioOnFirstGesture = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        updateUI(true);
      }).catch(() => {});
    }
    document.removeEventListener("click", enableAudioOnFirstGesture);
    document.removeEventListener("touchstart", enableAudioOnFirstGesture);
  };

  document.addEventListener("click", enableAudioOnFirstGesture, { once: true });
  document.addEventListener("touchstart", enableAudioOnFirstGesture, { once: true });
}

/* ==========================================================================
   MODULE 2: 120% MARQUEE HERO DETAIL - BÀN THỜ ẢO & THẮP NÉN TRI ÂN
   ========================================================================== */
function initAltarInteractions() {
  const lightBtn = document.getElementById("lightCandleBtn");
  const candleCountElem = document.getElementById("candleCounter");
  const altarBox = document.querySelector(".tribute-altar-box");

  // Hiển thị số lượt nến hiện tại
  window.memoryService.getCandleCount().then((count) => {
    if (candleCountElem) {
      candleCountElem.textContent = Number(count).toLocaleString("vi-VN");
    }
  });

  // Khởi động Canvas khói hương bay
  initSmokeCanvas();

  if (!lightBtn) return;

  lightBtn.addEventListener("click", async (e) => {
    // 1. Âm thanh chuông ngân thanh tịnh (Web Audio API Synthesizer - không cần file âm thanh phụ)
    playTempleSingingBell();

    // 2. Tăng số đếm
    const newCount = await window.memoryService.lightCandle();
    if (candleCountElem) {
      candleCountElem.textContent = Number(newCount).toLocaleString("vi-VN");
    }

    // 3. Hiệu ứng chữ nổi "+1 Nén Tâm Hương"
    showFloatingTributeText(e, altarBox);

    // 4. Haptic Feedback nhẹ trên điện thoại thông minh
    if (navigator.vibrate) {
      navigator.vibrate([40, 60, 40]);
    }

    showToast("Đã thắp một nén tâm hương dâng Mẹ!", "success");
  });
}

// Bộ tạo âm chuông chùa ngân trầm thanh tịnh bằng Web Audio API
function playTempleSingingBell() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(432, ctx.currentTime); // Tần số 432Hz an lạc
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(864, ctx.currentTime);

    gain.gain.setValueAtTime(0.28, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 3.2);
    osc2.stop(ctx.currentTime + 3.2);
  } catch (e) {
    // Không hỗ trợ Web Audio, bỏ qua
  }
}

// Hiệu ứng chữ bay lên khi bấm thắp nến
function showFloatingTributeText(event, container) {
  const el = document.createElement("div");
  el.className = "floating-candle-fx";
  el.innerHTML = "✨ +1 Nén Tâm Hương Tri Ân";

  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left - 60;
  const y = event.clientY - rect.top - 20;

  el.style.left = `${Math.max(20, x)}px`;
  el.style.top = `${Math.max(20, y)}px`;

  container.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

// Canvas vẽ làn khói hương uốn lượn bay lên
function initSmokeCanvas() {
  const canvas = document.getElementById("smokeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = 180;
  canvas.height = 90;

  const particles = [];
  for (let i = 0; i < 28; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 16,
      y: canvas.height - Math.random() * 20,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.4 - Math.random() * 0.6,
      radius: 2 + Math.random() * 3,
      alpha: 0.15 + Math.random() * 0.25,
      wobble: Math.random() * Math.PI * 2
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.y += p.vy;
      p.wobble += 0.03;
      p.x += Math.sin(p.wobble) * 0.35 + p.vx;
      p.radius += 0.08;
      p.alpha -= 0.0025;

      if (p.y <= 0 || p.alpha <= 0) {
        p.x = canvas.width / 2 + (Math.random() - 0.5) * 16;
        p.y = canvas.height - 2;
        p.radius = 2;
        p.alpha = 0.2 + Math.random() * 0.2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0, p.alpha)})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   MODULE 3: DANH MỤC & BỘ LỌC 51 MẸ VNAH PHƯỚC THỚI
   ========================================================================== */
function initMothersGallery() {
  const grid = document.getElementById("mothersGrid");
  const searchInput = document.getElementById("searchMother");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid || typeof MOTHERS_DATA === "undefined") return;

  let currentFilter = "all";
  let searchKeyword = "";

  const renderCards = () => {
    grid.innerHTML = "";

    const filtered = MOTHERS_DATA.filter((m) => {
      // 1. Lọc theo danh mục
      if (currentFilter === "portrait") {
        if (!m.photo || m.photo.includes("default-mother") || m.photo.includes("photo_010") || m.photo.includes("photo_011") || m.photo.includes("photo_012")) return false;
      } else if (currentFilter === "truy-tang") {
        if (!m.title.toLowerCase().includes("truy")) return false;
      } else if (currentFilter === "phong-tang") {
        if (!m.title.toLowerCase().includes("phong")) return false;
      }

      // 2. Tìm kiếm theo từ khóa
      if (searchKeyword) {
        const fullSearchStr = `${m.name} ${m.relatives} ${m.hometown}`.toLowerCase();
        return fullSearchStr.includes(searchKeyword);
      }

      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
          <p style="font-size: 1.1rem; font-weight: 600;">Không tìm thấy thông tin Mẹ phù hợp</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Vui lòng thử tìm kiếm theo từ khóa khác hoặc bấm nút "Tất cả"</p>
        </div>
      `;
      return;
    }

    filtered.forEach((mother) => {
      const card = document.createElement("div");
      card.className = "mother-card";
      card.setAttribute("data-stt", mother.stt);

      // Ảnh hiển thị (nếu lỗi đường dẫn tự chuyển sang ảnh đại diện hoa sen mặc định)
      const imgSrc = mother.photo || "assets/images/default-mother.svg";

      card.innerHTML = `
        <div class="card-img-wrap">
          <img 
            src="${imgSrc}" 
            alt="Mẹ VNAH ${mother.name}" 
            class="mother-photo" 
            loading="lazy"
            onerror="this.onerror=null; this.src='assets/images/default-mother.svg';"
          />
          <span class="card-badge-top">${mother.title}</span>
          <span class="card-stt-badge">#${mother.stt}</span>
        </div>
        <div class="card-body">
          <h3 class="mother-name">${mother.name}</h3>
          <p class="mother-meta">${mother.birth_death || "Phường Phước Thới"}</p>
          <p class="mother-excerpt">${mother.relatives || mother.hometown}</p>
          <button class="card-action-btn" type="button">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            Kính cẩn tri ân
          </button>
        </div>
      `;

      card.addEventListener("click", () => openMotherModal(mother));
      grid.appendChild(card);
    });
  };

  // Lắng nghe tìm kiếm
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value.trim().toLowerCase();
      renderCards();
    });
  }

  // Lắng nghe bấm tab lọc
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderCards();
    });
  });

  // Render danh sách ban đầu
  renderCards();
}

/* ==========================================================================
   MODULE 4: MODAL TIỂU SỬ CHI TIẾT (CHUẨN 3-ZONE MOBILE FLEXBOX)
   ========================================================================== */
function openMotherModal(mother) {
  const overlay = document.getElementById("motherModal");
  if (!overlay) return;

  const mName = document.getElementById("modalMotherName");
  const mTitle = document.getElementById("modalMotherTitle");
  const mYears = document.getElementById("modalMotherYears");
  const mPhoto = document.getElementById("modalMotherPhoto");
  const mHometown = document.getElementById("modalMotherHometown");
  const mRelatives = document.getElementById("modalMotherRelatives");
  const mCitation = document.getElementById("modalMotherCitation");
  const altarThisMotherBtn = document.getElementById("altarThisMotherBtn");

  mName.textContent = mother.name;
  mTitle.textContent = mother.title + " danh hiệu Bà Mẹ VNAH";
  mYears.textContent = mother.birth_death ? `(${mother.birth_death})` : "";
  mPhoto.src = mother.photo || "assets/images/default-mother.svg";
  mPhoto.onerror = () => { mPhoto.src = "assets/images/default-mother.svg"; };

  mHometown.textContent = mother.hometown;
  mRelatives.textContent = mother.relatives;
  mCitation.textContent = `Tư liệu số hóa: Sách "Bà mẹ Việt Nam Anh hùng thành phố Cần Thơ Tập II (2013-2020)" - Ban Tuyên giáo Thành ủy Cần Thơ.`;

  // Nút thắp hương dâng riêng Mẹ
  if (altarThisMotherBtn) {
    altarThisMotherBtn.onclick = () => {
      playTempleSingingBell();
      window.memoryService.lightCandle().then((count) => {
        const counter = document.getElementById("candleCounter");
        if (counter) counter.textContent = Number(count).toLocaleString("vi-VN");
      });
      showToast(`Đã kính cẩn thắp nén tâm hương dâng Mẹ ${mother.name}!`);
    };
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Ngăn cuộn trang phía sau
}

function closeMotherModal() {
  const overlay = document.getElementById("motherModal");
  if (!overlay) return;
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Bắt sự kiện đóng modal
document.addEventListener("DOMContentLoaded", () => {
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalDismissBtn = document.getElementById("modalDismissBtn");
  const overlay = document.getElementById("motherModal");

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeMotherModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener("click", closeMotherModal);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeMotherModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMotherModal();
  });
});

/* ==========================================================================
   MODULE 5: SỔ LƯU BÚT TRI ÂN TRỰC TUYẾN
   ========================================================================== */
function initGuestbook() {
  const form = document.getElementById("guestbookForm");
  const entriesContainer = document.getElementById("guestbookEntries");

  const renderEntries = async () => {
    if (!entriesContainer) return;
    const entries = await window.memoryService.getGuestbookEntries();
    entriesContainer.innerHTML = "";

    entries.forEach((item) => {
      const card = document.createElement("div");
      card.className = "entry-card";

      const timeStr = item.createdAt 
        ? new Date(item.createdAt).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          })
        : "Vừa xong";

      card.innerHTML = `
        <div class="entry-header">
          <div>
            <span class="entry-author">${escapeHtml(item.author)}</span>
            <span class="entry-org"> • ${escapeHtml(item.org)}</span>
          </div>
          <span class="entry-time">${timeStr}</span>
        </div>
        <p class="entry-content">${escapeHtml(item.content)}</p>
      `;

      entriesContainer.appendChild(card);
    });
  };

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const authorInput = document.getElementById("guestAuthor");
      const orgInput = document.getElementById("guestOrg");
      const contentInput = document.getElementById("guestContent");

      const author = authorInput.value.trim();
      const org = orgInput.value.trim();
      const content = contentInput.value.trim();

      if (!author || !content) {
        showToast("Vui lòng điền họ tên và lời nhắn gửi tri ân!", "error");
        return;
      }

      await window.memoryService.addGuestbookEntry(author, org, content);
      showToast("Lời tri ân sâu sắc của bạn đã được ghi vào Sổ Lưu Bút!", "success");

      form.reset();
      renderEntries();
    });
  }

  renderEntries();
}

/* ==========================================================================
   TIỆN ÍCH HỖ TRỢ
   ========================================================================== */
function showToast(message, type = "success") {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  const icon = type === "error" 
    ? "⚠️" 
    : "🕊️";

  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3400);
}

function escapeHtml(string) {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return String(string).replace(/[&<>"']/g, (s) => entityMap[s]);
}

function initNavigationScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
}
