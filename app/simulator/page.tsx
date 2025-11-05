// ========== 이 코드를 통째로 덮어쓰세요 ==========

"use client"; // 이 코드는 브라우저에서 실행되어야 함

import { useState, useEffect } from 'react'; // React의 '기억' 기능

// 가격을 "X억 Y천만 원"으로 변환하는 함수
function formatPrice(price: number) {
  const eok = Math.floor(price / 10000);
  const cheon = Math.floor((price % 10000) / 1000) * 1000;
  
  if (cheon === 0) {
    return `${eok}억 원`;
  }
  return `${eok}억 ${cheon}만 원`;
}

// 시뮬레이터 페이지 컴포넌트
export default function SimulatorPage() {
  
  // 사용자의 선택을 '기억'할 변수들
  const [parking, setParking] = useState(1.5);
  
  // ⬇️⬇️⬇️ 이 부분이 오타가 있었던 곳입니다. ⬇️⬇️⬇️
  const [school, setSchool] = useState('중'); // useState('중')이 올바른 코드
  // ⬆️⬆️⬆️ ⬆️⬆️⬆️

  const [hasView, setHasView] = useState(false);
  const [subway, setSubway] = useState(500);
  
  // 계산된 최종 가격을 '기억'할 변수
  const [finalPrice, setFinalPrice] = useState(81000);

  // '기억'된 변수(parking, school 등)가 바뀔 때마다 가격을 다시 계산
  useEffect(() => {
    let basePrice = 81000; // 기준 가격

    // 보고서 기반 가상 공식
    basePrice += (parking - 1.5) * 5000;
    if (school === '하') basePrice -= 4000;
    else if (school === '상') basePrice += 3000;
    if (hasView) basePrice += 5000;
    basePrice -= (subway - 500) * 10;

    setFinalPrice(basePrice); // 계산된 가격으로 업데이트

  }, [parking, school, hasView, subway]); // 이 값들이 바뀔 때만 실행

  // 화면에 그릴 HTML/JSX 내용
  return (
    <div style={{ padding: '20px' }}> 

      {/* 메인으로 돌아가기 링크 */}
      <a href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
        &larr; 메인 포트폴리오로 돌아가기
      </a>

      {/* --- 1. AI 부동산 가치평가 시뮬레이터 --- */}
      <div className="simulator-container">
        <h2>🤖 AI가 예측하는 송도 부동산 가치</h2>
        <p>제가 직접 작성한 '부동산가격결정요인' 보고서를 기반으로 만든 가치평가 시뮬레이터입니다.</p>

        <div className="controls">
          {/* 주차가능대수 */}
          <div className="input-group">
            <label htmlFor="parking-slider">🚗 세대당 주차가능대수 ( <span>{parking.toFixed(1)}</span> 대)</label>
            <input 
              type="range" 
              id="parking-slider" 
              min="0.5" 
              max="2.5" 
              step="0.1" 
              value={parking} 
              onChange={(e) => setParking(parseFloat(e.target.value))}
            />
          </div>

          {/* 학군 수준 */}
          <div className="input-group">
            <label htmlFor="school-select">🎓 학군 수준</label>
            <select 
              id="school-select" 
              value={school} 
              onChange={(e) => setSchool(e.target.value)} // setSchool이 함수여야 함
            >
              <option value="상">상 (우수 학군)</option>
              <option value="중">중 (보통 학군)</option>
              <option value="하">하 (일반 학군)</option>
            </select>
          </div>

          {/* 해안 조망 */}
          <div className="input-group">
            <label htmlFor="view-toggle">🌊 해안 조망 (오션뷰)</label>
            <input 
              type="checkbox" 
              id="view-toggle" 
              className="toggle-switch"
              checked={hasView}
              onChange={(e) => setHasView(e.target.checked)}
            />
          </div>

          {/* 지하철역 거리 */}
          <div className="input-group">
            <label htmlFor="subway-slider">🚇 가장 가까운 지하철역 ( <span>{subway}</span> m)</label>
            <input 
              type="range" 
              id="subway-slider" 
              min="100" 
              max="2000" 
              step="50" 
              value={subway} 
              onChange={(e) => setSubway(parseFloat(e.target.value))}
            />
          </div>
        </div>

        {/* 결과 출력 */}
        <div className="result-box">
          <p>예상 가치 (가상)</p>
          <h3 id="final-price">{formatPrice(finalPrice)}</h3>
        </div>
      </div>
      {/* --- 1. 시뮬레이터 끝 --- */}


      {/* --- 4. 분석 근거 및 보고서 다운로드 --- */}
      <div className="report-summary">
        <h3>📈 시뮬레이터의 분석 근거</h3>
        <p>
          이 시뮬레이터는 도시계획부동산학부 '부동산경제입문' 수업에서 중간 과제로 제출한 <strong>'부동산가격결정요인 실증분석'</strong> 보고서를 기반으로 합니다. 
          <strong>송도국제도시</strong>의 가상 데이터를 활용해 다중회귀분석을 수행했으며, 통계적으로 유의미한 핵심 변수들(p&lt;0.05)을 추출하여 가격 공식을 구현했습니다.
        </p>
        
        <h4>Key Findings (주요 발견)</h4>
        <ul>
          <li>
            <strong>가장 강력한 변수 (주차):</strong> 보고서에 따르면, '주차가능대수'가 거래금액과 <strong>0.88</strong>의 <strong>가장 강한 양의 상관관계</strong>를 보였으며, 표준화 계수 기준 가장 큰 영향력을 미쳤습니다.
          </li>
          <li>
            <strong>유의미한 변수 (학군/조망):</strong> '학군 수준'과 '해안조망 여부' 또한 <strong>5% 유의수준 하</strong>에서 통계적으로 유의미한 변수로 나타났습니다.
          </li>
          <li>
            <strong>의외의 변수 (GTX/외국기업):</strong> 가설과 달리 'GTX역까지 거리'와 '외국기업까지 거리'는 <strong>통계적으로 유의하지 않았습니다.</strong> 이는 GTX 사업 지연 및 외국기업 유치 효과가 아직 시장에 반영되지 않았기 때문으로 해석됩니다.
          </li>
        </ul>
        
        {/* 'public' 폴더에 report.pdf가 있어야 합니다 */} 
        <a href="/report.pdf" download className="download-button">
          전체 분석 리포트 다운로드 (PDF)
        </a>
      </div>
      {/* --- 4. 분석 근거 끝 --- */}

    </div>
  );
}
// ========== 코드 덮어쓰기 끝 ==========