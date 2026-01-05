import { useState } from "react";
import profileImg from "./assets/avatar.jpg";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* 4. PROJECTS SECTION (Đã chỉnh sửa sang layout 1 hàng) */}
      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          {/* Dự án 1: Car Rental */}
          <div className="project-card">
            {/* Cột Ảnh (Mockup) */}
            <div className="project-image-wrapper">
              {/* Bạn có thể thay div này bằng thẻ <img> thật sau này */}
              <div className="project-image-placeholder">🚗</div>
            </div>

            {/* Cột Thông tin */}
            <div className="project-info">
              <span className="project-tag">Full-stack (KLTN)</span>
              <div className="project-header">
                <h3>Car Rental System</h3>
              </div>

              <div className="project-desc">
                <p>
                  Hệ thống quản lý thuê xe toàn diện gồm Web Admin và Mobile
                  App. Dự án tập trung vào xử lý nghiệp vụ đặt xe, quản lý trạng
                  thái xe và tối ưu hóa truy vấn dữ liệu thời gian thực.
                </p>
              </div>

              <div className="project-features">
                <ul>
                  <li>
                    Logic quản lý xe, đơn đặt và lịch trình thuê phức tạp.
                  </li>
                  <li>
                    Thiết kế Database quan hệ người dùng - xe - giao dịch.
                  </li>
                  <li>Đồng bộ dữ liệu Real-time giữa Web và App.</li>
                </ul>
              </div>

              <div className="project-tech">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>React</span>
              </div>

              <div className="project-links">
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

          {/* Dự án 3: Task Management */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <div className="project-image-placeholder">✅</div>
            </div>

            <div className="project-info">
              <span className="project-tag">Productivity</span>
              <div className="project-header">
                <h3>Task Management Board</h3>
              </div>

              <div className="project-desc">
                <p>
                  Công cụ quản lý công việc theo phong cách Kanban (Trello). Hỗ
                  trợ thao tác kéo thả (Drag & Drop) mượt mà giúp người dùng tổ
                  chức công việc hiệu quả.
                </p>
              </div>

              <div className="project-tech">
                <span>React</span>
                <span>Dnd-kit</span>
                <span>Local Storage</span>
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
    </div>
  );
}

export default App;
