package com.straup.jobapp2.controller;


import com.straup.jobapp2.model.Job;
import com.straup.jobapp2.service.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobService js; //@Autowired

    public JobController(JobService js){
        this.js = js;
    }


    @GetMapping
    public List<Job> getAllJobs(){
        return js.getAllJobs();
    }

    @GetMapping("/{id}")
    public Job getById(@PathVariable Integer id){
        return js.getJobById(id);
    }

    @PostMapping()
    public Job addJob(@RequestBody Job job){
        return js.addJob(job);

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        js.deleteJob(id);
    }


}
