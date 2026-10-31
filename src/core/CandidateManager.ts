export interface Candidate {
  id: string;
  name: string;
  skills: string[];
  createdAt: string;
}

export class CandidateManager {
  private candidates: Candidate[] = [];

  registerCandidate(
    name: string,
    skills: string[]
  ): Candidate {
    const candidate: Candidate = {
      id: crypto.randomUUID(),
      name,
      skills,
      createdAt: new Date().toISOString(),
    };

    this.candidates.push(candidate);

    return candidate;
  }

  getCandidates(): Candidate[] {
    return this.candidates;
  }
}

export const candidateManager =
  new CandidateManager();
