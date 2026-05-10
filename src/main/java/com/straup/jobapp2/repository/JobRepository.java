package com.straup.jobapp2.repository;

import com.straup.jobapp2.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
    public Job getJobById(Integer id);
}
