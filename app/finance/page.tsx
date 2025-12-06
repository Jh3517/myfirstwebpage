"use client"; // 이 코드는 브라우저에서 실행되어야 함

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js에 필요한 기능들을 등록합니다
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// 보고서의 [그림 2] 데이터를 기반으로 차트 데이터를 만듭니다.
const chartData = {
  labels: ['1분기', '2분기', '3분기', '4분기', '5분기', '6분기'], // X축: 시차
  datasets: [
    {
      label: '주택매매지수',
      data: [0.1, -0.22, -0.1, -0.15, -0.1, -0.25], // [그림 2]의 파란색 선
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      tension: 0, // 직선으로 변경
    },
    {
      label: '전세가격지수',
      data: [0.15, -0.35, 0.3, -0.2, 0.1, 0.08], // [그림 2]의 주황색 선
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      tension: 0, // 직선으로 변경
    },
    {
      label: '신규분양물량',
      data: [-0.02, 0.03, -0.15, 0.2, -0.1, -0.1], // [그림 2]의 초록색 선
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0, // 직선으로 변경
    },
    {
      label: '주택거래량',
      data: [-0.28, -0.1, -0.05, 0.2, 0.38, -0.22], // [그림 2]의 보라색 선
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
      tension: 0, // 직선으로 변경
    },
  ],
};

// 차트 옵션 (제목 등)
const chartOptions = {
  responsive: true,
  // 마우스 오버시 커서 변경 (클릭 가능함 암시)
  onHover: (event: any, chartElement: any) => {
    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
  },
  interaction: {
    mode: 'index' as const, // 마우스 올렸을 때 X축의 모든 데이터를 툴팁에 표시
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 12, // 범례 폰트 크기
        },
        usePointStyle: true, // 범례 아이콘을 점 모양으로 깔끔하게
        padding: 20,
      }
    },
    title: {
      display: true,
      text: "보고서 [그림 2] 시차상관분석 시각화",
      font: {
        size: 18,
      },
      padding: {
        bottom: 10
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 10,
      titleFont: { size: 14 },
      bodyFont: { size: 13 },
      footerFont: { size: 12 }
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: '상관계수',
        font: { weight: 'bold' as const }
      },
      grid: {
        color: '#f0f0f0' // 격자선 연하게
      }
    },
    x: {
      title: {
        display: true,
        text: '시차 (분기)',
        font: { weight: 'bold' as const }
      },
      grid: {
        display: false // X축 격자선 숨김 (깔끔하게)
      }
    }
  }
};


// 주택금융 차트 페이지
export default function FinancePage() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>

      {/* 메인으로 돌아가기 링크 */}
      <a href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        &larr; 메인 포트폴리오로 돌아가기
      </a>

      {/* --- 1. 시계열 분석 차트 --- */}
      <div className="simulator-container">
        <h2>📈 주택금융과 금리의 관계 (시계열 분석)</h2>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          '부동산금융입문' 과제 보고서를 기반으로, 금리와 주요 변수 간의 
          <strong> 시차상관</strong> 관계를 Chart.js로 시각화했습니다.
        </p>
        
        {/* 💡 범례 필터링 안내 문구 추가 */}
        <div style={{ 
          backgroundColor: '#f0f9ff', 
          borderLeft: '4px solid #0ea5e9', 
          padding: '12px', 
          margin: '15px 0', 
          borderRadius: '4px',
          fontSize: '0.95rem',
          color: '#0c4a6e'
        }}>
          <strong>💡 Interactive Tip:</strong> 차트 상단의 
          <span style={{ 
            display: 'inline-block', 
            margin: '0 4px', 
            padding: '2px 6px', 
            backgroundColor: '#fff', 
            border: '1px solid #ddd', 
            borderRadius: '4px', 
            fontSize: '0.8em',
            verticalAlign: 'middle'
          }}>
            범례(색상 박스)
          </span> 
          를 클릭해보세요! 특정 변수의 그래프만 켜거나 끌 수 있어 <strong>개별 흐름을 비교 분석</strong>하기 좋습니다.
        </div>

        {/* 차트가 그려질 영역 */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>
      {/* --- 1. 차트 끝 --- */}

      {/* --- 2. 분석 근거 및 보고서 다운로드 --- */}
      <div className="report-summary" style={{ marginTop: '40px' }}>
        <h3>📊 차트 분석 근거</h3>
        
        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
          본 차트는 '주택금융과 금리의 관계 실증분석' 보고서의
          <span className="image-hover-trigger" style={{ fontWeight: 'bold', color: '#2563eb', cursor: 'help', margin: '0 4px' }}>
            [그림 2]
            {/* 수정: p 태그 내부에는 div를 사용할 수 없으므로 span으로 변경 */}
            <span className="image-hover-popup">
              <img 
                src="/figure_2.png" 
                alt="보고서 그림 2: 시차상관분석" 
                width={450} 
                height={280} 
                style={{ width: '100%', height: 'auto', borderRadius: '6px' }} 
              />
            </span>
          </span>
          데이터를 시각화한 것입니다. 보고서에 따르면, <strong>금리 변동</strong>의 영향력은 <strong>단기적이며</strong>, <strong>주택매매/전세 지수</strong>는 과거 값의 영향이 <strong>장기간 지속</strong>되는 특성이 확인되었습니다.
        </p>

        <h4>🔍 Key Findings (주요 발견)</h4>
        <ul style={{ lineHeight: '1.6', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>단기적 영향력:</strong> <strong>금리</strong> 및 <strong>LTV</strong>의 영향력은 단기적이며, 중장기적 설명력은 낮게 나타났습니다.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>시차 효과:</strong> <strong>전세가격지수(3분기)</strong>, <strong>신규분양물량(4분기)</strong>, <strong>경제성장률 및 주택거래량(5분기)</strong> 등에서 중기 시차 이후 상관관계가 전환되거나 강화되는 패턴이 나타났습니다.
          </li>
          <li>
            <strong>인과관계의 한계:</strong> 그랜저 인과관계 검정 결과, 통계적으로 유의미한 인과관계는 확인되지 않았으며, 이는 <strong>다른 외생 요인의 영향이 컸음을 시사합니다.</strong>
          </li>
        </ul>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <a href="/reports/report_finance.pdf" download className="download-button" style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}>
            📥 '주택금융' 분석 리포트 다운로드 (PDF)
          </a>
        </div>
      </div>
      {/* --- 2. 분석 근거 끝 --- */}

    </div>
  );
}