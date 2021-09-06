import SubjectImage from '../../assets/image/subject.svg';

function SyallbusSubjects(props) {
  return (
    <section className="syallbus-subjects">
      <div className="subject-image">
          <img src={SubjectImage} width="200" height="200" alt="" />
      </div>
      <div className="subject-title">
          <h2>{props.subject}</h2>
      </div>
      <div className="subject-button">
        <div className="button-learn">
          <a href="">Learn</a>
        </div>
        <div className="button-material">
            <a href=""> Material</a>
        </div>
      </div>
    </section>
  );
}

export default SyallbusSubjects;
