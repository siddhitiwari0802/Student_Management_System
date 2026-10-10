package com.siddhi.studentmanagementsystem;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/academic-records")
public class AcademicRecordController {

    private final AcademicRecordRepository academicRecordRepository;

    public AcademicRecordController(
            AcademicRecordRepository academicRecordRepository) {
        this.academicRecordRepository = academicRecordRepository;
    }

    @GetMapping
    public List<AcademicRecord> getAllRecords() {
        return academicRecordRepository.findAll();
    }

    @PostMapping
    public AcademicRecord addRecord(
            @RequestBody AcademicRecord record) {

        return academicRecordRepository.save(record);
    }

    @GetMapping("/{id}")
    public AcademicRecord getRecord(@PathVariable Long id) {

        return academicRecordRepository
                .findById(id)
                .orElse(null);
    }

    @PutMapping("/{id}")
    public AcademicRecord updateRecord(
            @PathVariable Long id,
            @RequestBody AcademicRecord record) {

        AcademicRecord existingRecord =
                academicRecordRepository.findById(id).orElse(null);

        if (existingRecord != null) {

            existingRecord.setStudentId(record.getStudentId());
            existingRecord.setSemester(record.getSemester());
            existingRecord.setMarks(record.getMarks());
            existingRecord.setGrade(record.getGrade());

            return academicRecordRepository.save(existingRecord);
        }

        return null;
    }

    @DeleteMapping("/{id}")
    public String deleteRecord(@PathVariable Long id) {

        academicRecordRepository.deleteById(id);

        return "Academic record deleted successfully";
    }
}