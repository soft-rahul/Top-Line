import CourseYearInfo from "./CourseYearInfo";
import YearComponent from "./YearComponent";
import './CourseYearPage.css';
function CourseYearPage() {



    return(
        <>
        <CourseYearInfo/>
        <div className="not-available">
        <YearComponent year="I"/>
        <YearComponent year="II"/>

        </div>
        <YearComponent  url="/year-overview" year="III"/>
        </>
    );
}

export default CourseYearPage;