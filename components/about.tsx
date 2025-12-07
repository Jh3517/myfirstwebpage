"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Heart, Coffee, Book, Plus, X, Settings, Calendar, Building, User, Trophy, Star, Lightbulb, Target, Rocket, Shield, Sparkles, Code, Database, Palette, Megaphone, BarChart3, LineChart, PieChart, Activity, Brain, Cpu, Layers, Package, Server, Smartphone, Monitor, Wifi, Cloud, Lock, Key, Eye, Search, Filter, Edit, FileText, FolderOpen, GitBranch, Hash, Inbox, Send, MessageSquare, Music, Camera, Video, Mic, Volume2, Headphones, Radio, Zap, Globe, Users, TrendingUp, BookOpen, MapPin, Clock, CheckCircle, AlertCircle, Home, School, ChevronLeft, ChevronRight } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"

// ----------------------------------------------------------------------
// [설정 영역]
// ----------------------------------------------------------------------

const DELETE_BUTTON_STYLE = "absolute top-2 right-2 p-1.5 bg-white/80 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-100 z-10 shadow-sm";
const DELETE_ICON_STYLE = "w-4 h-4";

// 아이콘 매핑
const AVAILABLE_ICONS = {
  briefcase: Briefcase, graduation: GraduationCap, award: Award, trophy: Trophy, star: Star,
  lightbulb: Lightbulb, target: Target, rocket: Rocket, shield: Shield, building: Building,
  calendar: Calendar, book: Book, heart: Heart, coffee: Coffee, user: User, zap: Zap,
  globe: Globe, users: Users, trending: TrendingUp, bookOpen: BookOpen, mapPin: MapPin,
  clock: Clock, check: CheckCircle, alert: AlertCircle, home: Home, school: School,
}

const SKILL_ICONS = {
  trophy: Trophy, sparkles: Sparkles, target: Target, rocket: Rocket, star: Star, zap: Zap,
  lightbulb: Lightbulb, brain: Brain, code: Code, database: Database, palette: Palette,
  megaphone: Megaphone, barChart: BarChart3, lineChart: LineChart, pieChart: PieChart,
  activity: Activity, cpu: Cpu, layers: Layers, package: Package, server: Server,
  smartphone: Smartphone, monitor: Monitor, wifi: Wifi, cloud: Cloud, lock: Lock, key: Key,
  eye: Eye, search: Search, filter: Filter, edit: Edit, fileText: FileText, folderOpen: FolderOpen,
  gitBranch: GitBranch, hash: Hash, inbox: Inbox, send: Send, messageSquare: MessageSquare,
  music: Music, camera: Camera, video: Video, mic: Mic, volume: Volume2, headphones: Headphones,
  radio: Radio, heart: Heart, shield: Shield, globe: Globe, users: Users,
}

// [이미지 경로 설정] 실제 파일명과 100% 일치해야 함
const HOBBY_IMAGES: Record<string, string[]> = {
  "독서": ["/hobby-reading.jpg"],
  "📚 독서": ["/hobby-reading.jpg"],
  
  "카페 투어": ["/hobby-cafe-1.jpg", "/hobby-cafe-2.jpg"],
  "☕ 카페 투어": ["/hobby-cafe-1.jpg", "/hobby-cafe-2.jpg"],
  
  "전시회 관람": ["/hobby-exhibition.jpg"], // -1 제거됨
  "🎨 전시회 관람": ["/hobby-exhibition.jpg"]
}

interface AboutProps {
  onHobbyModalStateChange?: (isOpen: boolean) => void;
}

// ----------------------------------------------------------------------
// [메인 컴포넌트]
// ----------------------------------------------------------------------

