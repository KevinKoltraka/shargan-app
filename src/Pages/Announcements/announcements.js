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
        {
          id: 1,
          title:
            "Invited on SCAN TV: Discussing the Impact of State Administration Salary Increases on Private Business Behavior 🤔",
          category: "News",
          details:
            "The increase in salaries in the state administration is expected to affect the private sector as well, as many employers will feel compelled to increase salaries in order to retain employees and maintain competition in the labor market. This pressure can be especially challenging for small and medium-sized businesses, which may not have sufficient resources to cope with increased costs. On the other hand, some businesses may try to improve working conditions or offer other non-financial benefits to attract and retain talent.",
          media: {
            type: "video",
            url: "https://www.youtube.com/embed/IPU8XihwMB8",
          },
        },
        {
          id: 2,
          title: "Invited on SCAN TV: Addressing the Risks Faced by Minors in the Workplace 👷‍♂️⚠️",
          category: "Events",
          details: "The employment of minors carries numerous risks, including violation of their rights, risk to health and safety, and negative impact on their education. It is essential to strengthen safeguards and ensure that their work is legal, ethical and within the limits allowed by law.",
          media: {
            type: "video",
            url: "/instavid.mp4",
          },
        },
        {
          id: 3,
          title: "Invited on SCAN TV: Addressing the Risks Faced by Minors in the Workplace 👷‍♂️⚠️",
          category: "Events",
          details: "The employment of minors carries numerous risks, including violation of their rights, risk to health and safety, and negative impact on their education. It is essential to strengthen safeguards and ensure that their work is legal, ethical and within the limits allowed by law.",
          media: {
            type: "video",
            url: "/instavid2.mp4",
          },
        },
        {
          id: 4,
          title: "",
          category: "News",
          details:
            "",
        },
        {
          id: 5,
          title: "",
          category: "Updates",
          details: "",
        },
        {
          id: 6,
          title: "",
          category: "Events",
          details:
            "",
          media: { type: "image", url: "https://via.placeholder.com/400" },
        },
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
            {item.media && item.media.type === "image" && (
              <img src={item.media.url} alt={item.title} className="media" />
            )}
            {item.media &&
              item.media.type === "video" &&
              (item.media.url.includes("youtube.com/embed") ? (
                <div className="video-wrapper">
                  <iframe
                    src={item.media.url}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : item.media.url.includes("instagram.com") ? (
                <div className="video-wrapper">
                  <iframe
                    src={item.media.embedUrl}
                    title={item.title}
                    width="400"
                    height="600"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <video controls className="media">
                  <source src={item.media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filtered.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Announcements;
