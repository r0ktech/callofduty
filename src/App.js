import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaPlay,
  FaChevronDown,
  FaSteam,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

const CODGameLanding = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "WARZONE 2.0",
      subtitle: "THE NEW ERA OF BATTLE ROYALE",
      bgImage:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/hero/2025/03/revised/B06_S03_COD-HP_Desktop-L_OPERATOR.webp",
      cta: "PLAY FREE NOW",
    },
    {
      title: "MODERN WARFARE III",
      subtitle: "PREPARE FOR THE ULTIMATE CONFRONTATION",
      bgImage:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_MWIII.webp",
      cta: "PRE-ORDER NOW",
    },
    {
      title: "ZOMBIES MODE",
      subtitle: "SURVIVE THE UNDEAD APOCALYPSE",
      bgImage:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/wz/overview/bo6-season-3/COD-HP_WZ_Get-The-Game.webp",
      cta: "WATCH TRAILER",
    },
  ];

  const features = [
    {
      icon: "🔥",
      title: "INTENSE COMBAT",
      description: "Experience realistic gunplay and tactical warfare",
    },
    {
      icon: "🌎",
      title: "MASSIVE MAPS",
      description: "Battle across expansive, detailed environments",
    },
    {
      icon: "🎮",
      title: "CROSS-PLAY",
      description: "Play with friends across all platforms",
    },
    {
      icon: "⚡",
      title: "120FPS",
      description: "Ultra-smooth performance on next-gen consoles",
    },
  ];

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <LandingPage>
      {/* Navigation */}
      <Navbar>
        <Logo>WARZONE</Logo>
        <NavLinks>
          <NavLink href="#">HOME</NavLink>
          <NavLink href="#">MODES</NavLink>
          <NavLink href="#">OPERATORS</NavLink>
          <NavLink href="#">NEWS</NavLink>
          <NavLink href="#">SUPPORT</NavLink>
        </NavLinks>
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </HamburgerMenu>
        <MobileMenu isOpen={isMenuOpen}>
          <MobileNavLink href="#">HOME</MobileNavLink>
          <MobileNavLink href="#">MODES</MobileNavLink>
          <MobileNavLink href="#">OPERATORS</MobileNavLink>
          <MobileNavLink href="#">NEWS</MobileNavLink>
          <MobileNavLink href="#">SUPPORT</MobileNavLink>
        </MobileMenu>
      </Navbar>

      {/* Hero Slider */}
      <HeroSlider>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            active={activeSlide === index}
            bgImage={slide.bgImage}
          >
            <SlideContent>
              <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
              <SlideTitle>{slide.title}</SlideTitle>
              <CTAButton>
                {slide.cta} <FaPlay size={14} />
              </CTAButton>
            </SlideContent>
          </Slide>
        ))}
        <SliderControls>
          {slides.map((_, index) => (
            <SliderDot
              key={index}
              active={activeSlide === index}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </SliderControls>
        <ScrollIndicator>
          <FaChevronDown size={20} />
        </ScrollIndicator>
      </HeroSlider>

      {/* Video Section */}
      <SectionDark>
        <SectionContent>
          <SectionHeader>
            <SectionSubtitle>WATCH THE GAMEPLAY</SectionSubtitle>
            <SectionTitle>LATEST TRAILER</SectionTitle>
          </SectionHeader>
          <VideoContainer>
            {isVideoPlaying ? (
              <iframe
                width="100%"
                height="422"
                src="https://www.youtube.com/embed/SXpnKJBhL48"
                title="Season 02 Launch Trailer | Call of Duty: Warzone &amp; Black Ops 6"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : (
              <VideoPlaceholder onClick={toggleVideo}>
                <PlayButton>
                  <FaPlay size={40} />
                </PlayButton>
                <VideoPlaceholderImage src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S4-ANNOUNCE-TOUT.webp" />
              </VideoPlaceholder>
            )}
          </VideoContainer>
        </SectionContent>
      </SectionDark>

      {/* Features Section */}
      <SectionLight>
        <SectionContent>
          <SectionHeader>
            <SectionSubtitle>WHY PLAY</SectionSubtitle>
            <SectionTitle>GAME FEATURES</SectionTitle>
          </SectionHeader>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionContent>
      </SectionLight>

      {/* Multiplayer Section */}
      <ParallaxSection bgImage="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/listings/GamesPLP_CODM.webp">
        <ParallaxContent>
          <SectionTitleWhite>JOIN THE BATTLE</SectionTitleWhite>
          <SectionSubtitleWhite>
            100+ MILLION PLAYERS WORLDWIDE
          </SectionSubtitleWhite>
          <CTAButtonLarge>DOWNLOAD NOW</CTAButtonLarge>
        </ParallaxContent>
      </ParallaxSection>

      {/* Platforms Section */}
      <SectionDark>
        <SectionContent>
          <SectionHeader>
            <SectionSubtitle>AVAILABLE ON</SectionSubtitle>
            <SectionTitle>ALL PLATFORMS</SectionTitle>
          </SectionHeader>
          <PlatformsGrid>
            <PlatformCard>
              <FaSteam size={50} />
              <PlatformName>STEAM</PlatformName>
            </PlatformCard>
            <PlatformCard>
              <FaXbox size={50} />
              <PlatformName>XBOX</PlatformName>
            </PlatformCard>
            <PlatformCard>
              <FaPlaystation size={50} />
              <PlatformName>PLAYSTATION</PlatformName>
            </PlatformCard>
            <PlatformCard>
              <SiEpicgames size={50} />
              <PlatformName>EPIC GAMES</PlatformName>
            </PlatformCard>
          </PlatformsGrid>
        </SectionContent>
      </SectionDark>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterLogo>WARZONE</FooterLogo>
          <FooterLinks>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Cookie Settings</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterLinks>
          <FooterCopyright>
            © 2025 WARZONE. All Rights Reserved.
          </FooterCopyright>
          <AgeRating>15+</AgeRating>
        </FooterContent>
      </Footer>
    </LandingPage>
  );
};

// Styled Components
const LandingPage = styled.div`
  font-family: "Rajdhani", "Arial Narrow", Arial, sans-serif;
  color: white;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  z-index: 100;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ff4655;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 14px;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: #ff4655;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ff4655;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLine = styled.div`
  width: 25px;
  height: 2px;
  background-color: white;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 20px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 15px;
  z-index: 99;
  border-top: 1px solid #333;
`;

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 0;
  border-bottom: 1px solid #333;
`;

const HeroSlider = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const SlideTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const SlideSubtitle = styled.p`
  font-size: 18px;
  letter-spacing: 3px;
  color: #ff4655;
  text-transform: uppercase;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background-color: #ff4655;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #e63e4d;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 70, 85, 0.4);
  }
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 3;
`;

const SliderDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#ff4655" : "rgba(255,255,255,0.5)"};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ff4655;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 3;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const SectionDark = styled.section`
  background-color: #0f0f0f;
  padding: 100px 0;
`;

const SectionLight = styled.section`
  background-color: #1a1a1a;
  padding: 100px 0;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 15px 0;
  color: white;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  letter-spacing: 3px;
  color: #ff4655;
  text-transform: uppercase;
  font-weight: 600;
`;

const SectionTitleWhite = styled(SectionTitle)`
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;

const SectionSubtitleWhite = styled(SectionSubtitle)`
  color: white;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 10px;
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const VideoPlaceholderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(255, 70, 85, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(255, 70, 85, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background-color: #252525;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
  border-bottom: 3px solid transparent;

  &:hover {
    transform: translateY(-10px);
    border-bottom: 3px solid #ff4655;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  color: white;
`;

const FeatureDescription = styled.p`
  color: #aaa;
  line-height: 1.6;
`;

const ParallaxSection = styled.section`
  position: relative;
  height: 500px;
  background-image: url(${(props) => props.bgImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 2;
`;

const CTAButtonLarge = styled(CTAButton)`
  padding: 20px 40px;
  font-size: 18px;
  margin-top: 40px;
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
`;

const PlatformCard = styled.div`
  background-color: #252525;
  padding: 40px 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  svg {
    color: white;
    transition: all 0.3s;
  }

  &:hover svg {
    color: #ff4655;
    transform: scale(1.2);
  }
`;

const PlatformName = styled.h3`
  font-size: 20px;
  color: white;
`;

const Footer = styled.footer`
  background-color: #0a0a0a;
  padding: 60px 0 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ff4655;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

const FooterLink = styled.a`
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #ff4655;
  }
`;

const FooterCopyright = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
`;

const AgeRating = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid #ff4655;
  color: #ff4655;
  font-weight: 700;
  border-radius: 4px;
`;

export default CODGameLanding;
