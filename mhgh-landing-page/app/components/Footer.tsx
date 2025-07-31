import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-[#3f0c01] via-[#631405] to-[#3f0c01] flex flex-col items-center pt-6 pb-2 md:pt-8 md:pb-4 relative overflow-hidden z-40">
            {/* Logo và tên game */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6 mb-2 md:mb-4 w-full">
                <div className="flex flex-row items-center justify-center w-full">
                    <img src="/logo.png" alt="Logo" width={90} height={90} className="w-14 h-14 md:w-[130px] md:h-[130px] object-contain" />
                    <img src="/game-name.png" alt="Tên game" width={140} height={50} className="w-40 h-20 md:w-[250px] md:h-auto object-contain ml-2" />
                    <div className="hidden md:block ml-8 text-left text-white text-xs md:text-sm lg:text-base font-normal">
                        <div className="mb-1"><span className="font-semibold">Tên sản phẩm:</span> <span className="ml-2">Mộng Huyễn Giang Hồ</span></div>
                        <div className="mb-1"><span className="font-semibold">Thiết bị tương thích:</span> <span className="ml-2">Điện thoại thông minh, máy tính bảng và PC</span></div>
                        <div className="mb-1"><span className="font-semibold">Cấu hình:</span> <span className="ml-2">Android 5.1, RAM 2GB trở lên<br />iOS 9.0, iPhone 6 trở lên</span></div>
                        <div><span className="font-semibold">Dung lượng yêu cầu:</span> <span className="ml-2">1 GB</span></div>
                    </div>
                </div>
            </div>
            {/* Thanh ngang 2 */}
            <div className="w-full flex justify-center mb-3">
                <img src="/footer-decor-1.svg" alt="footer-decor" width={1200} height={40} className="w-full" />
            </div>
            {/* Nội dung bản quyền và thông tin */}
            <div className="flex flex-col items-center justify-center w-full mb-5">
                <img src="/company-logo.png" alt="Company Logo" width={120} height={60} className="mb-2 w-[120px] h-[60px] md:w-[400px] md:h-[200px] object-contain" loading="lazy" />
                <div className="text-center md:text-xl text-base lg:text-lg text-white px-2 md:px-4 mx-auto leading-relaxed font-semibold">
                    PHÁT HÀNH BỞI CÔNG TY CỔ PHẦN GGO<br />
                    <span className="block mt-2 md:text-lg text-sm font-normal">
                        Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 103/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 16/3/2020<br />
                        Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 861/QĐ-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/05/2020
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
