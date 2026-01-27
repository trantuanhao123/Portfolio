import { useState } from "react";
import profileImg from "./assets/avatar.jpg";
import erdOverview from "./assets/erd-overview.png";
import erdRental from "./assets/erd-rental-flow.png";
import hexamarketArch from "./assets/architecture-diagram.png";
import hexamarketERD from "./assets/erd_hexamarket.png";

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
    {
      title: "Hexamarket Architecture",
      description:
        "Tổng quan kiến trúc hệ thống: API Layer, Service Layer, DB, Cache, Message Queue",
      image: hexamarketArch,
    },
    {
      title: "Hexamarket Database Design",
      description:
        "Thiết kế CSDL cho hệ thống thương mại điện tử: product, variant, inventory, order, user...",
      image: hexamarketERD,
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
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">RabbitMQ</span>
              <span className="skill-tag">JWT Auth</span>
              <span className="skill-tag">REST API Design</span>
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

          {/* Dự án 2: Hexamarket E-Commerce Backend */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <div className="project-image-placeholder">🛒</div>
            </div>

            <div className="project-info">
              <span className="project-tag">Enterprise Backend</span>

              <div className="project-header">
                <h3>Hexamarket – High Performance E-Commerce Backend</h3>
              </div>

              <div className="project-desc">
                <p>
                  Hệ thống backend thương mại điện tử hiệu năng cao xây dựng
                  bằng <strong>Spring Boot</strong>, tập trung vào xử lý đồng
                  thời, bảo mật và tối ưu hiệu suất. Dự án mô phỏng kiến trúc
                  backend thực tế cho nền tảng B2C với kiểm soát tồn kho chặt
                  chẽ, caching, message queue và cơ chế chống overselling. Hệ
                  thống cũng triển khai cơ chế{" "}
                  <strong>Email Verification</strong> khi đăng ký tài khoản và{" "}
                  <strong>Password Reset Flow</strong> thông qua email token,
                  đảm bảo xác thực người dùng và tăng cường bảo mật tài khoản.
                </p>
              </div>

              <div className="project-features">
                <ul>
                  <li>
                    Xây dựng hệ thống xác thực Stateless với{" "}
                    <strong>JWT + Refresh Token Rotation</strong>, Redis Token
                    Blacklist.
                  </li>
                  <li>
                    Triển khai luồng <strong>Email Verification</strong> và{" "}
                    <strong>Password Reset</strong> bằng{" "}
                    <strong>Spring Boot Mail</strong>, sử dụng token ngắn hạn
                    lưu trong Database/Redis để đảm bảo chỉ người sở hữu email
                    mới có thể kích hoạt tài khoản hoặc thay đổi mật khẩu.
                  </li>
                  <li>
                    Bảo vệ tồn kho bằng <strong>Pessimistic Locking</strong> để
                    tránh overselling khi nhiều người mua cùng lúc.
                  </li>
                  <li>
                    Sử dụng <strong>PostgreSQL JSONB + GIN Index</strong> cho
                    thuộc tính sản phẩm động (RAM, Size, Screen...).
                  </li>
                  <li>
                    Tối ưu hiệu năng với <strong>Redis Cache</strong> và xử lý
                    tác vụ bất đồng bộ bằng <strong>RabbitMQ</strong>.
                  </li>
                  <li>
                    Tự động hủy đơn chưa thanh toán sau 30 phút bằng Redis TTL /
                    Scheduled Job.
                  </li>
                </ul>
              </div>

              <div className="project-tech">
                <span>Java 21</span>
                <span>Spring Boot</span>
                <span>Spring Security</span>
                <span>Spring Mail</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>RabbitMQ</span>
                <span>JWT</span>
                <span>Flyway</span>
                <span>Docker</span>
              </div>

              <div className="project-links">
                <button
                  className="project-link"
                  onClick={() => {
                    setShowERD(true);
                    setCurrentERDIndex(2);
                  }}
                >
                  System Architecture ↗
                </button>

                <button
                  className="project-link"
                  onClick={() => {
                    setShowERD(true);
                    setCurrentERDIndex(3);
                  }}
                >
                  Database Design (ERD) ↗
                </button>

                <a
                  href="https://github.com/trantuanhao123/SpringBoot_HexaMarket"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Backend Repository ↗
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
