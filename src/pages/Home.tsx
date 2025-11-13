import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const reminders = [
    {
      id: 1,
      title: "Phỏng vấn ứng viên Frontend Developer",
      time: "10:00 AM - Hôm nay",
      status: "urgent",
    },
    {
      id: 2,
      title: "Họp xem xét yêu cầu tuyển dụng mới",
      time: "2:00 PM - Hôm nay",
      status: "normal",
    },
    {
      id: 3,
      title: "Đánh giá CV ứng viên Backend",
      time: "4:30 PM - Hôm nay",
      status: "normal",
    },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Page Header */}
        <div className="bg-header-bg border-b border-border shadow-sm">
          <div className="px-6 py-5">
            <h1 className="text-base font-medium text-foreground">TRANG CHỦ</h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <Tabs defaultValue="reminders" className="w-full">
            <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 w-full justify-start mb-4">
              <TabsTrigger
                value="reminders"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent px-0 pb-3"
              >
                Nhắc việc
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reminders" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reminders.map((reminder) => (
                  <Card key={reminder.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-sm font-medium line-clamp-2">
                          {reminder.title}
                        </CardTitle>
                        {reminder.status === "urgent" && (
                          <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{reminder.time}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Truy cập nhanh</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Link
                      to="/jobs"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                    >
                      Xem danh sách yêu cầu tuyển dụng
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
