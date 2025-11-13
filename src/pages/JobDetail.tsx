import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Users, Building, Target } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock job data
  const jobData = {
    id: id || "REC001",
    position: "Frontend Developer",
    department: "IT",
    quantity: 2,
    deadline: "2025-12-15",
    status: "Đang tuyển",
    priority: "Cao",
    description:
      "Chúng tôi đang tìm kiếm Frontend Developer có kinh nghiệm để tham gia vào đội ngũ phát triển sản phẩm của công ty.",
    requirements: [
      "Có ít nhất 2 năm kinh nghiệm với React.js",
      "Thành thạo HTML5, CSS3, JavaScript/TypeScript",
      "Kinh nghiệm với state management (Redux, Zustand)",
      "Hiểu biết về responsive design và cross-browser compatibility",
      "Có kinh nghiệm làm việc với REST API",
    ],
    benefits: [
      "Mức lương cạnh tranh, thỏa thuận theo năng lực",
      "Thưởng theo hiệu suất công việc",
      "Bảo hiểm đầy đủ theo luật lao động",
      "Môi trường làm việc chuyên nghiệp, năng động",
      "Cơ hội thăng tiến và phát triển nghề nghiệp",
    ],
    requestedBy: "Nguyễn Văn A - Trưởng phòng IT",
    createdDate: "2025-11-01",
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Page Header */}
        <div className="bg-header-bg border-b border-border shadow-sm">
          <div className="px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-6 h-6 text-foreground" />
              <h1 className="text-base font-medium text-foreground">
                CHI TIẾT YÊU CẦU TUYỂN DỤNG
              </h1>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate("/jobs")}
              className="bg-muted hover:bg-muted/80"
            >
              Quay lại
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 w-full justify-start mb-6">
                  <TabsTrigger
                    value="general"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-4 pb-3"
                  >
                    Thông tin chung
                  </TabsTrigger>
                  <TabsTrigger
                    value="requirements"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-4 pb-3"
                  >
                    Yêu cầu công việc
                  </TabsTrigger>
                  <TabsTrigger
                    value="benefits"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-4 pb-3"
                  >
                    Quyền lợi
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Mã yêu cầu
                        </label>
                        <p className="mt-1 text-base font-semibold text-primary">
                          {jobData.id}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Vị trí tuyển dụng
                        </label>
                        <p className="mt-1 text-base font-semibold">{jobData.position}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <Building className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Phòng ban
                          </label>
                          <p className="mt-1 text-base">{jobData.department}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Số lượng cần tuyển
                          </label>
                          <p className="mt-1 text-base">{jobData.quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Hạn nộp hồ sơ
                          </label>
                          <p className="mt-1 text-base">{jobData.deadline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Trạng thái
                        </label>
                        <div className="mt-1">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                            {jobData.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Độ ưu tiên
                          </label>
                          <div className="mt-1">
                            <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                              {jobData.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Mô tả công việc
                      </label>
                      <p className="mt-2 text-base leading-relaxed">{jobData.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4 border-t">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Người yêu cầu
                        </label>
                        <p className="mt-1 text-base">{jobData.requestedBy}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Ngày tạo
                        </label>
                        <p className="mt-1 text-base">{jobData.createdDate}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="mt-0">
                  <div>
                    <h3 className="text-base font-semibold mb-4">Yêu cầu ứng viên</h3>
                    <ul className="space-y-3">
                      {jobData.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="mt-0">
                  <div>
                    <h3 className="text-base font-semibold mb-4">Quyền lợi ứng viên</h3>
                    <ul className="space-y-3">
                      {jobData.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-base leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
