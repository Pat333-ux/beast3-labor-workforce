export interface JobPosting {
  id: string;
  title: string;
  employer: string;
  location: string;
  status: "open" | "closed";
  createdAt: string;
}

export class JobRegistry {
  private jobs: JobPosting[] = [];

  createJob(
    title: string,
    employer: string,
    location: string
  ): JobPosting {
    const job: JobPosting = {
      id: crypto.randomUUID(),
      title,
      employer,
      location,
      status: "open",
      createdAt: new Date().toISOString(),
    };

    this.jobs.push(job);

    return job;
  }

  getJobs(): JobPosting[] {
    return this.jobs;
  }
}

export const jobRegistry =
  new JobRegistry();
