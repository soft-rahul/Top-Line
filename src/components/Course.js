
import CourseItem from './main-components/CourseItem';

export default function Course() {
    return(
        <>
        <CourseItem courseName="BCA" selection="bca" />    
        <CourseItem courseName="BA" selection="ba"/>
        <CourseItem courseName="B.COM"  selection="bcom" />
        <CourseItem courseName="BSc(Bio)" selection="bsc-bio" />
        <CourseItem courseName="BSc(Math)" selection="bsc-math" />
        <CourseItem courseName="BBA" selection="bba"/>
        <CourseItem courseName="DCA" selection="dca" />
        </>
    )
}