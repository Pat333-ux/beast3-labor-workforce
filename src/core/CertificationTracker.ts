export interface Certification {
  id: string;
  candidateId: string;
  title: string;
  issuedAt: string;
}

export class CertificationTracker {
  private certifications: Certification[] = [];

  issueCertification(
    candidateId: string,
    title: string
  ): Certification {
    const certification: Certification = {
      id: crypto.randomUUID(),
      candidateId,
      title,
      issuedAt: new Date().toISOString(),
    };

    this.certifications.push(certification);

    return certification;
  }

  getCertifications(): Certification[] {
    return this.certifications;
  }
}

export const certificationTracker =
  new CertificationTracker();
