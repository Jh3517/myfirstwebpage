"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Heart, Coffee, Book, Plus, X, Settings, Calendar, Building, User, Trophy, Star, Lightbulb, Target, Rocket, Shield, Sparkles, Code, Database, Palette, Megaphone, BarChart3, LineChart, PieChart, Activity, Brain, Cpu, Layers, Package, Server, Smartphone, Monitor, Wifi, Cloud, Lock, Key, Eye, Search, Filter, Edit, FileText, FolderOpen, GitBranch, Hash, Inbox, Send, MessageSquare, Music, Camera, Video, Mic, Volume2, Headphones, Radio, Zap, Globe, Users, TrendingUp, BookOpen, MapPin, Clock, CheckCircle, AlertCircle, Home, School } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

// 사용 가능한 아이콘들 - 경험 카드용
const AVAILABLE_ICONS = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  award: Award,
  trophy: Trophy,
  star: Star,
  lightbulb: Lightbulb,
  target: Target,
  rocket: Rocket,
  shield: Shield,
  building: Building,
  calendar: Calendar,
  book: Book,
  heart: Heart,
  coffee: Coffee,
  user: User,
  zap: Zap,
  globe: Globe,
  users: Users,
  trending: TrendingUp,
  bookOpen: BookOpen,
  mapPin: MapPin,
  clock: Clock,
  check: CheckCircle,
  alert: AlertCircle,
  home: Home,
  school: School,
}

// 사용 가능한 아이콘들 - 스킬용
const SKILL_ICONS = {
  trophy: Trophy,
  sparkles: Sparkles,
  target: Target,
  rocket: Rocket,
  star: Star,
  zap: Zap,
  lightbulb: Lightbulb,
  brain: Brain,
  code: Code,
  database: Database,
  palette: Palette,
  megaphone: Megaphone,
  barChart: BarChart3,
  lineChart: LineChart,
  pieChart: PieChart,
  activity: Activity,
  cpu: Cpu,
  layers: Layers,
  package: Package,
  server: Server,
  smartphone: Smartphone,
  monitor: Monitor,
  wifi: Wifi,
  cloud: Cloud,
  lock: Lock,
  key: Key,
  eye: Eye,
  search: Search,
  filter: Filter,
  edit: Edit,
  fileText: FileText,
  folderOpen: FolderOpen,
  gitBranch: GitBranch,
  hash: Hash,
  inbox: Inbox,
  send: Send,
  messageSquare: MessageSquare,
  music: Music,
  camera: Camera,
  video: Video,
  mic: Mic,
  volume: Volume2,
  headphones: Headphones,
  radio: Radio,
  heart: Heart,
  shield: Shield,
  globe: Globe,
  users: Users,
}

// ⭐️ [수정됨] 취미 이름과 이미지 파일 매핑 ('여행' 제거)
const HOBBY_IMAGES: Record<string, string> = {
  "독서": "/hobby-reading.jpg",
  "📚 독서": "/hobby-reading.jpg",
  "카페 투어": "/hobby-cafe.jpg",
  "☕ 카페 투어": "/hobby-cafe.jpg",
  "전시회 관람": "/hobby-exhibition.jpg",
  "🎨 전시회 관람": "/hobby-exhibition.jpg"
}

