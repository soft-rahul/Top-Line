import CourseYearInfo from "./CourseYearInfo";
import YearComponent from "./YearComponent";
import './CourseYearPage.css';
function CourseYearPage() {
    return(
        <>
        <CourseYearInfo/>
        <YearComponent year="I"/>
        <YearComponent year="II"/>
        <YearComponent year="III"/>
        </>
    );
}

export default CourseYearPage;