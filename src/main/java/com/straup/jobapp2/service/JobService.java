package com.straup.jobapp2.service;

import com.straup.jobapp2.model.Job;
import com.straup.jobapp2.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService{
    //@Autowired
    private final JobRepository jr;

    public JobService(JobRepository jr){
        this.jr = jr;
    }

    public List<Job> getAllJobs(){
        return jr.findAll();
    }

    public Job getJobById(Integer id){
        return jr.getJobById(id);
    }

    public Job addJob(Job job){
        return jr.save(job);
    }

    public void deleteJob(Integer id){
        jr.deleteById(id);
    }
}

