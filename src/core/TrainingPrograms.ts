export interface TrainingProgram {
  id: string;
  title: string;
  participants: number;
}

export class TrainingPrograms {
  private programs: TrainingProgram[] = [];

  createProgram(
    title: string
  ): TrainingProgram {
    const program: TrainingProgram = {
      id: crypto.randomUUID(),
      title,
      participants: 0,
    };

    this.programs.push(program);

    return program;
  }

  enroll(id: string) {
    const program = this.programs.find(
      p => p.id === id
    );

    if (program) {
      program.participants++;
    }

    return program;
  }

  getPrograms(): TrainingProgram[] {
    return this.programs;
  }
}

export const trainingPrograms =
  new TrainingPrograms();
