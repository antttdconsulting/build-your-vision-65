import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Plus, Users, Clock, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Candidates = () => {
  const statusCards = [
    {
      title: "Tất cả ứng viên",
      count: 64,
      icon: Users,
      color: "bg-gray-100 text-gray-700",
    },
    {
      title: "Chờ duyệt",
      count: 3,
      icon: Clock,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Chờ tôi duyệt",
      count: 0,
      icon: Clock,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Đang duyệt",
      count: 0,
      icon: Clock,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Đã duyệt",
      count: 45,
      icon: CheckCircle,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Từ chối",
      count: 16,
      icon: XCircle,
      color: "bg-red-100 text-red-700",
    },
  ];

  const candidates = [
    {
      id: "CV001",
      name: "Nguyễn Văn A",
      position: "Frontend Developer",
      email: "nguyenvana@email.com",
      phone: "0901234567",
      appliedDate: "2025-11-10",
      status: "Đã duyệt",
    },
    {
      id: "CV002",
      name: "Trần Thị B",
      position: "Backend Developer",
      email: "tranthib@email.com",
      phone: "0902345678",
      appliedDate: "2025-11-09",
      status: "Chờ duyệt",
    },
    {
      id: "CV003",
      name: "Lê Văn C",
      position: "UI/UX Designer",
      email: "levanc@email.com",
      phone: "0903456789",
      appliedDate: "2025-11-08",
      status: "Đang duyệt",
    },
    {
      id: "CV004",
      name: "Phạm Thị D",
      position: "Product Manager",
      email: "phamthid@email.com",
      phone: "0904567890",
      appliedDate: "2025-11-07",
      status: "Đã duyệt",
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Đã duyệt":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "Chờ duyệt":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100";
      case "Đang duyệt":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "Từ chối":
        return "bg-red-100 text-red-700 hover:bg-red-100";
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
                placeholder="Tìm kiếm ứng viên..."
                className="pl-10 bg-card"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Thêm mới
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {statusCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-3">
                    <div className={cn("inline-flex p-2 rounded mb-2", card.color)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">{card.title}</p>
                      <p className="text-2xl font-semibold">{card.count}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Candidates Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-semibold">Mã CV</TableHead>
                    <TableHead className="font-semibold">Họ và tên</TableHead>
                    <TableHead className="font-semibold">Vị trí ứng tuyển</TableHead>
                    <TableHead className="font-semibold">Email</TableHead>
                    <TableHead className="font-semibold">Số điện thoại</TableHead>
                    <TableHead className="font-semibold">Ngày nộp</TableHead>
                    <TableHead className="font-semibold">Trạng thái</TableHead>
                    <TableHead className="font-semibold text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.map((candidate) => (
                    <TableRow key={candidate.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium text-primary">{candidate.id}</TableCell>
                      <TableCell className="font-medium">{candidate.name}</TableCell>
                      <TableCell>{candidate.position}</TableCell>
                      <TableCell>{candidate.email}</TableCell>
                      <TableCell>{candidate.phone}</TableCell>
                      <TableCell>{candidate.appliedDate}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadgeColor(candidate.status)} variant="secondary">
                          {candidate.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link to={`/candidate/${candidate.id}`}>
                          <Button variant="link" className="text-primary p-0 h-auto">
                            Xem chi tiết
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Candidates;