export function About() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "소개",
    subtitle: "  ",
    background: {"image":"","video":"","color":"","opacity":0.1},
    experienceCards: [{"icon":"graduation","title":"단국대학교 도시계획부동산학부 ","period":"2022~","description":"전공 및 학위"},{"icon":"award","title":"투자자산운용사 자격증 취득","period":"2025","description":"자격증"},{"icon":"target","title":"신용분석사 자격증 준비 ","period":"2025~","description":"자격증"}],
    skills: [{"icon":"barChart","title":"부동산 금융 및 계량 분석 ","description":"\"저는 '감'이 아닌 '데이터'로 시장을 분석합니다.\" "},{"icon":"shield","title":"부동산 투자 및 법률 분석 역량","description":"\"저는 '수익'만 보지 않고, 그 이면의 '리스크'를 먼저 식별합니다.\""},{"icon":"database","title":"프롭테크 기술 구현 역량","description":"\"저는 분석에서 멈추지 않고, '체험'할 수 있는 서비스로 구현합니다.\""}],
    storyTitle: "나의 이야기",
    story: [" 부동산 시장은 '금융', '법률', 그리고 '데이터'가 복잡하게 얽힌 영역입니다. 저의 열정은 이 복잡성을 '프롭테크'라는 도구로 명쾌하게 시각화하는 일에 있습니다. 저는 금융의 언어와 코드의 언어를 모두 이해하는 'T자형 인재'를 목표로 합니다.","'저는 'PF 부실화가 금융기관에 미치는 영향'을 분석한 프로젝트를 수행하며 VAR 모형, NPL(고정이하여신비율) 등 계량경제 모델을 통해 가설을 데이터로 증명하는 역량을 키웠습니다. 또한, 저는 '부동산 경매 투자 프로젝트'를 통해 등기부 상의 권리관계 분석과, 입지 분석을 바탕으로 한 수익성 분석력을 훈련했습니다. 더불어, 저는 'KB 부동산 신탁의 신탁원부 분석'을 통해, 부동산 개발 사업의 전반적인 절차와, 각 사업 주체들의 리스크 관리 방안을 파악하여, 법적 자료를 통해 실제로 나타나는 영향을 분석하는 능력을 훈련했습니다."," 저의 역량은 보고서 작성에서 멈추지 않습니다. 저는 복잡한 '다중회귀분석' 결과를 누구나 쉽게 이해할 수 있는 \"AI 가치평가 시뮬레이터\"로, '시계열 분석' 데이터는 \"인터랙티브 금융 차트\"로 직접 구현했습니다. 즉, 분석에서 멈추지 않고, 경험까지 제공할 수 있는 기술이야말로 저의 강력한 무기입니다."," 하지만, 저는 아직 무르익지 않았습니다. 따라서 앞으로 다양한 프로젝트를 수행하며, 각 능력들의 전문성을 높여, 부동산 업계의 전문가로 거듭나기 위해 끊임없이 노력하겠습니다."],
    storyImage: "",
    // ⭐️ [수정됨] 기본 취미 목록에서 '여행' 제거
    hobbies: ["📚 독서","☕ 카페 투어","🎨 전시회 관람"]
  }
  
  const [aboutInfo, setAboutInfo] = useState(defaultInfo)
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  const [showCareerModal, setShowCareerModal] = useState(false)
  const [showSkillModal, setShowSkillModal] = useState(false)
  const [showHobbyModal, setShowHobbyModal] = useState(false)
  
  // 선택된 취미 이미지를 저장할 상태
  const [selectedHobbyImage, setSelectedHobbyImage] = useState<string | null>(null)
  
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
  
  const updateAboutInfo = (key: string, value: string | boolean | typeof aboutInfo.skills | typeof aboutInfo.experienceCards | typeof aboutInfo.story | typeof aboutInfo.hobbies | number) => {
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
      icon: "briefcase", 
      title: "새 경험", 
      period: "2024", 
      description: "설명을 입력하세요" 
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
    if (isEditMode) return; // 편집 모드에서는 팝업 방지

    const imagePath = HOBBY_IMAGES[hobbyName];
    if (imagePath) {
      setSelectedHobbyImage(imagePath);
    } else {
      // 이모지를 제거하고 재시도
      const cleanName = hobbyName.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]\s?/, "").trim();
      const fallbackPath = HOBBY_IMAGES[cleanName];
      if (fallbackPath) {
        setSelectedHobbyImage(fallbackPath);
      }
    }
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
          {/* 섹션 제목 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={aboutInfo.title}
                onChange={(value) => updateAboutInfo('title', value)}
                storageKey="about-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <EditableText
                value={aboutInfo.subtitle}
                onChange={(value) => updateAboutInfo('subtitle', value)}
                storageKey="about-subtitle"
                multiline
              />
            </p>
          </div>

          {/* 경험 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* 경험 카드들 */}
            {aboutInfo.experienceCards?.map((card, index) => {
              const Icon = AVAILABLE_ICONS[card.icon as keyof typeof AVAILABLE_ICONS] || Briefcase
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <CardContent className="p-6">
                    {isEditMode && (
                      <button
                        onClick={() => removeExperienceCard(index)}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          <EditableText
                            value={card.title}
                            onChange={(value) => updateExperienceCard(index, 'title', value)}
                            storageKey={`about-experience-${index}-title`}
                          />
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          <EditableText
                            value={card.period}
                            onChange={(value) => updateExperienceCard(index, 'period', value)}
                            storageKey={`about-experience-${index}-period`}
                          />
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <EditableText
                            value={card.description}
                            onChange={(value) => updateExperienceCard(index, 'description', value)}
                            storageKey={`about-experience-${index}-description`}
                          />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
            
            {/* 추가 버튼 */}
            {isEditMode && (
              <Card className="border-2 border-dashed border-muted-foreground/30 shadow-none hover:border-primary transition-all cursor-pointer"
                    onClick={() => setShowCareerModal(true)}>
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">경험 카드 편집</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* 핵심 역량 */}
          {(aboutInfo.skills.length > 0 || isEditMode) && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                핵심 역량
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutInfo.skills.map((skill, index) => {
                  const Icon = SKILL_ICONS[skill.icon as keyof typeof SKILL_ICONS] || Trophy
                  return (
                    <div key={index} className="text-center relative competency-card p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
                      {isEditMode && (
                        <button
                          onClick={() => removeSkill(index)}
                          className={COMMON_STYLES.deleteButton}
                        >
                          <X className={COMMON_STYLES.deleteIcon} />
                        </button>
                      )}
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        <EditableText
                          value={skill.title}
                          onChange={(value) => updateSkill(index, 'title', value)}
                          storageKey={`about-skill-${index}-title`}
                        />
                      </h4>
                      
                      {/* 콘텐츠 교체 영역 래퍼 */}
                      <div className="competency-content-wrapper">
                        
                        {/* 평소에 보일 요약문 */}
                        <p className="text-sm text-muted-foreground competency-summary">
                          <EditableText
                            value={skill.description}
                            onChange={(value) => updateSkill(index, 'description', value)}
                            storageKey={`about-skill-${index}-description`}
                            multiline
                          />
                        </p>
                        
                        {/* 상세 내용 (조건부 렌더링) */}
                        <div className="competency-details">
                          {index === 0 && (
                            <>
                              <h4>📊 부동산 금융 및 계량 분석</h4>
                              <h5>보유 역량</h5>
                              <ul>
                                <li><strong>시계열 분석:</strong> VAR, Granger 인과관계, IRF 등을 활용하여 금리 충격의 <strong>시차 효과(Lag Effect)</strong>를 계량적으로 분석함.</li>
                                <li><strong>금융시장 인사이트:</strong> PF 연체율이 은행의 **BIS 비율** 및 **NPL**에 미치는 영향을 분석하고, 시중은행과 저축은행의 구조적 차이를 비교함.</li>
                                <li><strong>데이터 전처리:</strong> 로그 변환 및 1차 차분을 통해 비정상 시계열 데이터를 가공.</li>
                              </ul>
                              <h5>학습 방향</h5>
                              <ul>
                                <li>머신러닝(ML) 기반 비선형 예측 모델을 학습하여, 부동산 가치평가(AVM) 모델의 정교화를 목표로 하고 있습니다.</li>
                              </ul>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <h4>⚖️ 부동산 투자 및 법률 분석</h4>
                              <h5>보유 역량</h5>
                              <ul>
                                <li><strong>법률 실사 (Due Diligence):</strong> 등기부, 매각물건명세서 등을 교차 검증하여 <strong>대항력 없는 임차인</strong>을 특정하고 '권리분석상 안전한' 물건을 식별함.</li>
                                <li><strong>리스크 관리:</strong> <strong>명도 리스크</strong> 및 체납관리비 리스크를 사전에 도출하고, '인도명령' 및 '협상비' 기반의 대응 전략을 수립.</li>
                                <li><strong>가치평가(Valuation):</strong> '오피스텔' 용도를 활용한 **경락잔금대출 LTV 80%** 전략 및 **ROE 15.8%** 등 구체적인 수익성 분석.</li>
                              </ul>
                              <h5>학습 방향</h5>
                              <ul>
                                <li>NPL(부실채권) 투자, 상가 및 토지 등 <strong>특수물건</strong>의 권리분석 및 가치평가 방법론을 심화 학습 중입니다.</li>
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
                                <li>Python(Flask)을 활용하여 계량 분석 모델을 **API로 직접 개발**하고, 이를 프론트엔드와 연동하는 풀스택(Full-Stack) 개발을 목표로 하고 있습니다.</li>
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
                {isEditMode && (
                  <div 
                    className="text-center border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:border-primary transition-all"
                    onClick={() => setShowSkillModal(true)}
                  >
                    <div>
                      <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">스킬 편집</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 자기소개 상세 */}
          {(aboutInfo.story.length > 0 || isEditMode) && (
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    <EditableText
                      value={aboutInfo.storyTitle}
                      onChange={(value) => updateAboutInfo('storyTitle', value)}
                      storageKey="about-storyTitle"
                    />
                  </h3>
                  {aboutInfo.story.map((paragraph, index) => (
                    <div key={index} className="relative mb-4">
                      {isEditMode && (
                        <button
                          onClick={() => removeStory(index)}
                          className={COMMON_STYLES.deleteButton}
                        >
                          <X className={COMMON_STYLES.deleteIcon} />
                        </button>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        <EditableText
                          value={paragraph}
                          onChange={(value) => updateStory(index, value)}
                          storageKey={`about-story-${index}`}
                          multiline
                        />
                      </p>
                    </div>
                  ))}
                  {isEditMode && (
                    <button
                      onClick={addStory}
                      className="mt-2 px-4 py-2 border border-dashed border-muted-foreground/30 rounded-lg hover:border-primary transition-all"
                    >
                      <Plus className="h-4 w-4 inline mr-2" />
                      문단 추가
                    </button>
                  )}
                </div>
                
                {/* 이미지 영역 */}
                <div className="relative w-full h-full min-h-[500px] lg:min-h-full">
                  <EditableMedia
                    src={aboutInfo.storyImage}
                    onChange={(src) => updateAboutInfo('storyImage', src)}
                    type="image"
                    storageKey="about-storyImage"
                    className="w-full h-full object-cover"
                    alt="소개 이미지"
                    purpose="about-image"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 취미 & 관심사 */}
          {(aboutInfo.hobbies.length > 0 || isEditMode) && (
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                취미 & 관심사
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {aboutInfo.hobbies.map((hobby, index) => (
                  // ⭐️ [수정됨] 클릭 이벤트 및 커서 스타일 추가
                  <span 
                    key={index} 
                    className={`px-4 py-2 bg-primary/10 text-primary rounded-full text-sm relative group flex items-center justify-center transition-all hover:bg-primary/20 ${!isEditMode ? "cursor-pointer" : ""}`}
                    onClick={() => handleHobbyClick(hobby)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                            e.stopPropagation(); // 클릭 이벤트 버블링 방지
                            removeHobby(index);
                        }}
                        className={`${COMMON_STYLES.deleteButton} opacity-0 group-hover:opacity-100 transition-opacity`}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    <EditableText
                      value={hobby}
                      onChange={(value) => updateHobby(index, value)}
                      storageKey={`about-hobby-${index}`}
                    />
                  </span>
                ))}
                {isEditMode && (
                  <button
                    onClick={() => setShowHobbyModal(true)}
                    className="px-4 py-2 border border-dashed border-muted-foreground/30 rounded-full text-sm hover:border-primary transition-all"
                  >
                    <Settings className="h-4 w-4 inline mr-1" />
                    편집
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ⭐️ [추가됨] 취미 이미지 팝업 모달 */}
      {selectedHobbyImage && (
        <div 
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedHobbyImage(null)}
        >
            <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <button 
                    onClick={() => setSelectedHobbyImage(null)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <X className="h-8 w-8" />
                </button>
                <img 
                    src={selectedHobbyImage} 
                    alt="Hobby" 
                    className="rounded-lg shadow-2xl max-w-full max-h-[85vh] object-contain bg-white"
                />
            </div>
        </div>
      )}
      
      {/* 경험 카드 편집 모달 */}
      {showCareerModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">경험 카드 편집</h3>
              <button
                onClick={() => setShowCareerModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.experienceCards?.map((card, index) => {
                const Icon = AVAILABLE_ICONS[card.icon as keyof typeof AVAILABLE_ICONS] || Briefcase
                return (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg bg-muted/30">
                    {/* 아이콘 선택 */}
                    <select
                      value={card.icon}
                      onChange={(e) => updateExperienceCard(index, 'icon', e.target.value)}
                      className="w-40 px-2 py-2 border rounded-lg bg-background"
                    >
                      <option value="briefcase">💼 직장</option>
                      <option value="graduation">🎓 학교</option>
                      <option value="award">🏆 수상</option>
                      <option value="trophy">🏅 성과</option>
                      <option value="star">⭐ 우수</option>
                      <option value="lightbulb">💡 아이디어</option>
                      <option value="target">🎯 목표</option>
                      <option value="rocket">🚀 시작</option>
                      <option value="shield">🛡️ 보안</option>
                      <option value="building">🏢 회사</option>
                      <option value="calendar">📅 기간</option>
                      <option value="book">📚 교육</option>
                      <option value="heart">❤️ 열정</option>
                      <option value="coffee">☕ 일상</option>
                      <option value="user">👤 개인</option>
                    </select>
                    
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => updateExperienceCard(index, 'title', e.target.value)}
                        placeholder="예: ABC 회사, 서울대학교, 구글 자격증"
                        className="w-full px-3 py-2 border rounded-lg bg-background font-semibold"
                      />
                      
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={card.period}
                          onChange={(e) => updateExperienceCard(index, 'period', e.target.value)}
                          placeholder="예: 2020 - 현재"
                          className="flex-1 px-3 py-2 border rounded-lg bg-background"
                        />
                        
                        <input
                          type="text"
                          value={card.description}
                          onChange={(e) => updateExperienceCard(index, 'description', e.target.value)}
                          placeholder="예: 마케팅 매니저, 경영학 학사, GAIQ 인증"
                          className="flex-1 px-3 py-2 border rounded-lg bg-background"
                        />
                      </div>
                    </div>
                    
                    <button
                      onClick={() => removeExperienceCard(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
              
              <button
                onClick={addExperienceCard}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                카드 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCareerModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowCareerModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 스킬 편집 모달 */}
      {showSkillModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2147483647]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">핵심 역량 편집</h3>
              <button
                onClick={() => setShowSkillModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.skills.map((skill, index) => {
                const Icon = SKILL_ICONS[skill.icon as keyof typeof SKILL_ICONS] || Trophy
                return (
                  <div key={index} className="flex items-start gap-3 p-3 border rounded-lg bg-muted/30">
                    {/* 아이콘 선택 */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <select
                        value={skill.icon}
                        onChange={(e) => updateSkill(index, 'icon', e.target.value)}
                        className="w-32 px-2 py-1 text-xs border rounded-lg bg-background"
                      >
                        <optgroup label="기술 스킬">
                          <option value="code">💻 코드/개발</option>
                          <option value="database">🗜️ 데이터베이스</option>
                          <option value="server">🌐 서버/클라우드</option>
                          <option value="smartphone">📱 모바일</option>
                          <option value="monitor">🖥️ 프론트엔드</option>
                          <option value="cpu">🤖 AI/ML</option>
                          <option value="gitBranch">🌿 Git/버전관리</option>
                          <option value="lock">🔒 보안</option>
                        </optgroup>
                        <optgroup label="비즈니스">
                          <option value="barChart">📊 데이터 분석</option>
                          <option value="lineChart">📈 성과 분석</option>
                          <option value="pieChart">🥧 통계/시각화</option>
                          <option value="megaphone">📢 마케팅</option>
                          <option value="target">🎯 전략/기획</option>
                          <option value="users">👥 팀워크</option>
                        </optgroup>
                        <optgroup label="창의적 스킬">
                          <option value="palette">🎨 디자인</option>
                          <option value="camera">📷 사진/영상</option>
                          <option value="music">🎵 음악/오디오</option>
                          <option value="edit">✏️ 글쓰기/편집</option>
                          <option value="video">🎬 영상 제작</option>
                        </optgroup>
                        <optgroup label="일반 역량">
                          <option value="trophy">🏆 리더십</option>
                          <option value="sparkles">✨ 혁신</option>
                          <option value="rocket">🚀 실행력</option>
                          <option value="brain">🧠 분석력</option>
                          <option value="lightbulb">💡 창의력</option>
                          <option value="zap">⚡ 속도/효율</option>
                          <option value="star">⭐ 전문성</option>
                          <option value="heart">❤️ 열정</option>
                          <option value="shield">🛡️ 신뢰성</option>
                          <option value="globe">🌍 글로벌</option>
                        </optgroup>
                      </select>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        value={skill.title}
                        onChange={(e) => updateSkill(index, 'title', e.target.value)}
                        placeholder="예: 프론트엔드 개발, 데이터 분석, 프로젝트 관리"
                        className="w-full px-3 py-2 border rounded-lg bg-background font-semibold"
                      />
                      
                      <textarea
                        value={skill.description}
                        onChange={(e) => updateSkill(index, 'description', e.target.value)}
                        placeholder="예: React와 TypeScript를 활용한 모던 웹 애플리케이션 개발"
                        className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                        rows={2}
                      />
                    </div>
                    
                    <button
                      onClick={() => removeSkill(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )
              })}
              
              <button
                onClick={addSkill}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                스킬 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                💡 팁: 아이콘을 선택하고 제목과 설명을 입력하세요. 필요한 만큼 자유롭게 추가할 수 있습니다.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowSkillModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowSkillModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* 취미 편집 모달 */}
      {showHobbyModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[2147483647]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">취미 & 관심사 편집</h3>
              <button
                onClick={() => setShowHobbyModal(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {aboutInfo.hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <input
                    type="text"
                    value={hobby}
                    onChange={(e) => updateHobby(index, e.target.value)}
                    placeholder="예: 📚 독서"
                    className="flex-1 px-3 py-2 border rounded-lg bg-background"
                  />
                  
                  <button
                    onClick={() => removeHobby(index)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              <button
                onClick={addHobby}
                className="w-full py-3 border-2 border-dashed rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Plus className="h-4 w-4 inline mr-2" />
                취미 추가
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">🎯 취미 예시:</p>
                <div className="flex flex-wrap gap-2">
                  {['📚 독서', '☕ 카페 투어', '🎨 전시회 관람', '✈️ 여행', '🏃 러닝', '📸 사진', '🎮 게임', '🎬 영화 감상', '🎵 음악 감상', '🍳 요리', '🌱 가드닝', '🏊 수영', '🧘 요가', '🎸 기타 연주', '✍️ 글쓰기', '🏕️ 캠핑', '🎭 연극 관람', '🎪 공연 관람', '🚴 자전거', '⛷️ 스키'].map((example) => (
                    <button
                      key={example}
                      className="px-3 py-1 text-sm bg-muted hover:bg-primary/10 rounded-full transition-all"
                      onClick={() => {
                        if (!aboutInfo.hobbies.includes(example)) {
                          updateAboutInfo('hobbies', [...aboutInfo.hobbies, example])
                        }
                      }}
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                💡 팁: 이모지와 함께 취미를 입력하세요. 예시를 클릭하면 새 취미가 추가됩니다.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowHobbyModal(false)}
                  className="flex-1 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80"
                >
                  닫기
                </button>
                <button
                  onClick={async () => {
                    const success = await saveToFile('about', 'Info', aboutInfo)
                    if (success) {
                      alert('✅ 소개 설정이 파일에 저장되었습니다!')
                      setShowHobbyModal(false)
                    } else {
                      alert('❌ 파일 저장에 실패했습니다.')
                    }
                  }}
                  className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
                >
                  📁 파일에 저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </EditableBackground>
  )
}