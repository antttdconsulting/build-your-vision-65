import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const CandidateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock candidate data
  const candidateData = {
    id: id || "CV001",
    name: "Nguyễn Văn A",
    position: "Frontend Developer",
    email: "nguyenvana@email.com",
    phone: "0901234567",
    address: "Hà Nội, Việt Nam",
    appliedDate: "2025-11-10",
    status: "Đã duyệt",
    dob: "1995-05-15",
    experience: "3 năm",
    education: "Đại học Bách Khoa Hà Nội - Công nghệ thông tin",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Git", "RESTful API"],
    summary: "Frontend Developer với 3 năm kinh nghiệm, chuyên sâu về React.js và TypeScript. Có khả năng làm việc độc lập và teamwork tốt.",
    workHistory: [
      {
        company: "ABC Technology",
        position: "Frontend Developer",
        period: "2023 - Hiện tại",
        description: "Phát triển và bảo trì các dự án web sử dụng React.js",
      },
      {
        company: "XYZ Solutions",
        position: "Junior Frontend Developer",
        period: "2021 - 2023",
        description: "Hỗ trợ phát triển giao diện người dùng và tối ưu hiệu suất",
      },
    ],
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
                CHI TIẾT ỨNG VIÊN
              </h1>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate("/candidates")}
              className="bg-muted hover:bg-muted/80"
            >
              Quay lại
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <Card>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">
                      {candidateData.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{candidateData.name}</CardTitle>
                    <p className="text-base text-muted-foreground">{candidateData.position}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-sm px-4 py-2">
                  {candidateData.status}
                </Badge>
              </div>
            </CardHeader>

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
                    value="experience"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-4 pb-3"
                  >
                    Kinh nghiệm làm việc
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-4 pb-3"
                  >
                    Kỹ năng
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-0">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Email
                          </label>
                          <p className="mt-1 text-base">{candidateData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Số điện thoại
                          </label>
                          <p className="mt-1 text-base">{candidateData.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Địa chỉ
                          </label>
                          <p className="mt-1 text-base">{candidateData.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Ngày sinh
                          </label>
                          <p className="mt-1 text-base">{candidateData.dob}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Kinh nghiệm
                          </label>
                          <p className="mt-1 text-base">{candidateData.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Học vấn
                          </label>
                          <p className="mt-1 text-base">{candidateData.education}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Giới thiệu bản thân
                      </label>
                      <p className="mt-2 text-base leading-relaxed">{candidateData.summary}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="mt-0">
                  <div className="space-y-6">
                    {candidateData.workHistory.map((work, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h3 className="text-base font-semibold">{work.position}</h3>
                        <p className="text-sm text-primary mt-1">{work.company}</p>
                        <p className="text-sm text-muted-foreground mt-1">{work.period}</p>
                        <p className="text-sm mt-3 leading-relaxed">{work.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="mt-0">
                  <div className="flex flex-wrap gap-2">
                    {candidateData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default CandidateDetail;
