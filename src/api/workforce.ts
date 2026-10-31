import { workforceReport } from "../core/WorkforceReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Labor & Workforce Development",
    report: workforceReport.generate(),
  });
}
