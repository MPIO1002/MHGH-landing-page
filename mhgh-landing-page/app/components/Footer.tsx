import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-[#9c4c1b] flex flex-col items-center pt-6 pb-2 md:pt-8 md:pb-4 relative overflow-hidden">
            {/* Logo và tên game */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-6 mb-2 md:mb-4">
                <Image src="/logo.png" alt="Logo" width={90} height={90} className="w-14 h-14 md:w-[130px] md:h-[130px] object-contain" />
                <Image src="/game-name.png" alt="Tên game" width={140} height={50} className="w-36 h-12 md:w-[250px] md:h-auto object-contain" />
            </div>
            {/* Thanh ngang 1 */}
            <div className="w-3/5 hidden md:flex justify-center mb-1">
                <Image src="/footer-bg.svg" alt="footer-bg" width={1200} height={40} className="w-full h-8 md:h-10 object-cover" />
            </div>
            {/* Thanh ngang 2 */}
            <div className="w-full flex justify-center mb-3">
                <Image src="/footer-decor-1.svg" alt="footer-decor" width={1200} height={40} className="w-full" />
            </div>
            {/* Nội dung bản quyền và thông tin */}
            <div className="text-center text-[10px] md:text-xs lg:text-sm text-white px-2 md:px-4 mx-auto leading-relaxed">
                Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 405/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 08/10/2022<br />
                Quyết định phê duyệt nội dung kịch bản trò chơi Kiếm Hiệp Tình Duyên số: 144/QĐ-PTTH&TTĐT ngày 26/04/2025<br />
                TP. Hà Nội: Tầng 5, Tòa nhà Golden Tower - 275 Đường Nguyễn Trãi, Phường Thanh Xuân Trung, Quận Thanh Xuân, Tp Hà Nội, Việt Nam.<br />
                TP. Hồ Chí Minh: LK7-32, Đường N3, Phường Bình Trung Tây, Tp Thủ Đức, Tp Hồ Chí Minh, Việt Nam. | Đường dây nóng: 1900 8266
            </div>
        </footer>
    );
};

export default Footer;
