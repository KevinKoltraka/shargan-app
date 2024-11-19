import React, { useState, useEffect } from "react";
import "./announcement.css";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

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
          title:
            "Invited on SCAN TV: Addressing the Risks Faced by Minors in the Workplace 👷‍♂️⚠️",
          category: "News",
          details:
            "The employment of minors poses serious risks, such as violation of basic rights, exposure to hazardous working conditions and negative impact on their educational, emotional and physical development. Often, minors engage in illegal or non-standard work, exposing them to abuse and exploitation. To address these challenges, it is imperative to strengthen the enforcement of laws that protect minors, educate families and employers about the importance of ethical standards, and promote educational opportunities that prepare them for a safer and more sustainable future.",
          media: {
            type: "video",
            url: "/instavid.mp4",
          },
        },
        {
          id: 3,
          title:
            "Invited on SCAN TV: Can Employment of Minors Solve the Workforce Crisis?",
          category: "News",
          details:
            "The use of minors as a solution to the labor crisis raises serious ethical, legal and social concerns. Although it may be seen as a quick fix for the lack of workers, employing minors often violates their rights, impairs their educational and emotional development, and exposes them to workplace hazards. To address the workforce crisis, it is important to invest in policies that promote vocational training, improving working conditions and attracting talent from other population groups that are not sufficiently represented in the labor market, always respecting the standards legal and ethical.",
          media: {
            type: "video",
            url: "/instavid2.mp4",
          },
        },
        {
          id: 4,
          title: "Invited on SCAN TV: Can businesses employ minors?",
          category: "News",
          details:
            "Employment of minors is permitted in many jurisdictions, but strictly regulated to protect their health, safety and welfare. Laws often set clear limits on the type of work they can do, the hours they are allowed to work and the minimum age for employment. While some forms of light and supervised work may be acceptable, businesses must be careful to avoid violations that could result in legal and ethical consequences. Adherence to these rules is essential to ensure that the employment of minors is legal and in accordance with international standards for children's rights.",
          media: {
            type: "video",
            url: "/instavid3.mp4",
          },
        },
        {
          id: 5,
          title: "New collaboration on the way 🎨🤝@b.n_creative_design",
          category: "Updates",
          details:
            "We are thrilled to announce an exciting new collaboration with a renowned design company, bringing together creativity and innovation to deliver exceptional results. This partnership aims to combine our expertise with their cutting-edge design solutions, creating unique and impactful experiences. Stay tuned for more details as we work together to push the boundaries of design and bring fresh, inspiring ideas to life!",
          media: {
            type: "image",
            url: "/collab.webp",
          },
        },
        {
          id: 6,
          title:
            "Shargan Consulting completed the pilot project in the preparation of applicants for the position of 'Human Resources Specialist'. Thank you Ms. Jurgensa Dosti for the professionalism and commitment..🙏👏",
          category: "Updates",
          media: {
            type: "image",
            url: "/training.jpg",
          },
        },
        {
          id: 7,
          title:
            "Ms. Jurgensa expresses her gratitude: 'I would like to sincerely thank @shargan_consulting for providing me with such a valuable and enriching experience. It has truly been a rewarding journey, and I am grateful from the bottom of my heart. ❤️'",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training2.mp4",
          },
        },
        {
          id: 8,
          title:
            "Paradoxical leadership is the way of management that manages to balance the opposite needs that enable the growth of the company, in an almost natural way. Soon we will have the opportunity to organize this training again.",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training3.mp4",
          },
        },
        {
          id: 9,
          title:
            "The next training from Shargan Consulting will deal with a very interesting topic 'Paradoxical leadership, the opposite who fits' on 06.04.2024 at 11:00 near its offices in Pajtoni Center. We welcome you!",
          category: "Updates",
          
          media: {
            type: "image",
            url: "/training4.jpg",
            style: { height: "100%" },
          },
        },
        {
          id: 10,
          title:
            "The month of March is dedicated to the figure of the woman and Shargan Consulting shared with the participants the topic 'Executive presence of the woman (not masculinized) at work' with trainer Dr. Matilda Likaj.",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training5.mp4",
          },
        },
        {
          id: 11,
          title:
            "The training conducted on 24.02.2024 on the analysis and prevention of staff turnover by Shargan Consulting, enabled us to discuss with professionals from different industries the real situation of Albanian companies and the importance of taking measures against this phenomenon.",
          category: "Updates",
          media: {
            type: "video",
            url: "/training6.mp4",
          },
        },
        {
          id: 12,
          title:
            "Training-discussion 'We said to work, but not to die from working hours' P, on the balance of professional life-personal life, for which everyone fights.",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training7.mp4",
          },
        },
        {
          id: 13,
          title:
            "Round table with Primary Dental staff on team building, customer care and sales",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training8.mp4",
          },
        },
        {
          id: 14,
          title:
            "Staff turnover is the wound that damages Albanian companies every day. Analysis of the causes and measures to reduce the percentage have become necessary. Shargan Consulting is ready to help reduce this phenomenon.",
          category: "Updates",
          media: {
            type: "video",
            url: "/training9.mp4",
          },
        },
        {
          id: 15,
          title:
            "Employers, attention! See what employers are looking for.",
          category: "Updates",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training10.mp4",
          },
        },
        {
          id: 16,
          title:
            "Shargan Consulting, in the next collaboration with the best companies in the market, offers employment",
          category: "Events",
          details: "👉 Contact us for more information!",
          details2: "📞 Contact: +355 69 930 5604",
          details3: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "image",
            url: "/njoftim.jpg",
          },
        },
        {
          id: 17,
          title:
            "Shargan Consulting offers the new program of mentoring and theoretical and professional preparation in the position of 'Human Resources Specialist' as well as the possibility of presenting applicants' candidacies to interested companies",
          category: "Updates",
          media: {
            type: "video",
            url: "/training11.mp4",
          },
        },
        {
          id: 18,
          title:
            "Human resources in Albania...",
          category: "News",
          details: "Human resources in Albania have advanced notably in recent years, emphasizing talent development, employee retention, and aligning with global standards. Despite challenges such as skill gaps, high turnover, and workforce migration, organizations are improving workplace culture, offering professional growth opportunities, and implementing innovative recruitment strategies to address the evolving demands of the local labor market.",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid4.mp4",
          },
        },
        {
          id: 19,
          title:
            "Two important elements in an interview",
          category: "News",
          details: "Two important elements in an interview are preparation and effective communication. Preparation involves researching the company, understanding the role, and practicing responses to common questions. Effective communication ensures you present your skills clearly, maintain professionalism, and build a positive connection with the interviewer.",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training12.mp4",
          },
        },
        {
          id: 20,
          title:
            "Interview with piskproduction!! (part 2)",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid5.mp4",
          },
        },
        {
          id: 21,
          title:
            "Interview with piskproduction!! (part 1)",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/instavid6.mp4",
          },
        },
        {
          id: 22,
          title:
            "How to understand TOXIC employees",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training13.mp4",
          },
        },
        {
          id: 23,
          title:
            "'Burnout, awareness, identification, treatment' training cycles began",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training14.mp4",
          },
        },
        {
          id: 24,
          title:
            "Let's develop empathy together",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/training15.mp4",
          },
        },
        {
          id: 25,
          title:
            "Shargan OFFERS...",
          category: "News",
          details2: "👉 Contact us for more information!",
          details3: "📞 Contact: +355 69 930 5604",
          details4: "📧 Email: info@sharganconsulting.com",
          media: {
            type: "video",
            url: "/infoservice.mp4",
          },
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
            <p>{item.details2}</p>
            <p>{item.details3}</p>
            <p>{item.details4}</p>
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
                    style={item.media.style}
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
                    style={item.media.style} 
                  ></iframe>
                </div>
              ) : (
                <video
                  controls
                  className="media"
                  style={item.media.style} 
                >
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
