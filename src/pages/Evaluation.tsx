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
import { Search, Filter, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Evaluation = () => {
  const evaluations = [
    {
      id: "EV001",
      candidateName: "Nguyễn Văn A",
      position: "Frontend Developer",
      interviewer: "Trần Văn B",
      date: "2025-11-12",
      score: 8.5,
      status: "Đạt",
      round: "Vòng 2 - Phỏng vấn chuyên môn",
    },
    {
      id: "EV002",
      candidateName: "Trần Thị B",
      position: "Backend Developer",
      interviewer: "Lê Thị C",
      date: "2025-11-11",
      score: 7.0,
      status: "Đạt",
      round: "Vòng 1 - Phỏng vấn sơ bộ",
    },
    {
      id: "EV003",
      candidateName: "Lê Văn C",
      position: "UI/UX Designer",
      interviewer: "Nguyễn Thị D",
      date: "2025-11-10",
      score: 6.5,
      status: "Chưa đạt",
      round: "Vòng 2 - Phỏng vấn chuyên môn",
    },
    {
      id: "EV004",
      candidateName: "Phạm Thị D",
      position: "Product Manager",
      interviewer: "Trần Văn E",
      date: "2025-11-09",
      score: 9.0,
      status: "Đạt",
      round: "Vòng 3 - Phỏng vấn cuối",
    },
  ];

  const getStatusBadgeColor = (status: string) => {
    return status === "Đạt"
      ? "bg-green-100 text-green-700 hover:bg-green-100"
      : "bg-red-100 text-red-700 hover:bg-red-100";
  };

  const renderStars = (score: number) => {
    const fullStars = Math.floor(score / 2);
    const hasHalfStar = score % 2 >= 1;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < fullStars
                ? "fill-yellow-400 text-yellow-400"
                : index === fullStars && hasHalfStar
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{score}/10</span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Page Header */}
        <div className="bg-header-bg border-b border-border shadow-sm">
          <div className="px-6 py-5">
            <h1 className="text-base font-medium text-foreground">ĐÁNH GIÁ ỨNG VIÊN</h1>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-header-bg border-b border-border shadow-sm">
          <div className="px-6 py-3 flex items-center justify-end gap-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm đánh giá..."
                className="pl-10 bg-card"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Evaluation List Table */}
        <div className="p-6">
          <div className="bg-card rounded border border-border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-semibold">Mã đánh giá</TableHead>
                  <TableHead className="font-semibold">Ứng viên</TableHead>
                  <TableHead className="font-semibold">Vị trí</TableHead>
                  <TableHead className="font-semibold">Vòng phỏng vấn</TableHead>
                  <TableHead className="font-semibold">Người đánh giá</TableHead>
                  <TableHead className="font-semibold">Ngày đánh giá</TableHead>
                  <TableHead className="font-semibold">Điểm số</TableHead>
                  <TableHead className="font-semibold">Kết quả</TableHead>
                  <TableHead className="font-semibold text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {evaluations.map((evaluation) => (
                  <TableRow key={evaluation.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium text-primary">{evaluation.id}</TableCell>
                    <TableCell className="font-medium">{evaluation.candidateName}</TableCell>
                    <TableCell>{evaluation.position}</TableCell>
                    <TableCell>{evaluation.round}</TableCell>
                    <TableCell>{evaluation.interviewer}</TableCell>
                    <TableCell>{evaluation.date}</TableCell>
                    <TableCell>{renderStars(evaluation.score)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(evaluation.status)} variant="secondary">
                        {evaluation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="link" className="text-primary p-0 h-auto">
                        Xem chi tiết
                      </Button>
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

export default Evaluation;
