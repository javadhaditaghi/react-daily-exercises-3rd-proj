import "./Team.css";
import jsonData from "./Team.json"

const Team = () => {
    return (
        <section id="team" className="team">


            <div className="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">

                <div className="row gy-5">

                    {jsonData.map(member => (
                        <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                            <div className="member-img">
                                <img src={member.imageSrc} className="img-fluid" alt="" />
                                <div className="social">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>{member.name}</h4>
                                <span>{member.position}</span>
                                <p>{member.description}</p>
                            </div>
                        </div>

                    ))}










                </div>

            </div>

        </section>
    )
}

export default Team