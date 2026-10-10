package com.siddhi.studentmanagementsystem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AcademicRecordRepository
        extends JpaRepository<AcademicRecord, Long> {
}