import { jobRegistry } from "./JobRegistry";
import { candidateManager } from "./CandidateManager";
import { trainingPrograms } from "./TrainingPrograms";

export class WorkforceReport {
  generate() {
    return {
      jobs: jobRegistry.getJobs().length,
      candidates: candidateManager.getCandidates().length,
      programs: trainingPrograms.getPrograms().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const workforceReport =
  new WorkforceReport();
