"use client";

import { useState } from 'react';

// '핵심 역량' 섹션 컴포넌트
export function Projects() { // 컴포넌트 이름은 템플릿에 맞춰주세요
  
  // 현재 선택된 탭을 '기억'하는 변수. 'pf'를 기본값으로 설정
  const [activeTab, setActiveTab] = useState('pf');
  
  return (
    // Tailwind CSS 클래스로 기본 레이아웃 구성
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        
        {/* 섹션 제목 */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
            프로젝트
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            부동산 금융 및 투자 리스크에 대한 심층 분석 프로젝트입니다.
            왼쪽 탭을 클릭하여 각 리포트를 확인하세요.
          </p>
        </div>
        
        {/* ⭐️ 인터랙티브 쇼케이스 시작 (CSS로 제어) ⭐️ */}
        <div className="showcase-container">
          
          {/* ========== 1. 왼쪽 탭 목록 ========== */}
          <div className="showcase-tabs">
            <button
              className={`showcase-tab ${activeTab === 'pf' ? 'active' : ''}`}
              onClick={() => setActiveTab('pf')}
            >
              PF 부실화 건전성 분석
            </button>
            <button
              className={`showcase-tab ${activeTab === 'auction' ? 'active' : ''}`}
              onClick={() => setActiveTab('auction')}
            >
              부동산 경매 투자 분석
            </button>
            <button
              className={`showcase-tab ${activeTab === 'trust' ? 'active' : ''}`}
              onClick={() => setActiveTab('trust')}
            >
              신탁원부 리스크 분석
            </button>
          </div>
          
          {/* ========== 2. 오른쪽 콘텐츠 영역 ========== */}
          <div className="showcase-content-area">
            
            {/* --- 콘텐츠 1: PF 부실화 (기본 활성) --- */}
            <div className={`showcase-content ${activeTab === 'pf' ? 'active' : ''}`}>
              <h3>PF 부실화와 금융기관 건전성 분석</h3>
              <p>
                저축은행과 시중은행의 PF 연체율, BIS 비율, NPL 등을 비교 분석하여
                PF 부실화가 금융 시스템에 미치는 잠재적 리스크를 도출한 계량경제 분석 보고서입니다.
              </p>
              <div className="showcase-tags">
                <span>#계량경제</span>
                <span>#시계열분석 (VAR)</span>
                <span>#NPL</span>
                <span>#BIS비율</span>
                <span>#금융건전성</span>
              </div>
              <a 
                href="/reports/report_pf.pdf" 
                download 
                className="download-button"
              >
                📜 분석 리포트 PDF 보기
              </a>
            </div>
            
            {/* --- 콘텐츠 2: 경매 투자 --- */}
            <div className={`showcase-content ${activeTab === 'auction' ? 'active' : ''}`}>
              <h3>부동산 경매 투자 물건 심층 분석</h3>
              <p>
                실제 경매 물건인 "오랜지 카운티 을지로" 물건을 기반으로, 물건 선정 배경부터, 권리 분석을 통한 리스크 분석, 경락잔금대출을 통한 자금조달 계획, 수익성 분석, Exit 계획까지, 실제 투자를 가정한, 투자 전 과정을 연구한 보고서입니다.
              </p>
              <div className="showcase-tags">
                <span>#권리분석</span>
                <span>#입지분석</span>
                <span>#경락잔금대출</span>
                <span>#ROE</span>
                <span>#Exit</span>
              </div>
              <a 
                href="/reports/report_auction.pdf" 
                download 
                className="download-button"
              >
                📜 투자 리포트 PDF 보기
              </a>
            </div>
            
            {/* --- 콘텐츠 3: 신탁원부 --- */}
            <div className={`showcase-content ${activeTab === 'trust' ? 'active' : ''}`}>
              <h3>신탁원부 분석을 통한 숨겨진 리스크 식별</h3>
              <p>
                KB부동산신탁이 진행한, 구리 유탑 유블레스 사업의 신탁원부 분석을 통해 각 사업 주체들의 리스크 관리 방안을 파악하여,  
                PF 및 개발 사업 투자의 안정성을 확보하는 연구를 진행 중입니다.
              </p>
              <div className="showcase-tags">
                <span>#신탁등기</span>
                <span>#PF 구조</span>
                <span>#우선수익권</span>
                <span>#책임준공형 관리형 토지신탁</span>
                <span>#리스크관리</span>
              </div>
              {/* ⬇️ 버튼 활성화 및 링크 연결 ⬇️ */}
              <a 
                href="/reports/report_trust.pdf" 
                download 
                className="download-button"
              >
                📜 분석 리포트 PDF 보기
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
