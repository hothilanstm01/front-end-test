import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.png'
import snsicon01 from '../assets/images/icon/snsicon-01.png'
import snsicon02 from '../assets/images/icon/snsicon-02.png'
import snsicon03 from '../assets/images/icon/snsicon-03.png'



const footerAboutLinks = [
    {
        display: "회사 소개",
        path: "/"
    },
    {
        display: "인재 채용",
        path: "/"
    },
    {
        display: "상시 할인 혜택",
        path: "/"
    }
]
const footerOrderLinks = [
    {
        display: "내 주문",
        path: "/"
    },
    {
        display: "주문 배송",
        path: "/"
    },
    {
        display: "취소 / 교환 / 반품 내역",
        path: "/"
    },
    {
        display: "상품 리뷰 내역",
        path: "/"
    },
    {
        display: "증빙 서류 발급",
        path: "/"
    }
]
const footerAccountLinks = [
    {
        display: "회원 정보 수정",
        path: "/"
    },
    {
        display: "회원 등급",
        path: "/"
    },
    {
        display: "마일리지 현황",
        path: "/"
    },
    {
        display: "쿠폰",
        path: "/"
    }
]
const footerHelpLinks = [
    {
        display: "1 : 1 상담 내역",
        path: "/"
    },
    {
        display: "상품 Q & A 내역",
        path: "/"
    },
    {
        display: "공지 사항",
        path: "/"
    },
    {
        display: "자주하는 질문",
        path: "/"
    },
    {
        display: "고객의 소리",
        path: "/"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="line"></div>
                <div className="footer_top">
                    <Grid 
                        col={2}
                        mdCol={2}
                        smcol={1}
                        gap={10}
                    >
                        <div>
                            <div className="footer_title">
                                what happened
                            </div>
                            <div className="footer_content">
                                <p className="footer_content_txt">[공지] 개인 정보 처리 방침 변경 사전 안내
                                [공지] 29CM 강남 스토어 영업 종료
                                [공지] 개인 정보 처리 방침 변경 사전 안내
                                [공지] iOS 10 이하 버전 지원 중단 안내
                                [공지] 개인 정보 처리 방침 변경 사전 안내</p>
                            </div>
                        </div>
                        
                        <Grid 
                            col={4}
                            mdCol={2}
                            smcol={1}
                            gap={10}
                        >
                            <div>
                                <div className="footer_title">
                                    about us
                                </div>
                                <div className="footer_content">
                                    {
                                        footerAboutLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }                            
                                </div>
                            </div>

                            <div>
                                <div className="footer_title">
                                    my order
                                </div>
                                <div className="footer_content">
                                    {
                                        footerOrderLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }                            
                                </div>
                            </div>

                            <div>
                                <div className="footer_title">
                                    my account
                                </div>
                                <div className="footer_content">
                                    {
                                        footerAccountLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }                            
                                </div>
                            </div>

                            <div>
                                <div className="footer_title">
                                    help
                                </div>
                                <div className="footer_content">
                                    {
                                        footerHelpLinks.map((item, index) => (
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.display}
                                                </Link>
                                            </p>
                                        ))
                                    }                            
                                </div>
                            </div>

                        </Grid>

                        <div className="footer_about">
                            <p>
                                <Link to="/">
                                    <img src={logo} className="footer_logo" alt="" />
                                </Link>
                            </p>
                            <p>
                                
                            </p>
                        </div>
                    </Grid>
                </div>
                <div className="line"></div>

                <div className="footer_bottom">
                <Grid
                    col={2}
                    mdCol={1}
                    smcol={1}
                    gap={0}
                >
                <div className="footer_bottom1">
                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                </div>
                <div className="footer_bottom2">
                    <img src={snsicon01} alt="" />
                    <img src={snsicon02} alt="" />
                    <img src={snsicon03} alt="" />
                </div>
                </Grid>
                </div>

            </div>
        </footer>
    )
}

export default Footer
