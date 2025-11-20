import { 
  HardHat, 
  Ruler, 
  Truck, 
  Home, 
  Building2, 
  Wrench,
  Users,
  Trophy,
  Clock
} from 'lucide-react';
import { ServiceItem, ProjectItem, StatItem, TestimonialItem, User, Customer } from './types';

export const COMPANY_NAME = "KienTrucPro";
export const CONTACT_PHONE = "0912 345 678";
export const CONTACT_EMAIL = "info@kientrucpro.vn";
export const ADDRESS = "123 Đường Xây Dựng, TP. Đà Nẵng, Việt Nam";

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Tổng Thầu Xây Dựng",
    description: "Quản lý xây dựng toàn diện đảm bảo dự án của bạn hoàn thành đúng tiến độ và ngân sách.",
    longDescription: "Với vai trò Tổng thầu xây dựng, KienTrucPro chịu trách nhiệm toàn diện cho dự án của bạn từ giai đoạn khởi công đến khi bàn giao chìa khóa trao tay. Chúng tôi điều phối tất cả các nguồn lực, bao gồm nhân công, vật tư, thiết bị và các nhà thầu phụ, để đảm bảo chất lượng thi công cao nhất. Quy trình quản lý dự án chuyên nghiệp của chúng tôi giúp tối ưu hóa chi phí, giảm thiểu rủi ro và đảm bảo tiến độ cam kết.",
    features: [
      "Quản lý dự án toàn diện từ A-Z",
      "Kiểm soát chi phí và ngân sách chặt chẽ",
      "Đảm bảo an toàn lao động và vệ sinh môi trường",
      "Báo cáo tiến độ định kỳ minh bạch"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=10",
    icon: HardHat
  },
  {
    id: 2,
    title: "Thiết Kế Kiến Trúc",
    description: "Giải pháp thiết kế sáng tạo và bền vững phù hợp với tầm nhìn và nhu cầu cụ thể của bạn.",
    longDescription: "Dịch vụ thiết kế kiến trúc của chúng tôi kết hợp giữa tính thẩm mỹ nghệ thuật và công năng sử dụng thực tế. Đội ngũ kiến trúc sư giàu kinh nghiệm của KienTrucPro sẽ lắng nghe ý tưởng của bạn và hiện thực hóa chúng thành những bản vẽ chi tiết. Chúng tôi chú trọng đến yếu tố phong thủy, ánh sáng tự nhiên, thông gió và sự hài hòa với cảnh quan xung quanh để tạo nên không gian sống và làm việc lý tưởng.",
    features: [
      "Thiết kế concept và phối cảnh 3D",
      "Hồ sơ thiết kế kỹ thuật thi công chi tiết",
      "Tư vấn phong thủy ứng dụng",
      "Tối ưu hóa công năng và diện tích sử dụng"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=11",
    icon: Ruler
  },
  {
    id: 3,
    title: "Cải Tạo & Sửa Chữa",
    description: "Biến không gian hiện có thành môi trường hiện đại, tiện nghi với tay nghề chuyên gia.",
    longDescription: "Bạn muốn làm mới ngôi nhà cũ kỹ hay thay đổi công năng văn phòng làm việc? Dịch vụ cải tạo và sửa chữa của chúng tôi mang đến giải pháp nhanh chóng, hiệu quả và tiết kiệm. Chúng tôi khảo sát kỹ lưỡng hiện trạng, đề xuất phương án cải tạo tối ưu nhằm đảm bảo kết cấu chịu lực đồng thời mang lại diện mạo hoàn toàn mới cho công trình.",
    features: [
      "Khảo sát và đánh giá kết cấu hiện trạng",
      "Cải tạo nội ngoại thất trọn gói",
      "Nâng tầng và mở rộng diện tích",
      "Xử lý chống thấm, chống dột chuyên nghiệp"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=12",
    icon: Wrench
  },
  {
    id: 4,
    title: "Xây Dựng Công Nghiệp",
    description: "Năng lực thi công hạng nặng cho nhà máy, kho bãi và khu công nghiệp.",
    longDescription: "KienTrucPro cung cấp giải pháp xây dựng công nghiệp bền vững cho nhà xưởng, nhà kho và các khu chế xuất. Chúng tôi hiểu rõ các yêu cầu khắt khe về kết cấu nền móng chịu tải trọng lớn, hệ thống khung thép tiền chế vượt nhịp và các tiêu chuẩn phòng cháy chữa cháy. Tiến độ thi công thần tốc là cam kết của chúng tôi để giúp doanh nghiệp sớm đưa nhà máy vào vận hành.",
    features: [
      "Thi công nhà xưởng khung thép tiền chế",
      "Hệ thống sàn công nghiệp chịu tải cao",
      "Lắp đặt hệ thống M&E công nghiệp",
      "Bảo trì và nâng cấp nhà máy"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=13",
    icon: Truck
  },
  {
    id: 5,
    title: "Nhà Ở Dân Dụng",
    description: "Xây dựng ngôi nhà mơ ước với sự chú trọng đến từng chi tiết, vật liệu chất lượng.",
    longDescription: "Ngôi nhà là tổ ấm, là nơi an cư lạc nghiệp. Chúng tôi đặt tâm huyết vào từng viên gạch để xây dựng nên những ngôi nhà phố, biệt thự bền đẹp theo thời gian. Từ phong cách cổ điển sang trọng đến hiện đại tối giản, KienTrucPro luôn đáp ứng mọi gu thẩm mỹ của gia chủ với cam kết sử dụng vật liệu chính hãng và kỹ thuật thi công tỉ mỉ.",
    features: [
      "Xây nhà trọn gói (Chìa khóa trao tay)",
      "Thi công phần thô và nhân công hoàn thiện",
      "Cam kết không phát sinh chi phí",
      "Bảo hành kết cấu lên đến 10 năm"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=14",
    icon: Home
  },
  {
    id: 6,
    title: "Tòa Nhà Thương Mại",
    description: "Khu phức hợp văn phòng và không gian bán lẻ được thiết kế để tối đa hóa tiềm năng kinh doanh.",
    longDescription: "Các dự án tòa nhà văn phòng, showroom, khách sạn đòi hỏi sự kết hợp hoàn hảo giữa thẩm mỹ thu hút khách hàng và hiệu quả kinh tế cho chủ đầu tư. Chúng tôi cung cấp giải pháp xây dựng tòa nhà thương mại với kiến trúc ấn tượng, hệ thống kỹ thuật thông minh và không gian linh hoạt, sẵn sàng đáp ứng nhu cầu kinh doanh đa dạng.",
    features: [
      "Thi công tòa nhà văn phòng cao tầng",
      "Xây dựng Showroom, Trung tâm thương mại",
      "Hoàn thiện nội thất văn phòng",
      "Hệ thống mặt dựng kính (Façade) hiện đại"
    ],
    imageUrl: "https://picsum.photos/1200/800?random=15",
    icon: Building2
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Tòa Nhà Văn Phòng Skyline",
    category: "commercial",
    location: "TP. Hồ Chí Minh",
    imageUrl: "https://picsum.photos/800/600?random=1",
    description: "Dự án Skyline Tower là biểu tượng mới của khu vực trung tâm thành phố. Với thiết kế kính cường lực toàn phần, tòa nhà tận dụng tối đa ánh sáng tự nhiên và tầm nhìn panorama. Công trình bao gồm 25 tầng văn phòng hạng A, 3 tầng thương mại và 2 tầng hầm đỗ xe thông minh.",
    client: "Skyline Group",
    completionYear: "2023",
    area: "15,000 m²",
    gallery: ["https://picsum.photos/800/600?random=101", "https://picsum.photos/800/600?random=102"]
  },
  {
    id: 2,
    title: "Biệt Thự Green Villa",
    category: "residential",
    location: "Hà Nội",
    imageUrl: "https://picsum.photos/800/600?random=2",
    description: "Biệt thự nghỉ dưỡng phong cách nhiệt đới nằm giữa lòng thủ đô. Thiết kế tập trung vào không gian xanh, giếng trời và sự kết nối giữa con người với thiên nhiên. Sử dụng vật liệu gỗ tự nhiên và đá cẩm thạch nhập khẩu.",
    client: "Gia đình Ông Hùng",
    completionYear: "2024",
    area: "450 m²",
    gallery: ["https://picsum.photos/800/600?random=201", "https://picsum.photos/800/600?random=202"]
  },
  {
    id: 3,
    title: "Nhà Máy Công Nghệ Cao",
    category: "industrial",
    location: "Bình Dương",
    imageUrl: "https://picsum.photos/800/600?random=3",
    description: "Nhà máy sản xuất linh kiện điện tử với tiêu chuẩn phòng sạch Class 1000. Hệ thống kết cấu thép vượt nhịp lớn, sàn chịu lực cao và hệ thống HVAC tiên tiến.",
    client: "Tech Vina Components",
    completionYear: "2022",
    area: "30,000 m²",
    gallery: ["https://picsum.photos/800/600?random=301"]
  },
  {
    id: 4,
    title: "Khu Nghỉ Dưỡng Oceanview",
    category: "commercial",
    location: "Đà Nẵng",
    imageUrl: "https://picsum.photos/800/600?random=4",
    description: "Resort 5 sao ven biển với 100 bungalow biệt lập. Kiến trúc lấy cảm hứng từ làng chài truyền thống nhưng được hiện đại hóa với nội thất sang trọng.",
    client: "Sun Ocean Corp",
    completionYear: "2023",
    area: "5 ha",
    gallery: ["https://picsum.photos/800/600?random=401", "https://picsum.photos/800/600?random=402"]
  },
  {
    id: 5,
    title: "Căn Hộ City Modern",
    category: "residential",
    location: "Đà Nẵng",
    imageUrl: "https://picsum.photos/800/600?random=5",
    description: "Khu căn hộ cao cấp dành cho chuyên gia nước ngoài. Tiện ích bao gồm hồ bơi vô cực, phòng gym và khu BBQ trên sân thượng.",
    client: "CityLand",
    completionYear: "2024",
    area: "12,000 m²",
    gallery: ["https://picsum.photos/800/600?random=501"]
  },
  {
    id: 6,
    title: "Kho Vận Logistics",
    category: "industrial",
    location: "Đồng Nai",
    imageUrl: "https://picsum.photos/800/600?random=6",
    description: "Kho thông minh với hệ thống kệ tự động (AS/RS). Kết cấu sàn siêu phẳng, chịu tải 5 tấn/m2.",
    client: "LogiFast VN",
    completionYear: "2023",
    area: "20,000 m²",
    gallery: ["https://picsum.photos/800/600?random=601"]
  }
];

export const STATS: StatItem[] = [
  { value: "15+", label: "Năm Kinh Nghiệm", icon: Clock },
  { value: "350+", label: "Dự Án Hoàn Thành", icon: Building2 },
  { value: "40+", label: "Giải Thưởng", icon: Trophy },
  { value: "120+", label: "Kỹ Sư Chuyên Gia", icon: Users },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "CEO, TechCorp",
    content: "KienTrucPro đã bàn giao trụ sở chính của chúng tôi trước thời hạn. Sự chú ý đến từng chi tiết là không gì sánh bằng.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Chủ nhà",
    content: "Họ đã biến tầm nhìn về ngôi nhà mơ ước của chúng tôi thành hiện thực. Chuyên nghiệp, sạch sẽ và rất tận tâm.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Nhà phát triển BĐS",
    content: "Một đối tác đáng tin cậy cho các dự án công nghiệp quy mô lớn. Tiêu chuẩn an toàn của họ rất xuất sắc.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

// Mock Users
export const USERS: User[] = [
  { id: 1, username: 'admin', name: 'Quản Trị Viên', role: 'admin', email: 'admin@kientrucpro.vn', lastActive: 'Vừa xong' },
  { id: 2, username: 'editor', name: 'Nguyễn Văn Soạn', role: 'editor', email: 'editor@kientrucpro.vn', lastActive: '2 giờ trước' },
];

// Mock Customers/Leads
export const CUSTOMERS: Customer[] = [
  { id: 1, name: 'Phạm Văn Minh', email: 'minh.pv@gmail.com', phone: '0988 111 222', serviceInterest: 'Thiết Kế & Thi Công', message: 'Tôi cần tư vấn xây biệt thự 200m2 tại Quận 9.', status: 'new', date: '2023-10-25' },
  { id: 2, name: 'Lê Thị Hoa', email: 'hoa.le@company.com', phone: '0912 333 444', serviceInterest: 'Xây Dựng Công Nghiệp', message: 'Báo giá thi công nhà xưởng tiền chế.', status: 'contacted', date: '2023-10-24' },
  { id: 3, name: 'Trần Quốc Tuấn', email: 'tuan.tran@outlook.com', phone: '0909 555 666', serviceInterest: 'Cải Tạo Nhà', message: 'Sửa chữa lại tầng 1 và bếp.', status: 'converted', date: '2023-10-20' },
];
