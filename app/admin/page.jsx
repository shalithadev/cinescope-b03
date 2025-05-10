import {
  Film,
  Users,
  MessageSquare,
  Eye,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the CineScope admin dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <Film className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            {/* <div className="text-2xl font-bold">{movies.length}</div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
