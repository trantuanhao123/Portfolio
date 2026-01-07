import { useState } from "react";
import profileImg from "./assets/avatar.jpg";
import erdOverview from "./assets/erd-overview.png";
import erdRental from "./assets/erd-rental-flow.png";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showERD, setShowERD] = useState(false);
  const [currentERDIndex, setCurrentERDIndex] = useState(0);

  const erdDiagrams = [
    {
      title: "Database Overview",
      description: "Toàn bộ cấu trúc bảng và mối quan hệ giữa các thực thể",
      image: erdOverview,
    },
    {
      title: "Rental Flow & Transactions",
      description: "Chi tiết luồng dữ liệu xử lý cho thuê xe và thanh toán",
      image: erdRental,
    },
  ];

  const handleNextERD = () => {
    setCurrentERDIndex((prev) =>
      prev === erdDiagrams.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevERD = () => {
    setCurrentERDIndex((prev) =>
      prev === 0 ? erdDiagrams.length - 1 : prev - 1
    );
  };

  return (
    <div className="portfolio">
      {/* 1. NAVIGATION BAR */}
      <nav className="navbar">
        <div className="logo">
          <h3>
            Dev<span>Portfolio</span>
          </h3>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Trần Tuấn Hào</span>
          </h1>
          <p className="subtitle">Backend Developer | HUIT Student</p>
          <p>
            Tôi là sinh viên vừa tốt nghiệp từ{" "}
            <strong>Đại học Công Thương TP.HCM (HUIT)</strong>. Tôi tập trung
            phát triển các hệ thống web theo kiến trúc Monolithic, thành thạo
            việc xây dựng <strong>RESTful API</strong> và quản lý luồng dữ liệu
            giữa Client - Server.
          </p>
          <p></p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              Xem dự án
            </a>
            <a href="#contact" className="btn-secondary">
              Liên hệ tôi
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Profile" />
          </div>

          <div className="about-text">
            <h3>Xây dựng nền tảng vững chắc</h3>
            <p>
              Tôi vừa hoàn thành chương trình học tại HUIT và đang bắt đầu hành
              trình trở thành một Backend Developer chuyên nghiệp. Tôi yêu thích
              việc tổ chức cấu trúc dữ liệu và tối ưu hóa logic phía Server.
            </p>
            <p>
              Hiện tại, tôi đã có kinh nghiệm vận hành mô hình{" "}
              <strong>Client-Server Monolithic</strong> với{" "}
              <strong>Express.js</strong>, có khả năng thiết kế cơ sở dữ liệu và
              triển khai các phương thức RESTful chuẩn xác để phục vụ phía
              Frontend.
            </p>
            <h4>Công nghệ đang sử dụng:</h4>
            <div className="skills-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">RESTful API</span>
              <span className="skill-tag">MongoDB / MySQL</span>
              <span className="skill-tag">MVC Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          {/* Dự án 1: Car Rental */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <div className="project-image-placeholder">🚗</div>
            </div>

            <div className="project-info">
              <div className="project-info">
                <div className="project-header">
                  <h3>Car Rental Management System</h3>
                </div>

                <div className="project-desc">
                  <p>
                    Hệ thống quản lý cho thuê xe gồm Web Admin và Mobile App,
                    trong đó tôi tập trung phát triển backend và hệ thống API.
                    Backend được thiết kế để xử lý toàn bộ nghiệp vụ cốt lõi như
                    quản lý xe, chi nhánh, lịch thuê và giao dịch. Hệ thống hỗ
                    trợ xác thực và phân quyền người dùng bằng JWT, mã hóa mật
                    khẩu với bcrypt, đăng nhập bằng Google OAuth2 và xác thực
                    OTP qua email bằng Nodemailer. Ngoài ra, backend tích hợp
                    cổng thanh toán PayOS để xử lý các giao dịch thuê xe trực
                    tuyến, đảm bảo tính bảo mật, ổn định và nhất quán dữ liệu
                    giữa các nền tảng.
                  </p>
                </div>

                <div className="project-features">
                  <ul>
                    <li>
                      Thiết kế và xây dựng RESTful API cho Web Admin và Mobile
                      App với kiến trúc backend tách biệt.
                    </li>
                    <li>
                      Xây dựng hệ thống xác thực & phân quyền: JWT, bcrypt,
                      Google OAuth2, xác thực OTP qua email.
                    </li>
                    <li>
                      Xử lý nghiệp vụ thuê xe: kiểm tra xe khả dụng, quản lý
                      trạng thái đơn thuê, tính toán chi phí và tích hợp thanh
                      toán PayOS.
                    </li>
                    <li>
                      Thiết kế database MySQL cho các thực thể: người dùng, xe,
                      chi nhánh, lịch thuê, giao dịch và khuyến mãi.
                    </li>
                  </ul>
                </div>

                <div className="project-tech">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MySQL</span>
                  <span>JWT</span>
                  <span>Bcrypt</span>
                  <span>Google OAuth2</span>
                  <span>Nodemailer</span>
                  <span>PayOS</span>
                  <span>RESTful API</span>
                </div>
              </div>

              <div className="project-links">
                <button
                  className="project-link"
                  onClick={() => {
                    setShowERD(true);
                    setCurrentERDIndex(0);
                  }}
                >
                  Database Design (ERD) ↗
                </button>

                <a
                  href="https://github.com/trantuanhao123/KLTN_Backend.git"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Backend Repo ↗
                </a>

                <a
                  href="https://github.com/trantuanhao123/KLTN_Frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Admin Repo ↗
                </a>
              </div>
            </div>
          </div>

          {/* Dự án 2: Weather App */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <div className="project-image-placeholder">☁️</div>
            </div>

            <div className="project-info">
              <span className="project-tag">Frontend Tool</span>
              <div className="project-header">
                <h3>Weather Forecast App</h3>
              </div>

              <div className="project-desc">
                <p>
                  Ứng dụng theo dõi thời tiết sử dụng OpenWeather API. Cung cấp
                  thông tin nhiệt độ, độ ẩm và dự báo trong 7 ngày tới với giao
                  diện người dùng trực quan.
                </p>
              </div>

              <div className="project-tech">
                <span>React + Vite</span>
                <span>OpenWeather API</span>
                <span>Axios</span>
                <span>CSS Modules</span>
              </div>

              <div className="project-links">
                <a href="#" className="project-link">
                  Live Demo ↗
                </a>
                <a href="#" className="project-link">
                  Source Code ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact">
        <div className="contact-card">
          <h2>Get In Touch</h2>
          <p>
            Bạn đang có ý tưởng về dự án mới? Đừng ngần ngại kết nối với tôi qua
            Email hoặc các mạng xã hội bên dưới.
          </p>

          <div className="contact-actions">
            <a href="mailto:trantuanhao308@gmail.com" className="btn-primary">
              Gửi Email cho tôi
            </a>
          </div>

          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/tr%E1%BA%A7n-tu%E1%BA%A5n-h%C3%A0o-8588b3360/"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/trantuanhao123"
              target="_blank"
              rel="noreferrer"
              className="social-link github"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="footer">
        <p>© 2025 Trần Tuấn Hào. Made with Passion and React.</p>
      </footer>

      {/* 7. ERD MODAL */}
      {showERD && (
        <div className="erd-modal-overlay" onClick={() => setShowERD(false)}>
          <div
            className="erd-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="erd-modal-close"
              onClick={() => setShowERD(false)}
            >
              ✕
            </button>

            <div className="erd-modal-header">
              <h2>{erdDiagrams[currentERDIndex].title}</h2>
              <p>{erdDiagrams[currentERDIndex].description}</p>
            </div>

            <div className="erd-modal-image-wrapper">
              <img
                src={erdDiagrams[currentERDIndex].image}
                alt={erdDiagrams[currentERDIndex].title}
                className="erd-modal-image"
              />
            </div>

            <div className="erd-modal-nav">
              <button
                className="erd-nav-btn erd-nav-prev"
                onClick={handlePrevERD}
              >
                ← Previous
              </button>

              <div className="erd-pagination">
                {erdDiagrams.map((_, index) => (
                  <button
                    key={index}
                    className={`erd-dot ${
                      index === currentERDIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentERDIndex(index)}
                  />
                ))}
              </div>

              <button
                className="erd-nav-btn erd-nav-next"
                onClick={handleNextERD}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
