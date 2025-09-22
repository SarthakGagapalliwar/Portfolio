"use client";
import React from "react";
import "./FeaturedProjects.css";
import featuredProjectsContent from "./featured-projects-content";
import LiveEmbed from "@/components/LiveEmbed";

import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FeaturedProject {
  info: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const FeaturedProjects: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const featuredProjectCards = gsap.utils.toArray<HTMLElement>(
      ".featured-project-card"
    );

    featuredProjectCards.forEach(
      (featuredProjectCard: HTMLElement, index: number) => {
        if (index < featuredProjectCards.length - 1) {
          const featuredProjectCardInner =
            featuredProjectCard.querySelector<HTMLElement>(
              ".featured-project-card-inner"
            );

          if (!featuredProjectCardInner) return;

          const isMobile = window.innerWidth <= 1000;

          gsap.fromTo(
            featuredProjectCardInner,
            {
              y: "0%",
              z: 0,
              rotationX: 0,
            },
            {
              y: "-50%",
              z: -250,
              rotationX: 45,
              scrollTrigger: {
                trigger: featuredProjectCards[index + 1],
                start: isMobile ? "top 85%" : "top 100%",
                end: "top -75%",
                scrub: true,
                pin: featuredProjectCard,
                pinSpacing: false,
              },
            }
          );

          gsap.to(featuredProjectCardInner, {
            "--after-opacity": 1,
            scrollTrigger: {
              trigger: featuredProjectCards[index + 1],
              start: "top 75%",
              end: "top 0%",
              scrub: true,
            },
          });
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="featured-projects" id="projects">
      {featuredProjectsContent.map(
        (project: FeaturedProject, index: number) => (
          <div key={index} className="featured-project-card">
            <div className="featured-project-card-inner">
              <div className="featured-project-card-content">
                <div className="featured-project-card-info">
                  <div className="featured-project-info-content">
                    <p>{project.info}</p>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon-link"
                        aria-label="View project on GitHub"
                      >
                        <img
                          src="/images/Icon/onlinePlatform/giticon.png"
                          alt="GitHub"
                          className="github-icon"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="featured-project-card-content-main">
                  <div className="featured-project-card-title">
                    <h2>{project.title}</h2>
                  </div>
                  <div className="featured-project-card-description">
                    <p className="lg">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="featured-project-card-img">
                {project.liveUrl ? (
                  <LiveEmbed
                    src={project.liveUrl}
                    title={`${project.title} – Live`}
                  />
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FeaturedProjects;
