"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Leaf,
  GraduationCap,
  Zap,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
} from "@/components/Icons";
import HeroBackground from "@/components/HeroBackground";
import PhotoSlider from "@/components/PhotoSlider";
import EventCard from "@/components/EventCard";
import { TreeLoader } from "@/components/TreeLoader";

export default function HomePage() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        // Fetch Blogs
        const blogRes = await fetch("/api/blogs");
        const blogData = await blogRes.json();
        setLatestBlogs(Array.isArray(blogData) ? blogData.slice(0, 3) : []);

        // Fetch Gallery
        const galleryRes = await fetch("/api/gallery");
        const galleryData = await galleryRes.json();
        setGalleryImages(
          Array.isArray(galleryData) ? galleryData.slice(0, 4) : [],
        );
      } catch (err) {
        console.error("Failed to fetch latest data", err);
      } finally {
        setLoadingBlogs(false);
        setLoadingGallery(false);
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="home-hero">
        <PhotoSlider />
        <HeroBackground />
        <div className="hero-content-split">
          <div className="hero-left">
            <img
              src="/estah-logo-counsel.jpg"
              alt="Estah The Counsel Logo"
              className="hero-large-logo"
            />
          </div>
          <div className="hero-right">
            <p className="eyebrow">WE HEAL THE EARTH · Established 2026</p>
            <h1 className="hero-title">
              Healing the Earth Through <em>Education</em> and <em>Action</em>
            </h1>
            <p className="hero-sub">
              We are a sustainability-driven initiative creating lasting impact
              through regenerative education and community transformation. Join
              the movement.
            </p>
            <div className="hero-ctas">
              <Link href="/events" className="cta-btn primary">
                Explore Events
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/blog" className="cta-btn secondary">
                Read Stories
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-decorations">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>
      </section>

      {/* QUICK STATS TICKER */}
      <section className="home-stats">
        <div className="stats-ticker">
          <div className="ticker-inner">
            <span>50+ GLOBAL PARTNERS</span>
            <span>COLLABORATING FOR IMPACT</span>
            <span>EMPOWERING COMMUNITIES</span>
            <span>DRIVING SUSTAINABLE CHANGE</span>
            <span>50+ GLOBAL PARTNERS</span>
            <span>COLLABORATING FOR IMPACT</span>
            <span>EMPOWERING COMMUNITIES</span>
            <span>DRIVING SUSTAINABLE CHANGE</span>
          </div>
        </div>
      </section>

      {/* OUR STORY / MISSION */}
      <section className="home-story">
        <div className="story-grid">
          <div className="story-image-wrap">
            <img
              src="/story-mission.png"
              alt="Planting seeds of change"
              className="story-main-img"
            />
            <div className="img-accent-card">
              <span className="accent-num">01</span>
              <p>
                Our commitment to regenerative growth starts at the grassroots
                level.
              </p>
            </div>
          </div>
          <div className="story-content">
            <p className="section-label">Our Story</p>
            <h2 className="story-title">
              From <em>Awareness</em> to <em>Accountability</em>
            </h2>
            <p className="story-text">
              Estah Society’s "WE HEAL THE EARTH" initiative is more than just a
              campaign; it’s a commitment to the Future of India 2047. We bridge
              the gap between environmental consciousness and tangible community
              action.
            </p>
            <div className="story-points">
              <div className="s-point">
                <strong>Regenerative Mindsets</strong>
                <p>
                  Teaching communities not just to sustain, but to actively heal
                  their local ecosystems.
                </p>
              </div>
              <div className="s-point">
                <strong>Systemic Change</strong>
                <p>
                  Working with institutional partners to scale sustainable
                  practices across the nation.
                </p>
              </div>
            </div>
            <Link href="/programs" className="learn-more-link">
              Explore our Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* VISION CARDS */}
      <section className="home-vision">
        <div className="section-header">
          <p className="section-label">Our Philosophy</p>
          <h2 className="section-title">
            A Vision for <em>India 2047</em>
          </h2>
        </div>

        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon">
              <Leaf size={32} />
            </div>
            <h3>Sustainability</h3>
            <p>
              Healing the earth through conscious living and regenerative
              educational frameworks.
            </p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">
              <GraduationCap size={32} />
            </div>
            <h3>Education</h3>
            <p>
              Bridging the gap with scholarship exams and fellowships for every
              aspiring mind.
            </p>
          </div>
          <div className="vision-card">
            <div className="vision-icon">
              <Zap size={32} />
            </div>
            <h3>Empowerment</h3>
            <p>
              Providing the tools and networks for individual and community
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* LATEST STORIES PREVIEW */}
      <section className="home-latest-blogs">
        <div className="section-header center">
          <p className="section-label">Field Notes</p>
          <h2 className="section-title">
            Latest <em>Stories</em>
          </h2>
        </div>

        <div className="blog-preview-grid">
          {loadingBlogs ? (
            <div className="loader-container">
              <TreeLoader size={60} />
            </div>
          ) : (
            latestBlogs.map((post, idx) => (
              <Link href="/blog" key={idx} className="blog-preview-card">
                <div className="preview-content">
                  <span className="p-category">Impact Story</span>
                  <h3 className="p-title">{post.title}</h3>
                  <p className="p-excerpt">
                    {post.excerpt?.substring(0, 100)}...
                  </p>
                  <span className="p-link">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
        <div className="center-cta">
          <Link href="/blog" className="view-all-btn">
            View All Historical Notes
          </Link>
        </div>
      </section>

      {/* UPCOMING EVENTS STRIP */}
      <section className="events-strip">
        <div className="strip-container">
          <div className="strip-header">
            <div className="header-text">
              <p className="section-label">Join Us</p>
              <h2 className="strip-title">
                Upcoming <em>Events</em>
              </h2>
            </div>
            <Link href="/events" className="strip-link">
              View All Events <ArrowRight size={18} />
            </Link>
          </div>
          <div className="events-row">
            <EventCard />
            <EventCard
              isPlaceholder={true}
              title="Community Tree Plantation"
              category="#Environment"
            />
            <EventCard
              isPlaceholder={true}
              title="Rural Education Drive"
              category="#Education"
            />
          </div>
        </div>
      </section>

      {/* MOMENT GALLERY STRIP */}
      <section className="photos-strip">
        <div className="strip-container">
          <div className="strip-header">
            <div className="header-text">
              <p className="section-label">Gallery</p>
              <h2 className="strip-title">
                Moments <em>in Action</em>
              </h2>
            </div>
            <Link href="/gallery" className="strip-link">
              See All Photos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photos-grid">
            {loadingGallery ? (
              <div className="loader-container">
                <TreeLoader size={40} />
              </div>
            ) : (
              galleryImages.map((img, i) => (
                <div key={i} className="photo-item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="photo-overlay">
                    <span>{img.category}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* IMPACT FRAMEWORK */}
      <section className="home-framework">
        <div className="framework-container">
          <div className="framework-content">
            <p className="section-label">Impact Framework</p>
            <h2 className="framework-title">
              The Regenerative <em>Education Model</em>
            </h2>
            <p className="framework-desc">
              We don&apos;t just teach; we transform. Our ecosystem is built on
              three pillars that ensure sustainable development from classroom
              to community.
            </p>
            <div className="framework-points">
              <div className="f-point">
                <div className="f-icon">
                  <Zap size={24} />
                </div>
                <div className="f-text">
                  <h4>Dynamic Curriculum</h4>
                  <p>
                    Scholarship exams and fellowships designed for modern
                    environmental challenges.
                  </p>
                </div>
              </div>
              <div className="f-point">
                <div className="f-icon">
                  <Leaf size={24} />
                </div>
                <div className="f-text">
                  <h4>Rooted Action</h4>
                  <p>
                    Grassroots community projects that put regenerative theory
                    into practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="framework-visual">
            <div className="visual-orb"></div>
            <img src="/story-mission.png" alt="Framework" />
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL PATHWAYS */}
      <section className="home-pathways">
        <div className="pathways-head center">
          <p className="section-label">Scale through Collaboration</p>
          <h2 className="section-title">
            Institutional <em>Pathways</em>
          </h2>
        </div>
        <div className="pathways-grid">
          <div className="path-card">
            <div className="path-top">
              <span className="path-num">01</span>
              <GraduationCap size={32} />
            </div>
            <h3>Academic Alliances</h3>
            <p>
              Partnering with universities to integrate sustainability into
              mainstream higher education.
            </p>
          </div>
          <div className="path-card">
            <div className="path-top">
              <span className="path-num">02</span>
              <ExternalLink size={32} />
            </div>
            <h3>Corporate Synergy</h3>
            <p>
              Driving CSR initiatives that create measurable environmental and
              social ROI.
            </p>
          </div>
          <div className="path-card">
            <div className="path-top">
              <span className="path-num">03</span>
              <Zap size={32} />
            </div>
            <h3>Government Policy</h3>
            <p>
              Advising on educational frameworks that align with India 2047
              sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* SPONSORS & PARTNERS */}
      <section className="home-sponsors">
        <div className="sponsors-container">
          <div className="sponsors-header center">
            {/* <span className="sponsors-label">🤝 Our Sponsors & Partners</span> */}
            <h2 className="section-title">
              Powering Change <em>Together</em>
            </h2>
            <p className="sponsors-desc">
              We're grateful to collaborate with organizations that share our
              vision of environmental restoration and community empowerment.
              Together, we're creating lasting positive impact.
            </p>
          </div>
          <div className="sponsors-grid">
            <div className="sponsor-card">
              <img src="/sponsors/1-1.png" alt="Estah" />
            </div>
            <div className="sponsor-card">
              <img src="/sponsors/4.png" alt="C-SED" />
            </div>
            <div className="sponsor-card">
              <img src="/sponsors/5.png" alt="HNF Capital" />
            </div>
            <div className="sponsor-card">
              <img src="/sponsors/6.png" alt="Seal" />
            </div>
            <div className="sponsor-card">
              <img src="/sponsors/7.png" alt="National Parmathon" />
            </div>
            <div className="sponsor-card">
              <img src="/sponsors/8.png" alt="Earth Tree" />
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="home-community-cta">
        <div className="cta-box">
          <div className="cta-inner">
            <h2 className="cta-title">
              Ready to <em>Heal the Earth?</em>
            </h2>
            <p className="cta-sub">
              Join thousands of students, educators, and leaders in building a
              regenerative future.
            </p>
            <div className="cta-links">
              <a
                href="https://pages.razorpay.com/pl_HkMCyxeXURf9kK/view"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                Support the Cause
              </a>
              {/* <Link href="/volunteers" className="cta-btn secondary">Become a Volunteer</Link> */}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          background: var(--bg);
          color: var(--text);
        }

        /* HERO */
        .home-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: left;
          padding: 0 4vw;
          overflow: hidden;
        }
        .hero-content-split {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .hero-left {
          flex: 0.8;
          display: flex;
          justify-content: center;
        }
        .hero-right {
          flex: 1.2;
          display: flex;
          flex-direction: column;
        }
        .hero-large-logo {
          width: 100%;
          max-width: 320px;
          height: auto;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: transparent;
        }
        .eyebrow {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: var(--lime);
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .hero-title {
          font-family: var(--font-sans);
          font-size: var(--fs-h1);
          line-height: 1;
          margin-bottom: 24px;
          font-weight: 900;
          letter-spacing: -0.03em;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 900;
          color: var(--lime);
        }
        .hero-sub {
          font-size: 1.25rem;
          opacity: 0.8;
          max-width: 650px;
          margin: 0 0 48px;
          line-height: 1.6;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: flex-start;
          margin-top: 0px;
        }
        .cta-btn {
          padding: 18px 36px;
          border-radius: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-btn.primary {
          background: var(--lime);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn.secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: var(--text);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* STATS TICKER */
        .home-stats {
          background: var(--surface1);
          padding: 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stats-ticker {
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-inner {
          display: inline-block;
          animation: ticker 30s linear infinite;
        }
        .ticker-inner span {
          display: inline-block;
          margin-right: 100px;
          font-weight: 900;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          opacity: 0.8;
          color: white;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* OUR STORY */
        .home-story {
          padding: 140px 4vw;
          max-width: 1400px;
          margin: 0 auto;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .story-image-wrap {
          position: relative;
        }
        .story-main-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          border-radius: 40px;
          filter: saturate(1.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          display: block;
        }
        .img-accent-card {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: var(--surface1);
          padding: 30px;
          border-radius: 24px;
          max-width: 240px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .accent-num {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--lime);
          display: block;
          margin-bottom: 12px;
        }
        .img-accent-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          font-weight: 600;
        }
        .story-title {
          font-family: var(--font-sans);
          font-size: var(--fs-h2);
          margin: 10px 0 24px;
          line-height: 1.1;
          font-weight: 900;
        }
        .story-title em {
          font-style: italic;
          color: var(--lime);
          font-weight: 900;
        }
        .story-text {
          font-size: 1.15rem;
          opacity: 0.8;
          margin-bottom: 40px;
          line-height: 1.7;
        }
        .story-points {
          display: grid;
          gap: 24px;
          margin-bottom: 48px;
        }
        .s-point strong {
          color: var(--lime);
          display: block;
          margin-bottom: 4px;
        }
        .learn-more-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          color: var(--lime);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
        }

        /* VISION */
        .home-vision {
          padding: 100px 4vw;
          background: rgba(255, 255, 255, 0.01);
        }
        .section-header {
          margin-bottom: 60px;
        }
        .section-header.center {
          text-align: center;
        }
        .section-label {
          color: var(--lime);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          margin-bottom: 16px;
        }
        .section-title {
          font-family: var(--font-sans);
          font-size: var(--fs-h2);
          font-weight: 900;
          letter-spacing: -0.01em;
        }
        .section-title em {
          font-style: italic;
          color: var(--lime);
          font-weight: 900;
        }
        .vision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .vision-card {
          background: var(--surface1);
          padding: 50px;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s ease;
        }
        .vision-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--lime);
        }
        .vision-icon {
          color: var(--lime);
          margin-bottom: 30px;
        }
        .vision-card h3 {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          margin-bottom: 16px;
        }
        .vision-card p {
          opacity: 0.7;
          line-height: 1.7;
        }

        /* LATEST BLOGS */
        .home-latest-blogs {
          padding: 140px 4vw;
          max-width: 1400px;
          margin: 0 auto;
        }
        .blog-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 60px;
        }
        .blog-preview-card {
          background: var(--surface1);
          padding: 40px;
          border-radius: 24px;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .blog-preview-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: scale(1.02);
        }
        .p-category {
          font-size: 0.75rem;
          font-weight: 900;
          color: var(--lime);
          text-transform: uppercase;
          margin-bottom: 20px;
          display: block;
        }
        .p-title {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .p-excerpt {
          font-size: 0.95rem;
          opacity: 0.6;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .p-link {
          font-weight: 800;
          color: var(--lime);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .center-cta {
          text-align: center;
          margin-top: 60px;
        }
        .view-all-btn {
          display: inline-block;
          padding: 18px 40px;
          background: transparent;
          border: 1px solid var(--lime);
          color: var(--lime);
          border-radius: 14px;
          font-weight: 800;
          text-decoration: none;
        }

        .loader-container {
          display: flex;
          justify-content: center;
          padding: 40px;
        }

        /* STRIPS (EVENTS & PHOTOS) */
        .events-strip,
        .photos-strip {
          padding: 100px 4vw;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .strip-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .strip-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 50px;
        }
        .strip-title {
          font-family: var(--font-sans);
          font-size: var(--fs-h2);
          font-weight: 900;
          margin-top: 10px;
        }
        .strip-title em {
          font-style: italic;
          color: var(--lime);
          font-weight: 900;
        }
        .strip-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          color: var(--lime);
          text-decoration: none;
        }
        .events-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .photos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .photo-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
        }
        .photo-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .photo-item:hover img {
          transform: scale(1.1);
        }
        .photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            transparent 60%
          );
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .photo-item:hover .photo-overlay {
          opacity: 1;
        }
        .photo-overlay span {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--lime);
        }

        /* IMPACT FRAMEWORK */
        .home-framework {
          padding: 140px 4vw;
          background: var(--surface1);
        }
        .framework-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }
        .framework-title {
          font-family: var(--font-sans);
          font-size: var(--fs-h2);
          font-weight: 900;
          margin: 10px 0 24px;
        }
        .framework-title em {
          font-style: italic;
          color: var(--lime);
          font-weight: 900;
        }
        .framework-desc {
          font-size: 1.15rem;
          opacity: 0.8;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .framework-points {
          display: grid;
          gap: 30px;
        }
        .f-point {
          display: flex;
          gap: 20px;
        }
        .f-icon {
          color: var(--lime);
        }
        .f-text h4 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        .f-text p {
          opacity: 0.7;
          font-size: 0.95rem;
        }
        .framework-visual {
          position: relative;
        }
        .framework-visual img {
          width: 100%;
          border-radius: 40px;
        }

        /* PATHWAYS */
        .home-pathways {
          padding: 140px 4vw;
          max-width: 1400px;
          margin: 0 auto;
        }
        .home-pathways .center {
          text-align: center;
          margin-bottom: 80px;
        }
        .pathways-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .path-card {
          padding: 50px;
          background: var(--surface1);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .path-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--lime);
          margin-bottom: 30px;
        }
        .path-num {
          font-size: 2.5rem;
          font-weight: 900;
          opacity: 0.9;
          color: #ffffff;
        }
        .path-card h3 {
          font-family: var(--font-sans);
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .path-card p {
          opacity: 0.7;
          line-height: 1.6;
        }

        /* SPONSORS */
        .home-sponsors {
          padding: 80px 4vw 140px;
          background: var(--bg);
        }
        .sponsors-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .sponsors-header.center {
          text-align: center;
          margin-bottom: 60px;
        }
        .sponsors-label {
          display: inline-block;
          background: #3b82f6;
          color: white;
          padding: 10px 24px;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 24px;
        }
        .sponsors-desc {
          font-size: 1.15rem;
          opacity: 0.8;
          max-width: 800px;
          margin: 20px auto 0;
          line-height: 1.6;
        }
        .sponsors-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .sponsor-card {
          background: var(--surface1);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 4/3;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .sponsor-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.04);
        }
        .sponsor-card img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          opacity: 0.8;
          transition:
            opacity 0.3s ease,
            filter 0.3s ease;
        }
        .sponsor-card:hover img {
          opacity: 1;
        }

        /* COMMUNITY CTA */
        .home-community-cta {
          padding: 140px 4vw;
        }
        .cta-box {
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, var(--lime), #4e8c6f);
          border-radius: 48px;
          padding: 100px 40px;
          text-align: center;
          color: var(--text-dark);
        }
        .cta-title {
          font-family: var(--font-sans);
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 24px;
        }
        .cta-title em {
          font-style: italic;
          color: white;
        }
        .cta-sub {
          font-size: 1.4rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto 48px;
        }
        .cta-links {
          display: flex;
          gap: 20px;
          justify-content: center;
        }
        .cta-box .primary {
          background: white;
          color: var(--text-dark);
        }
        .cta-box .secondary {
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.2);
          color: var(--text-dark);
        }

        @media (max-width: 1024px) {
          .home-story,
          .home-vision,
          .home-latest-blogs,
          .events-strip,
          .photos-strip,
          .home-framework,
          .home-pathways,
          .home-community-cta {
            padding: 80px 4vw;
          }
          .story-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 80px;
          }
          .framework-container {
            grid-template-columns: 1fr;
            gap: 80px;
          }
          .story-image-wrap,
          .framework-visual {
            max-width: 600px;
            margin: 0 auto;
          }
          .img-accent-card {
            right: -10px;
            bottom: -20px;
          }
          .events-row,
          .vision-grid,
          .blog-preview-grid,
          .pathways-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .photos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .sponsors-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          .cta-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .home-hero {
            text-align: center;
            padding-top: 100px;
            padding-bottom: 60px;
          }
          .hero-content-split {
            flex-direction: column;
            gap: 30px;
            margin-bottom: 24px;
          }

          /* Use flex order to interleave on mobile without breaking desktop DOM */
          .hero-right {
            display: contents;
          }
          .eyebrow {
            order: 1;
          }
          .hero-title {
            order: 2;
          }
          .hero-sub {
            order: 3;
            margin: 0 auto 0px !important;
          }
          .hero-left {
            order: 4;
            margin: 10px 0 20px;
          }
          .hero-ctas {
            order: 5;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            padding: 0 4vw;
          }

          .hero-large-logo {
            max-width: 280px;
          }
          .vision-grid,
          .blog-preview-grid,
          .pathways-grid {
            grid-template-columns: 1fr;
          }
          .sponsors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .events-row,
          .photos-grid {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 20px;
            margin: 0 -4vw; /* Break out of container padding */
            padding: 0 4vw;
            scrollbar-width: none; /* Firefox */
          }
          .events-row::-webkit-scrollbar,
          .photos-grid::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
          :global(.events-row > *),
          .photos-grid > * {
            flex: 0 0 85%;
            min-width: 85%;
            scroll-snap-align: center;
          }
          .photos-grid > * {
            flex: 0 0 70%;
          }
        }

        @media (max-width: 640px) {
          .home-story,
          .home-vision,
          .home-latest-blogs,
          .events-strip,
          .photos-strip,
          .home-framework,
          .home-pathways,
          .home-community-cta {
            padding: 60px 4vw;
          }
          .strip-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .cta-links {
            flex-direction: column;
          }
          .sponsors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          :global(.events-row > *) {
            flex: 0 0 90%;
            min-width: 90%;
          }
          .photos-grid > * {
            flex: 0 0 80%;
            min-width: 80%;
          }
          .img-accent-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin: -20px auto 0;
            max-width: 90%;
            z-index: 2;
          }
          .hero-large-logo {
            max-width: 240px;
          }
          :global(.hero-brand-mark) {
            margin-bottom: 16px !important;
          }
          .eyebrow {
            margin-bottom: 12px;
            font-size: 0.75rem;
          }
          .hero-title {
            font-size: 2.2rem;
            margin-bottom: 16px;
          }
          .hero-sub {
            margin-bottom: 24px;
            font-size: 1.05rem;
          }
          .hero-ctas {
            gap: 12px;
            padding: 0;
          }
          .cta-btn {
            padding: 14px 24px;
            width: 100%;
            justify-content: center;
          }
          .cta-box {
            padding: 60px 20px;
            border-radius: 32px;
          }
        }
      `}</style>
    </div>
  );
}
