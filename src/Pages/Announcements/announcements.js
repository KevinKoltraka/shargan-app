import React, { useState, useEffect } from "react";
import "./announcement.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  // Mock API fetch
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = [
        { id: 1, title: "New Feature Release 🚀", category: "Updates", details: "We are thrilled to announce our new feature: Real-Time Analytics." },
        { id: 2, title: "Upcoming Webinar 📅", category: "Events", details: "Join our free webinar on AI trends next week!" },
        { id: 3, title: "Holiday Discounts 🎁", category: "News", details: "Enjoy up to 50% off on our premium subscriptions this festive season!" },
        { id: 4, title: "We're Hiring! 🚀", category: "News", details: "Exciting roles are open in our engineering and marketing teams." },
        { id: 5, title: "System Maintenance 🛠️", category: "Updates", details: "Scheduled maintenance on November 20th, 2024." },
        { id: 6, title: "User Feedback Survey ✍️", category: "Events", details: "Your feedback matters. Take our short survey and help us improve!" },
      ];
      setAnnouncements(data);
      setFiltered(data);
    };

    fetchAnnouncements();
  }, []);

  // Handle filtering
  const handleFilter = (category) => {
    setCategory(category);
    if (category === "All") {
      setFiltered(announcements);
    } else {
      setFiltered(announcements.filter((item) => item.category === category));
    }
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="announcements-section">
      <header className="header">
        <h1>Announcements</h1>
      </header>

      <div className="filters">
        {["All", "News", "Updates", "Events"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${category === cat ? "active" : ""}`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="announcement-cards">
        {currentItems.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.details}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filtered.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
