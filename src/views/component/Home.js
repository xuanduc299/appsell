import React from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import './home.scss';
import Banner from '../../assets/images/admin-03.png';



export const Home = () => {

    const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

    return (
        <Row>
            <div className="tt-home-01">
                <div className="tt-container-01">
                    <div className="tt-banner-01">
                        <img src={Banner} alt='' />
                    </div>
                </div>
            </div>

            {/* grid 1 */}
            <div className="grid">
                <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                    <div className="quote text-center color-black">
                        <blockquote>
                            <h1>Đồng hành bên bạn trên mọi nẻo hành trình</h1>
                            <p className="quote__quote gutter-bottom">{`"Bán lẻ là kênh lớn nhất của chúng tôi và đã
                chứng tỏ là bệ phóng tuyệt vời giúp chúng tôi tăng cường nhận thức của khách hàng về
                thương hiệu và tạo dựng sự hiện diện trực tuyến của mình."`}
                            </p>
                            <cite className="quote__cite color-gray-70 gutter-bottom">Catherine | SoYoung</cite>
                        </blockquote>
                        <span className="quote-img">
                            <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pillar/sell/logos/soyoung-small-8447bcec7f6789f07fc06ebc140dc2d281076b81fd55d3fc2a1f29aae5385b12.png' alt='' />
                        </span>
                    </div>
                </div>
            </div>
            {/* video */}

            <div className="bd-vd">
                <div className="vd-01">
                    <h1>video</h1>
                </div>
            </div>
            {/* grid 2 */}
            <div className="grid">
                <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                    <div className="quote text-center color-black">
                        <blockquote>
                            <h1>Đồng hành bên bạn trên mọi nẻo hành trình</h1>
                            <p className="quote__quote gutter-bottom">{`"Bán lẻ là kênh lớn nhất của chúng tôi và đã
                chứng tỏ là bệ phóng tuyệt vời giúp chúng tôi tăng cường nhận thức của khách hàng về
                thương hiệu và tạo dựng sự hiện diện trực tuyến của mình."`}
                            </p>
                            <cite className="quote__cite color-gray-70 gutter-bottom">Catherine | SoYoung</cite>
                        </blockquote>
                        <span className="quote-img">
                            <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pillar/sell/logos/soyoung-small-8447bcec7f6789f07fc06ebc140dc2d281076b81fd55d3fc2a1f29aae5385b12.png' alt='' />
                        </span>
                    </div>
                </div>
            </div>

            {/* bd-tt-1 */}
            <div className="bd-tt-01">
                <div className="bd-container pillars__wrapper">
                    <div className="bd-left-01">
                        <div className="bd-img-01">
                            <img alt='' />
                        </div>
                    </div>
                    <div className="bd-right-01">
                        <div className="bd-text">
                            <h3 className="bd-text-heading hedding-3">Bán hàng ở mọi nơi</h3>
                            <div className="bd-text-content">
                                <p>
                                    {`Sử dụng một nền tảng để bán sản phẩm bất cứ đâu, 
                                    cho bất kỳ đối tượng nào – bán trực tiếp với Điểm bán hàng 
                                    và bán online qua trang web, mạng xã hội và thị trường trực 
                                    tuyến.`}
                                </p>
                            </div>
                            <a className="bd-icon link--secondary" href="/#">Khám phá các cách thức bán hàng
                                <span>
                                    {`-->`}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* bd-tt-2 */}
            <div className="bd-tt-02">
                <div className="bd-container pillars__wrapper">
                    <div className="bd-left-02">
                        <div className="bd-text">
                            <h3 className="bd-text-heading hedding-3">Định giá theo từng thị trường</h3>
                            <div className="bd-text-content">
                                <p>
                                    {`Có quyền kiểm soát chiến lược định giá quốc tế lớn hơn bằng cách thiết lập mức giá cụ thể cho từng thị trường.`}
                                </p>
                            </div>
                            <a className="bd-icon link--secondary" href="/#">Khám phá các cách thức bán hàng
                                <span>
                                    {`-->`}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="bd-right-02">

                    </div>
                </div>
            </div>
            {/* bd-tt-3 */}
            <div className="bd-tt-03">
                <div className="bd-container pillars__wrapper">
                    <div className="bd-left-03">
                        <div className="bd-img-03">
                            <img alt='' />
                        </div>
                    </div>
                    <div className="bd-right-03">
                        <div className="bd-text">
                            <h3 className="bd-text-heading hedding-3">Vận chuyển thật hiệu quả</h3>
                            <div className="bd-text-content">
                                <p>
                                    {`Giờ đây, app-sell sẽ tự động tính giúp bạn phí vận chuyển và thuế suất của tất cả hãng vận chuyển lớn. Nhờ đó, bạn không cần lo đến những phép toán phiền toái mà khách hàng của bạn lại càng an tâm mua sắm hơn.`}
                                </p>
                            </div>
                            <a className="bd-icon link--secondary" href="/#">Khám phá các cách thức bán hàng
                                <span>
                                    {`-->`}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* bd-tt-4 */}

            <div className="bd-tt-04">
                <div className="bd-container ">
                    <div className="bd-left-04">
                        <div className="bd-text">
                            <div className="section-heading section-heading--mobile-up-align-left">
                                <h3 className="bd-text-heading hedding-1">Nhận sự trợ giúp bạn cần trên mỗi chặng đường</h3>
                            </div>
                            <div class="grids grids--equal-height">
                                <div class="grid__item grid__item--tablet-up-half">
                                    <div className="block">
                                        <h3 class="block__heading heading--4">Bộ phận hỗ trợ của Shopify</h3>
                                        <p class="block__content">Liên hệ với bộ phận hỗ trợ 24/7, cho dù bạn đang khắc phục sự cố hay cần tư vấn kinh doanh.</p>
                                    </div>
                                    <p class="block__cta">
                                        <a href='/#' className="link link--secondary">
                                            Liên hệ bộ phận hỗ trợ
                                            <span class="link__arrow"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class="grids grids--equal-height">
                                <div class="grid__item grid__item--tablet-up-half">
                                    <div className="block">
                                        <h3 class="block__heading heading--4">Bộ phận hỗ trợ của Shopify</h3>
                                        <p class="block__content">Liên hệ với bộ phận hỗ trợ 24/7, cho dù bạn đang khắc phục sự cố hay cần tư vấn kinh doanh.</p>
                                    </div>
                                    <p class="block__cta">
                                        <a href='/#' className="link link--secondary">
                                            Liên hệ bộ phận hỗ trợ
                                            <span class="link__arrow"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div class="grids grids--equal-height">
                                <div class="grid__item grid__item--tablet-up-half">
                                    <div className="block">
                                        <h3 class="block__heading heading--4">Bộ phận hỗ trợ của Shopify</h3>
                                        <p class="block__content">Liên hệ với bộ phận hỗ trợ 24/7, cho dù bạn đang khắc phục sự cố hay cần tư vấn kinh doanh.</p>
                                    </div>
                                    <p class="block__cta">
                                        <a href='/#' className="link link--secondary">
                                            Liên hệ bộ phận hỗ trợ
                                            <span class="link__arrow"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bd-right-04">

                    </div>
                </div>
            </div>

            {/* grid 2 */}
            <div className="grid">
                <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                    <div className="quote text-center color-black">
                        <blockquote>
                            <h1>Bắt đầu hành trình kinh doanh của bạn với NTHT nhes</h1>
                            <p className="quote__quote gutter-bottom">{`Bắt đầu dùng với app-sell miễn phí,  khám phá tất cả công cụ và dịch vụ để khởi động, vận hành và phát triển doanh nghiệp."`}
                            </p>
                            <cite className="quote__cite color-gray-70 gutter-bottom">Catherine | SoYoung</cite>
                        </blockquote>

                        <span className="quote-img">
                            <Button>
                                <NavLink to="/signin" className="signin" >
                                    Sign in
                                </NavLink>
                            </Button>
                        </span>
                    </div>
                </div>
            </div>


        </Row>
    );
};



export default Home;