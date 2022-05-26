import React from 'react';
import './style.scss'
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import sr_img01 from '../../assets/images/rsz_img-tt-04.png'
import sr_img02 from '../../assets/images/img-tt-06.png'
import sr_img03 from '../../assets/images/img-tt-07.png'
// function ButtonClick() { }

export const Services = () => {

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
            {/* // title sell 1 */}
            <div className="tt-bd-01">
                <div className="containers">
                    <div className="tt-text-left">
                        <div className="tt-text-left-top">
                            <h1 className="section-heading__heading heading--jumbo text-left color-green-80 pillar-intro__heading"><span className="pillar-intro__highlight">Bán hàng —</span> khắp mọi nơi</h1>
                            <p className="section-heading__subhead text-left color-gray-80 heading--3 pillar-intro__subhead">Một nền tảng cho phép bán hàng dù khách hàng ở bất kỳ đâu—trực tuyến, trực tiếp, và bất kỳ nơi nào khác&nbsp;.</p>
                        </div>
                        <div className="tt-text-left-bottom">
                            <ul className="pillar-nav__list">
                                <li className="pillar-nav__item">
                                    <a className="pillar-nav__link link-scroll-to" aria-hidden="true" href="/#">
                                        <p className="text-major pillar-nav__item-name">Cửa hàng trực tuyến</p>
                                        <p className="pillar-nav__item-description color-gray-80">Bán hàng trực tuyến bằng&nbsp;một trang web thương mại điện tử</p>
                                    </a>
                                </li>

                                <li className="pillar-nav__item">
                                    <a className="pillar-nav__link link-scroll-to" aria-hidden="true" href="/#">
                                        <p className="text-major pillar-nav__item-name">Điểm bán hàng</p>
                                        <p className="pillar-nav__item-description color-gray-80">Bán hàng trực tiếp tại các địa điểm bán lẻ, cửa hàng pop-up và&nbsp;nhiều lựa chọn khác</p>

                                    </a>
                                </li>

                                <li className="pillar-nav__item">
                                    <a className="pillar-nav__link link-scroll-to" aria-hidden="true" href="/#">
                                        <p className="text-major pillar-nav__item-name">Nút Mua</p>
                                        <p className="pillar-nav__item-description color-gray-80">Thêm tính năng thương mại điện tử vào bất cứ trang web hay blog&nbsp;nào</p>
                                    </a>
                                </li>

                                <li className="pillar-nav__item">
                                    <a className="pillar-nav__link link-scroll-to" aria-hidden="true" href="/#">
                                        <p className="text-major pillar-nav__item-name">Kênh bán hàng</p>
                                        <p className="pillar-nav__item-description color-gray-80">Bán hàng trên mạng truyền thông xã hội, thị trường trực tuyến và&nbsp;nhiều lựa chọn khác</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tt-text-right">
                        <div className="tt-text-right-container">
                            <div className="tt-text-right-img-left">
                                <img src={sr_img01} alt="" style={{ width: 385, height: 810 }} />
                            </div>
                            <div className="tt-text-right-img-right">
                                <div className="tt-text-right-img-right-top">
                                    <img src={sr_img02} alt="" style={{ width: 385, height: 400, marginLeft: 10, marginBottom: 10 }} />
                                </div>
                                <div className="tt-text-right-img-right-bottom">
                                    <img src={sr_img03} alt="" style={{ width: 385, height: 400, marginLeft: 10, marginTop: 10 }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* title sell 2 */}
            <div className="tt-bd-02">
                <div className="tt-bd-02-container">
                    <div className="tt-bd-02-left">
                        <div className="tt-bd-02-left-margin">
                            <div className="pillar-section__content">
                                <div className="section-heading section-heading--mobile-up-align-left pillar-section__heading-container">
                                    <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom">Cửa hàng trực tuyến theo yêu cầu</p>
                                    <h2 className="section-heading__heading heading--2 text-left gutter-bottom pillar-section__heading">Thương hiệu của bạn, cách làm&nbsp;của bạn</h2>
                                    <p className="section-heading__subhead text-major text-left color-gray-80 gutter-bottom--reset">Mang sản phẩm vào cuộc sống nhờ trang web thương mại điện tử.</p>
                                </div>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Hơn 70 chủ đề
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Mang thương hiệu vào cuộc sống nhờ các chủ đề đáp ứng,&nbsp;có thể tùy chỉnh.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Trình tạo cửa hàng kéo và thả
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Tạo cửa hàng mà không cần kỹ năng lập trình&nbsp;hay thiết kế.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Miền tùy chỉnh
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Dùng miền của bạn hoặc mua miền qua&nbsp;Shopify.
                                </p>
                            </div>

                            <div className="hide--mobile pillar-section__cta--online-store">
                                <a data-event-page="sell" data-event-category="sell"
                                    data-event-action="online-store" data-event-label="learn"
                                    className="link link--secondary" href="/online">Tìm hiểu về cửa hàng trực tuyến&nbsp;
                                    <span className="link__arrow"><svg className="icon link__arrow-inner"
                                        aria-hidden="true" focusable="false">
                                        <use xlinkHref="#modules-arrow-right"></use> </svg></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="tt-bd-02-right">
                        <div className="tt-bd-02-right-img">
                            <img alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* title sell 2 */}

            {/* grid 1 */}

            <div className="grid">
                <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                    <div className="quote text-center color-black">
                        <blockquote>
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

            {/* grid 1 */}

            {/* title sell 3: */}

            <div className="tt-bd-03">
                <div className="tt-bd-03-container">
                    <div className="tt-bd-03-left">
                        <div className="tt-bd-03-left-margin">
                            <div className="pillar-section__content">
                                <div className="section-heading-03 section-heading--mobile-up-align-left-03 pillar-section__heading-container-03">
                                    <p className="section-heading__kicker-03 heading--5 color-black text-left gutter-bottom-03">ĐIỂM BÁN HÀNG</p>
                                    <h2 className="section-heading__heading-03 heading--2 text-left gutter-bottom pillar-section__heading">Trải nghiệm bán lẻ khác biệt</h2>
                                    <p className="section-heading__subhead-03 text-major text-left color-gray-80 gutter-bottom--reset-03">Tăng doanh số bán hàng trực tiếp.</p>
                                </div>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Trải nghiệm mua sắm thú vị hơn
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Cung cấp cho khách hàng dịch vụ được cá nhân hóa,&nbsp; khả năng mua sắm linh hoạt và trả lại dễ dàng.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Phần mềm dễ sử dụng
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Đơn giản hóa thiết lập cửa hàng và &nbsp;đào tạo nhân viên.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Công cụ quản lý hành chính tích hợp
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Dùng một công cụ để quản lý toàn bộ sản phẩma&nbsp;kho hàng và khách hàng—dù bạn bán hàng tại nhiều địa điểm.
                                </p>
                            </div>

                            <div className="hide--mobile pillar-section__cta--online-store">
                                <a data-event-page="sell" data-event-category="sell"
                                    data-event-action="online-store" data-event-label="learn"
                                    className="link link--secondary" href="/online">Tìm hiểu về cửa hàng trực tuyến&nbsp;
                                    <span className="link__arrow"><svg className="icon link__arrow-inner"
                                        aria-hidden="true" focusable="false">
                                        <use xlinkHref="#modules-arrow-right"></use> </svg></span></a>
                            </div>
                        </div>

                    </div>
                    <div className="tt-bd-03-right">
                        <div className="tt-bd-03-right-img">
                            <img alt='' />
                        </div>

                    </div>
                </div>
            </div>
            {/* title sell 3: */}

            {/* grid 2 */}

            <div className="grid">
                <div className="grid__item grid__item--mobile-up-align-center text-center pillar-testimonial--inline">
                    <div className="quote text-center color-black">
                        <blockquote>
                            <p className="quote__quote gutter-bottom">{`"Bán lẻ là kênh lớn nhất của chúng tôi và đã
                chứng tỏ là bệ phóng tuyệt vời giúp chúng tôi tăng cường nhận thức của khách hàng về thương
                hiệu và tạo dựng sự hiện diện trực tuyến của mình."`}
                            </p>
                            <cite className="quote__cite color-gray-70 gutter-bottom">Catherine | SoYoung</cite>
                        </blockquote>
                        <span className="quote-img">
                            <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/pillar/sell/logos/soyoung-small-8447bcec7f6789f07fc06ebc140dc2d281076b81fd55d3fc2a1f29aae5385b12.png' alt='' />
                        </span>
                    </div>
                </div>
            </div>

            {/* grid 2 */}


            {/* title sell 2: */}

            <div className="tt-bd-04">
                <div className="tt-bd-04-container">
                    <div className="tt-bd-04-left">
                        <div className="tt-bd-04-left-margin">
                            <div className="pillar-section__content">
                                <div className="section-heading section-heading--mobile-up-align-left pillar-section__heading-container">
                                    <p className="section-heading__kicker heading--5 color-black text-left gutter-bottom">NÚT MUA LINH HOẠT</p>
                                    <h2 className="section-heading__heading heading--2 text-left gutter-bottom pillar-section__heading">Thương mại điện tử ở khắp mọi nơim&nbsp;</h2>
                                    <p className="section-heading__subhead text-major text-left color-gray-80 gutter-bottom--reset">Biến bất cứ trang web hay blog hiện có nào thành cửa hàng trực tuyến .</p>
                                </div>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Các sản phẩm nhúng
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Đặt sản phẩm ở nơi bạn muốn,&nbsp; bao gồm cả trên Squarespace và WordPress.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Trang thanh toán an toàn
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Thêm trải nghiệm thanh toán an toàn,&nbsp;dễ sử dụng trên thiết bị di động vào trang của bạn.
                                </p>
                            </div>

                            <div className="pillar-section__detail">
                                <h3 className="heading--4">
                                    Nút có thể tùy chỉnh
                                </h3>

                                <p className="gutter-bottom--reset color-gray-90">
                                    Tạo trải nghiệm mua sắm theo yêu cầu cho trang web hay blog hiện có.
                                </p>
                            </div>

                            <div className="hide--mobile pillar-section__cta--online-store">
                                <a data-event-page="sell" data-event-category="sell"
                                    data-event-action="online-store" data-event-label="learn"
                                    className="link link--secondary" href="/online">Tìm hiểu về cửa hàng trực tuyến&nbsp;
                                    <span className="link__arrow"><svg className="icon link__arrow-inner"
                                        aria-hidden="true" focusable="false">
                                        <use xlinkHref="#modules-arrow-right"></use> </svg></span></a>
                            </div>
                        </div>

                    </div>
                    <div className="tt-bd-04-right">
                        <div className="tt-bd-04-right-img">
                            <img alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* title sell 4: */}

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
export default Services;
