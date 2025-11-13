import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const JobList = () => {
  const jobs = [
    {
      id: "REC001",
      position: "Frontend Developer",
      department: "IT",
      quantity: 2,
      deadline: "2025-12-15",
      status: "Đang tuyển",
      priority: "Cao",
    },
    {
      id: "REC002",
      position: "Backend Developer",
      department: "IT",
      quantity: 3,
      deadline: "2025-12-20",
      status: "Đang tuyển",
      priority: "Cao",
    },
    {
      id: "REC003",
      position: "UI/UX Designer",
      department: "Design",
      quantity: 1,
      deadline: "2025-12-10",
      status: "Đang tuyển",
      priority: "Trung bình",
    },
    {
      id: "REC004",
      position: "Product Manager",
      department: "Product",
      quantity: 1,
      deadline: "2025-12-25",
      status: "Mới tạo",
      priority: "Cao",
    },
    {
      id: "REC005",
      position: "Marketing Executive",
      department: "Marketing",
      quantity: 2,
      deadline: "2025-12-18",
      status: "Đang tuyển",
      priority: "Thấp",
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Đang tuyển":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "Mới tạo":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Đã đóng":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case "Cao":
        return "bg-red-100 text-red-700 hover:bg-red-100";
      case "Trung bình":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "Thấp":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Search Header */}
        <div className="bg-header-bg border-b border-border shadow-sm">
          <div className="px-6 py-3 flex items-center justify-end gap-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm yêu cầu tuyển dụng..."
                className="pl-10 bg-card"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Job List Table */}
        <div className="p-6">
          <div className="bg-card rounded border border-border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold">Mã YC</TableHead>
                  <TableHead className="font-semibold">Vị trí tuyển dụng</TableHead>
                  <TableHead className="font-semibold">Phòng ban</TableHead>
                  <TableHead className="font-semibold text-center">Số lượng</TableHead>
                  <TableHead className="font-semibold">Hạn nộp</TableHead>
                  <TableHead className="font-semibold">Trạng thái</TableHead>
                  <TableHead className="font-semibold">Độ ưu tiên</TableHead>
                  <TableHead className="font-semibold text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium text-primary">{job.id}</TableCell>
                    <TableCell className="font-medium">{job.position}</TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell className="text-center">{job.quantity}</TableCell>
                    <TableCell>{job.deadline}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(job.status)} variant="secondary">
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityBadgeColor(job.priority)} variant="secondary">
                        {job.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/job/${job.id}`}>
                        <Button variant="link" className="text-primary p-0 h-auto">
                          Xem chi tiết
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobList;