export function About({ onHobbyModalStateChange }: AboutProps) {
  const { getData, saveData, isEditMode } = useInlineEditor()
  
  // 기본 데이터
  const defaultInfo = {
    title: "소개",
    subtitle: "  ",
    background: {"image":"","video":"","color":"","opacity":0.1},
    experienceCards: [{"icon":"graduation","title":"단국대학교 도시계획부동산학부 ","period":"2022~","description":"전공 및 학위"},{"icon":"award","title":"투자자산운용사 자격증 취득","period":"2025","description":"자격증"},{"icon":"target","title":"신용분석사 자격증 준비 ","period":"2025~","description":"자격증"}],
    skills: [{"icon":"barChart","title":"부동산 금융 및 계량 분석 ","description":"\"저는 '감'이 아닌 '데이터'로 시장을 분석합니다.\" "},{"icon":"shield","title":"부동산 투자 및 법률 분석 역량","description":"\"저는 '수익'만 보지 않고, 그 이면의 '리스크'를 먼저 식별합니다.\""},{"icon":"database","title":"프롭테크 기술 구현 역량","description":"\"저는 분석에서 멈추지 않고, '체험'할 수 있는 서비스로 구현합니다.\""}],
    storyTitle: "나의 이야기",
    story: [" 부동산 시장은 '금융', '법률', 그리고 '데이터'가 복잡하게 얽힌 영역입니다. 저의 열정은 이 복잡성을 '기술(PropTech)'이라는 도구로 명쾌하게 시각화하는 일에 있습니다. 저는 금융의 언어와 코드의 언어를 모두 이해하는 'T자형 인재'를 목표로 합니다.","저는 \"부동산 경매 투자 프로젝트\"를 통해 등기부의 권리관계를 분석하고 투자 리스크를 식별할 수 있는 분석력을 훈련했습니다.\n 또한, KB 부동산 신탁의 \"신탁원부 분석 프로젝트\"를 통해  개발 사업의 전반적인 과정을 파악하고, 이 속에 숨겨진 각 사업 주체들의 리스크와  이들의 리스크 관리 방안을 분석하며, 분석력을 강화했습니다.\n 더불어, \"PF 부실화가 금융기관에 미치는 영향을 연구한 프로젝트\"를 수행하며 VAR 모형, NPL(고정이하여신비율) 등 계량경제 모델을 통해 금융시장의 잠재적 리스크를 데이터로 증명하는 역량을 키웠습니다."," 저의 역량 개발은 보고서 작성에서 멈추지 않았습니다. 저는 복잡한 '다중회귀분석' 결과를 누구나 쉽게 이해할 수 있는 \"AI 가치평가 시뮬레이터\"로, '시계열 분석' 데이터는 \"인터랙티브 금융 차트\"로 직접 구현했습니다. 즉, 분석에서 멈추지 않고, 경험까지 제공할 수 있는 기술이야말로 저의 강력한 무기입니다."," 하지만, 저는 아직 무르익지 않았습니다. 따라서 앞으로 다양한 프로젝트를 수행하며, 각 능력들의 전문성을 높여, 부동산 업계의 전문가로 거듭나기 위해 끊임없이 노력하겠습니다."],
    storyImage: "/uploads/about-image-1764838106329.jpg",    
    hobbies: ["📚 독서","☕ 카페 투어","🎨 전시회 관람"]
  }
  
  const [aboutInfo, setAboutInfo] = useState(defaultInfo)
  const [backgroundData, setBackgroundData] = useState(defaultInfo.background)
  
  // 모달 상태
  const [showCareerModal, setShowCareerModal] = useState(false)
  const [showSkillModal, setShowSkillModal] = useState(false)
  const [showHobbyModal, setShowHobbyModal] = useState(false)
  
  // 취미 이미지 슬라이드 상태
  const [selectedHobbyImages, setSelectedHobbyImages] = useState<string[] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // 모달 Ref (자신을 숨기지 않기 위해 사용)
  const modalRef = useRef<HTMLDivElement>(null)

  // 1. 외부로 상태 알림
  useEffect(() => {
    if (onHobbyModalStateChange) {
      onHobbyModalStateChange(!!selectedHobbyImages);
    }
  }, [selectedHobbyImages, onHobbyModalStateChange]);

  // 2. [강력한 헤더 숨김 로직] "Hunter Logic"
  useEffect(() => {
    // 숨겼던 요소들을 저장해두었다가 복구하기 위한 배열
    let hiddenElements: { element: HTMLElement, originalDisplay: string, originalVisibility: string }[] = [];

    if (selectedHobbyImages) {
      // (1) 스크롤 막기
      document.body.style.overflow = 'hidden';

      // (2) 화면 상단의 고정된 요소(헤더) 탐색
      // document.body 내의 모든 직계 자식 등을 검사하지 않고, 전체 요소를 검사하는 것은 비효율적이므로
      // 주요 태그와 'position: fixed/sticky' 속성을 가진 요소를 찾습니다.
      const allElements = document.querySelectorAll('body *');
      
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          // 자기 자신(모달)은 숨기면 안 됨
          if (modalRef.current && modalRef.current.contains(el)) return;
          if (el.id === 'hobby-modal-container') return;

          const style = window.getComputedStyle(el);
          const isFixedOrSticky = style.position === 'fixed' || style.position === 'sticky';
          
          // 조건: 고정되어 있고, 화면 상단(top: 0 근처)에 붙어 있으며, 화면 전체를 덮는 모달이 아닌 것(높이가 작음)
          if (isFixedOrSticky && parseInt(style.top || '0') < 50 && el.offsetHeight < window.innerHeight) {
            
            // 복구를 위해 원래 상태 저장
            hiddenElements.push({
              element: el,
              originalDisplay: el.style.display,
              originalVisibility: el.style.visibility
            });

            // 강제 숨김
            el.style.setProperty('display', 'none', 'important');
            el.style.setProperty('visibility', 'hidden', 'important');
          }
        }
      });
    } else {
      // (3) 모달 닫힘 -> 복구
      document.body.style.overflow = '';
    }

    // (4) 정리 함수 (Cleanup): 컴포넌트 해제 시 무조건 복구
    return () => {
      document.body.style.overflow = '';
      hiddenElements.forEach(item => {
        item.element.style.display = item.originalDisplay;
        item.element.style.visibility = item.originalVisibility;
      });
    };
  }, [selectedHobbyImages]);
  
  // 데이터 로드
  useEffect(() => {
    const savedData = getData('about-info') as typeof defaultInfo | null
    if (savedData) {
      setAboutInfo({ ...defaultInfo, ...savedData })
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    const savedBg = getData('about-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode])
  
  // 업데이트 함수들 (생략 없이 유지)
  const updateAboutInfo = (key: string, value: any) => {
    const newInfo = { ...aboutInfo, [key]: value }
    setAboutInfo(newInfo)
    saveData('about-info', newInfo)
  }
  
  const updateExperienceCard = (index: number, field: string, value: string) => {
    const newCards = [...aboutInfo.experienceCards]
    // @ts-ignore
    newCards[index] = { ...newCards[index], [field]: value }
    updateAboutInfo('experienceCards', newCards)
  }
  
  const addExperienceCard = () => {
    updateAboutInfo('experienceCards', [...aboutInfo.experienceCards, { 
      icon: "briefcase", title: "새 경험", period: "2024", description: "설명을 입력하세요" 
    }])
  }
  
  const removeExperienceCard = (index: number) => {
    updateAboutInfo('experienceCards', aboutInfo.experienceCards.filter((_, i) => i !== index))
  }
  
  const updateSkill = (index: number, field: string, value: string) => {
    const newSkills = [...aboutInfo.skills]
    // @ts-ignore
    newSkills[index] = { ...newSkills[index], [field]: value }
    updateAboutInfo('skills', newSkills)
  }
  
  const addSkill = () => {
    updateAboutInfo('skills', [...aboutInfo.skills, { icon: "star", title: "새 스킬", description: "스킬 설명" }])
  }
  
  const removeSkill = (index: number) => {
    updateAboutInfo('skills', aboutInfo.skills.filter((_, i) => i !== index))
  }
  
  const updateStory = (index: number, value: string) => {
    const newStory = [...aboutInfo.story]
    newStory[index] = value
    updateAboutInfo('story', newStory)
  }
  
  const addStory = () => {
    updateAboutInfo('story', [...aboutInfo.story, "새로운 문단"])
  }
  
  const removeStory = (index: number) => {
    updateAboutInfo('story', aboutInfo.story.filter((_, i) => i !== index))
  }
  
  const updateHobby = (index: number, value: string) => {
    const newHobbies = [...aboutInfo.hobbies]
    newHobbies[index] = value
    updateAboutInfo('hobbies', newHobbies)
  }
  
  const addHobby = () => {
    updateAboutInfo('hobbies', [...aboutInfo.hobbies, "🎯 새 취미"])
  }
  
  const removeHobby = (index: number) => {
    updateAboutInfo('hobbies', aboutInfo.hobbies.filter((_, i) => i !== index))
  }

  // 취미 클릭 핸들러
  const handleHobbyClick = (hobbyName: string) => {
    if (isEditMode) return;
    let images = HOBBY_IMAGES[hobbyName];
    if (!images) {
      const cleanName = hobbyName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]\s?/, "").trim();
      images = HOBBY_IMAGES[cleanName];
    }
    if (images && images.length > 0) {
      setSelectedHobbyImages(images);
      setCurrentImageIndex(0);
    }
  }

  // 이미지 슬라이드 네비게이션
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedHobbyImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedHobbyImages.length);
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedHobbyImages) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedHobbyImages.length) % selectedHobbyImages.length);
  }

  return (
    <EditableBackground
      image={backgroundData.image}
      video={backgroundData.video}
      color={backgroundData.color}
      opacity={backgroundData.opacity}
      onChange={(data) => {
        const newData = { ...backgroundData, ...data }
        setBackgroundData(newData)
        saveData('about-background', newData)
        const updatedAboutInfo = { ...aboutInfo, background: newData }
        setAboutInfo(updatedAboutInfo)
        saveData('about-info', updatedAboutInfo)
      }}
      storageKey="about-background"
      className="py-20 bg-muted/30 relative"
    >
      <section id="about" className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* 타이틀 영역 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText value={aboutInfo.title} onChange={(value) => updateAboutInfo('title', value)} storageKey="about-title" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <EditableText value={aboutInfo.subtitle} onChange={(value) => updateAboutInfo('subtitle', value)} storageKey="about-subtitle" multiline />
            </p>
          </div>

          {/* 경험 카드 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {aboutInfo.experienceCards?.map((card, index) => {
              const Icon = AVAILABLE_ICONS[card.icon as keyof typeof AVAILABLE_ICONS] || Briefcase
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
                  <CardContent className="p-6">
                    {isEditMode && (
                      <button onClick={() => removeExperienceCard(index)} className={DELETE_BUTTON_STYLE}>
                        <X className={DELETE_ICON_STYLE} />
                      </button>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          <EditableText value={card.title} onChange={(value) => updateExperienceCard(index, 'title', value)} storageKey={`about-experience-${index}-title`} />
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          <EditableText value={card.period} onChange={(value) => updateExperienceCard(index, 'period', value)} storageKey={`about-experience-${index}-period`} />
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <EditableText value={card.description} onChange={(value) => updateExperienceCard(index, 'description', value)} storageKey={`about-experience-${index}-description`} />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
            {isEditMode && (
              <Card className="border-2 border-dashed border-muted-foreground/30 shadow-none hover:border-primary transition-all cursor-pointer" onClick={() => setShowCareerModal(true)}>
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">경험 카드 편집</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 핵심 역량 영역 */}
          {(aboutInfo.skills.length > 0 || isEditMode) && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">핵심 역량</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutInfo.skills.map((skill, index) => {
                  const Icon = SKILL_ICONS[skill.icon as keyof typeof SKILL_ICONS] || Trophy
                  return (
                    <div key={index} className="text-center relative competency-card p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 group">
                      {isEditMode && (
                        <button onClick={() => removeSkill(index)} className={DELETE_BUTTON_STYLE}>
                          <X className={DELETE_ICON_STYLE} />
                        </button>
                      )}
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        <EditableText value={skill.title} onChange={(value) => updateSkill(index, 'title', value)} storageKey={`about-skill-${index}-title`} />
                      </h4>
                      <div className="competency-content-wrapper">
                        <p className="text-sm text-muted-foreground competency-summary">
                          <EditableText value={skill.description} onChange={(value) => updateSkill(index, 'description', value)} storageKey={`about-skill-${index}-description`} multiline />
                        </p>
                        <div className="competency-details">
                           {/* 개별 스킬 상세 내용 (기존 코드 유지) */}
                           {index === 0 && (
                            <>
                              <h4>📊 부동산 금융 및 계량 분석</h4>
                              <h5>보유 역량</h5>
                              <ul>
                                <li><strong>시계열 분석:</strong> VAR, Granger 인과관계, IRF 등을 활용하여 금리 충격의 <strong>시차 효과</strong>를 계량적으로 분석.</li>
                                <li><strong>금융시장 인사이트:</strong> PF 연체율이 은행의 BIS 비율 및 NPL에 미치는 영향을 분석하고, 시중은행과 저축은행의 구조적 차이를 비교.</li>
                                <li><strong>데이터 전처리:</strong> 로그 변환 및 1차 차분을 통해 비정상 시계열 데이터를 가공.</li>
                              </ul>
                              <h5>학습 방향</h5>
                              <ul>
                                <li>머신러닝 기반 비선형 예측 모델을 학습하여, 부동산 가치평가 모델의 정교화를 목표로 하고 있습니다.</li>
                              </ul>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <h4>⚖️ 부동산 투자 및 법률 분석</h4>
                              <h5>보유 역량</h5>
                              <ul>
                                <li><strong>법률 실사:</strong> 등기부, 매각물건명세서 등을 교차 검증하여 <strong>대항력 없는 임차인</strong>을 특정하고 '권리분석상 안전한' 물건을 식별.</li>
                                <li><strong>리스크 관리:</strong> <strong>명도 리스크</strong> 및 체납관리비 리스크를 사전에 도출하고, '인도명령' 및 '협상비' 기반의 대응 전략을 수립.</li>
                                <li><strong>가치평가:</strong> '오피스텔' 용도를 활용한 경락잔금대출 LTV 80% 전략 및 ROE 15.8% 등 구체적인 수익성 분석.</li>
                              </ul>
                              <h5>학습 방향</h5>
                              <ul>
                                <li>NPL 투자, 상가 및 토지 등 <strong>특수물건</strong>의 권리분석 및 가치평가 방법론을 심화 학습 중입니다.</li>
                              </ul>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <h4>💻 프롭테크 기술 구현</h4>
                              <h5>보유 역량</h5>
                              <ul>
                                <li><strong>인터랙티브 UI/UX:</strong> 다중회귀분석 결과를 <strong>'AI 가치평가 시뮬레이터'</strong>로 구현.</li>
                                <li><strong>데이터 시각화:</strong> 시계열 분석 데이터를 <strong>'Chart.js'</strong> 라이브러리 기반의 <strong>'인터랙티브 금융 차트'</strong>로 구현.</li>
                                <li><strong>웹 개발:</strong> <strong>React(Next.js)</strong> 프레임워크를 사용하여 포트폴리오 사이트를 직접 구축하고 Vercel을 통해 배포.</li>
                              </ul>
                              <h5>학습 방향</h5>
                              <ul>
                                <li>Python(Flask)을 활용하여 계량 분석 모델을 API로 직접 개발하고, 이를 프론트엔드와 연동하는 풀스택 개발을 목표로 하고 있습니다.</li>
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
                {isEditMode && (
                  <div className="text-center border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-primary transition-all" onClick={() => setShowSkillModal(true)}>
                    <div>
                      <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">스킬 편집</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 자기소개 상세 영역 */}
          {(aboutInfo.story.length > 0 || isEditMode) && (
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <EditableText value={aboutInfo.storyTitle} onChange={(value) => updateAboutInfo('storyTitle', value)} storageKey="about-storyTitle" />
                  </h3>
                  {aboutInfo.story.map((paragraph, index) => (
                    <div key={index} className="relative mb-4 group">
                      {isEditMode && (
                        <button onClick={() => removeStory(index)} className={DELETE_BUTTON_STYLE} style={{ top: 0, right: -20 }}>
                          <X className={DELETE_ICON_STYLE} />
                        </button>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        <EditableText value={paragraph} onChange={(value) => updateStory(index, value)} storageKey={`about-story-${index}`} multiline />
                      </p>
                    </div>
                  ))}
                  {isEditMode && (
                    <button onClick={addStory} className="mt-2 px-4 py-2 border border-dashed border-muted-foreground/30 rounded-lg hover:border-primary transition-all">
                      <Plus className="h-4 w-4 inline mr-2" />
                      문단 추가
                    </button>
                  )}
                </div>
                <div className="relative w-full h-full min-h-[500px] lg:min-h-full">
                  <EditableMedia src={aboutInfo.storyImage} onChange={(src) => updateAboutInfo('storyImage', src)} type="image" storageKey="about-storyImage" className="w-full h-full object-cover" alt="소개 이미지" purpose="about-image" />
                </div>
              </div>
            </div>
          )}

          {/* 취미 & 관심사 영역 */}
          {(aboutInfo.hobbies.length > 0 || isEditMode) && (
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">취미 & 관심사</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {aboutInfo.hobbies.map((hobby, index) => (
                  <span key={index} className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm relative group flex items-center justify-center transition-all hover:bg-primary/20 ${!isEditMode ? "cursor-pointer" : ""}`} onClick={() => handleHobbyClick(hobby)}>
                    {isEditMode && (
                      <button onClick={(e) => { e.stopPropagation(); removeHobby(index); }} className={DELETE_BUTTON_STYLE} style={{ top: -5, right: -5 }}>
                        <X className={DELETE_ICON_STYLE} />
                      </button>
                    )}
                    <EditableText value={hobby} onChange={(value) => updateHobby(index, value)} storageKey={`about-hobby-${index}`} />
                  </span>
                ))}
                {isEditMode && (
                  <button onClick={() => setShowHobbyModal(true)} className="px-4 py-2 border border-dashed border-muted-foreground/30 rounded-full text-sm hover:border-primary transition-all">
                    <Settings className="h-4 w-4 inline mr-1" />
                    편집
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ⭐️ 취미 이미지 슬라이드 모달 ⭐️ */}
      {selectedHobbyImages && selectedHobbyImages.length > 0 && (
        <div 
          id="hobby-modal-container"
          ref={modalRef}
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          // z-index를 최상위로 설정 (Tailwind 설정 범위를 넘어서는 값 직접 주입)
          style={{ zIndex: 999999 }}
          onClick={() => setSelectedHobbyImages(null)}
        >
          <div className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedHobbyImages(null)} className="absolute top-0 right-0 text-white/80 hover:text-white p-2 z-50">
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <img src={selectedHobbyImages[currentImageIndex]} alt={`Hobby ${currentImageIndex + 1}`} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
            </div>
            {selectedHobbyImages.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white hover:bg-black/20 rounded-full transition-all">
                  <ChevronLeft className="h-10 w-10" />
                </button>
                <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white hover:bg-black/20 rounded-full transition-all">
                  <ChevronRight className="h-10 w-10" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {selectedHobbyImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* 기타 편집 모달들 */}
      {showCareerModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">경험 카드 편집</h3>
              <button onClick={() => setShowCareerModal(false)} className="p-1 hover:bg-muted rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-6 pt-4 border-t"><div className="flex gap-2 justify-end"><button onClick={() => setShowCareerModal(false)} className="px-4 py-2 bg-muted text-foreground rounded-lg">닫기</button></div></div>
          </div>
        </div>
      )}
      {showSkillModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">핵심 역량 편집</h3>
              <button onClick={() => setShowSkillModal(false)} className="p-1 hover:bg-muted rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-6 pt-4 border-t"><div className="flex gap-2 justify-end"><button onClick={() => setShowSkillModal(false)} className="px-4 py-2 bg-muted text-foreground rounded-lg">닫기</button></div></div>
          </div>
        </div>
      )}
      {showHobbyModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">취미 편집</h3>
              <button onClick={() => setShowHobbyModal(false)} className="p-1 hover:bg-muted rounded-lg"><X className="h-5 w-5" /></button>
            </div>
            <div className="mt-6 pt-4 border-t"><div className="flex gap-2 justify-end"><button onClick={() => setShowHobbyModal(false)} className="px-4 py-2 bg-muted text-foreground rounded-lg">닫기</button></div></div>
          </div>
        </div>
      )}
    </EditableBackground>
  )
}