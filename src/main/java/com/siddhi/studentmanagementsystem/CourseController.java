package com.siddhi.studentmanagementsystem;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @GetMapping("/{id}")
    public Course getCourse(@PathVariable Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id,
                               @RequestBody Course course) {

        Course existingCourse =
                courseRepository.findById(id).orElse(null);

        if (existingCourse != null) {

            existingCourse.setCourseName(course.getCourseName());
            existingCourse.setCourseCode(course.getCourseCode());

            return courseRepository.save(existingCourse);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteCourse(@PathVariable Long id) {

        courseRepository.deleteById(id);

        return "Course deleted successfully";
    }
}