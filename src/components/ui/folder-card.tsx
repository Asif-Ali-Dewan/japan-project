"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Star, Check, ArrowRight, Clock, Users, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  FolderCard — Professional UI Designer Edition                             */
/*                                                                             */
/*  A tactile, folder-inspired card with:                                      */
/*  - Generous padding, balanced proportions, and breathing room              */
/*  - Clean white body section (#FFFFFF) with high-contrast typography         */
/*  - Elegant folder-notched transition over the top media cover               */
/*  - Circular avatar frame with verified instructor credentials               */
/*  - Gold star rating & enrolled learner stats                               */
/*  - Full-width integrated pill action buttons inside the white card          */
/* -------------------------------------------------------------------------- */

export interface FolderCardProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
> {
  /** Course Title */
  title?: string;
  /** Subtitle or track */
  subtitle?: string;
  /** Course Category */
  category?: string;
  /** Instructor display name */
  instructor?: string;
  /** Instructor title/role */
  instructorRole?: string;
  /** Circular avatar image URL */
  instructorAvatar?: string;
  /** Optional minimal description (omitted when keeping card fresh & clean) */
  description?: string;
  /** Numeric rating (e.g. 4.9) */
  rating?: number | string;
  /** Number of reviews (e.g. 384) */
  ratingCount?: number | string;
  /** Enrolled student count (e.g. "1,420") */
  enrolledCount?: number | string;
  /** Difficulty level (e.g. "Beginner", "Intermediate", "Advanced") */
  level?: string;
  /** Course status badge object { label, bg, color } */
  statusBadge?: { label: string; bg: string; color: string };
  /** Duration string (e.g. "8 weeks") */
  duration?: string;
  /** Cover image URL */
  cover?: string;
  /** Alt text for cover */
  coverAlt?: string;
  /** Whether the user is currently enrolled */
  isEnrolled?: boolean;
  /** Click handler for View Course */
  onViewCourse?: () => void;
  /** Click handler for Enroll / Enrolled */
  onToggleEnroll?: () => void;
  /** Enable hover spring physics */
  interactive?: boolean;
}

const SPRING = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.8,
} as const;

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -6 },
  tap: { y: -2, scale: 0.995 },
};

const coverVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

export const FolderCard = React.forwardRef<HTMLDivElement, FolderCardProps>(
  function FolderCard(
    {
      title = "Generative AI & LLM Systems",
      subtitle,
      category = "AI",
      instructor = "Dr. Marcus Vance",
      instructorRole = "Ex-OpenAI Researcher & Staff Engineer",
      instructorAvatar,
      description,
      rating = 4.9,
      ratingCount = 384,
      enrolledCount = "1,420",
      level = "Intermediate",
      statusBadge,
      duration = "8 weeks",
      cover,
      coverAlt = "",
      isEnrolled = false,
      onViewCourse,
      onToggleEnroll,
      interactive = true,
      className,
      style,
      onClick,
      ...props
    },
    ref,
  ) {
    const reduceMotion = useReducedMotion();
    const animate = interactive && !reduceMotion;

    // Instructor fallback initials
    const initials = instructor
      ? instructor
          .split(" ")
          .filter(Boolean)
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "ED";

    const formattedRating =
      typeof rating === "number" ? rating.toFixed(1) : rating;

    const formattedEnrolled =
      typeof enrolledCount === "number"
        ? enrolledCount.toLocaleString()
        : enrolledCount;

    return (
      <motion.div
        ref={ref}
        initial="rest"
        animate="rest"
        whileHover={animate ? "hover" : undefined}
        whileTap={animate ? "tap" : undefined}
        transition={SPRING}
        variants={animate ? cardVariants : undefined}
        onClick={onClick}
        style={{
          fontFamily: '"Plus Jakarta Sans", "Poppins", -apple-system, sans-serif',
          ...style,
        }}
        className={cn(
          "group relative w-full max-w-[380px] select-none rounded-[24px] bg-[#FFFFFF] border border-[#E2E4EE] overflow-hidden shadow-[0_4px_20px_rgba(11,18,47,0.05),0_1px_3px_rgba(11,18,47,0.03)] hover:shadow-[0_20px_42px_rgba(11,18,47,0.11)] transition-shadow duration-300 flex flex-col cursor-pointer",
          className,
        )}
        {...props}
      >
        {/* ================================================================= */}
        {/* 1. TOP COVER MEDIA with floating pill badges                     */}
        {/* ================================================================= */}
        <div className="relative h-[185px] w-full overflow-hidden bg-[#0B122F]">
          <motion.div
            variants={animate ? coverVariants : undefined}
            transition={SPRING}
            className="h-full w-full"
          >
            {cover ? (
              <img
                src={cover}
                alt={coverAlt || title}
                draggable={false}
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
                }}
              />
            )}
          </motion.div>

          {/* Vignette overlay for badge legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/35 pointer-events-none" />

          {/* Floating Pill Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
            {/* Left Pill: Level + Category */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {level && (
                <span className="bg-[#0B122F]/85 backdrop-blur-md text-[#FFFFFF] text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-sm tracking-wide">
                  {level}
                </span>
              )}
              {category && (
                <span className="bg-[#FFFFFF]/95 backdrop-blur-md text-[#0B122F] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                  {category}
                </span>
              )}
            </div>

            {/* Right Pill: Status */}
            {statusBadge && (
              <span
                style={{
                  backgroundColor: statusBadge.bg,
                  color: statusBadge.color,
                }}
                className="text-[11px] font-extrabold px-3 py-1 rounded-full border border-black/5 shadow-sm tracking-wide"
              >
                {statusBadge.label}
              </span>
            )}
          </div>

          {/* Bottom-right duration on media */}
          {duration && (
            <div className="absolute bottom-5 right-3.5 flex items-center gap-1 bg-[#0B122F]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-10 border border-white/10 shadow-sm">
              <Clock size={11} className="text-[#38BDF8]" />
              <span>{duration}</span>
            </div>
          )}

          {/* S-Curved Folder Notch (Clean White Bridge) */}
          <div className="absolute bottom-[-1px] left-[-1px] right-[-1px] h-[32px] z-10 pointer-events-none">
            <svg
              viewBox="0 0 400 32"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full block"
            >
              <path
                d="M0,32 V10 C0,4.5 4.5,0 10,0 H160 C175,0 185,18 200,22 C208,24 216,24 228,24 H390 C395.5,24 400,27.5 400,32 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. WHITE CARD BODY: Generous, airy padding & clear hierarchy      */}
        {/* ================================================================= */}
        <div className="relative bg-[#FFFFFF] px-6 pb-6 pt-2 flex-1 flex flex-col justify-between">
          <div>
            {/* Course Title */}
            <h3
              title={title}
              className="text-[#0B122F] text-[17.5px] font-extrabold leading-[1.32] tracking-[-0.02em] mb-3 line-clamp-2 min-h-[46px] group-hover:text-[#304FE8] transition-colors duration-200"
            >
              {title}
            </h3>

            {/* Instructor Profile: Circle Frame Avatar + Verified Credentials */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#E2E4EE] bg-[#F4F7FE] flex-shrink-0 shadow-[0_2px_8px_rgba(11,18,47,0.08)]">
                {instructorAvatar ? (
                  <img
                    src={instructorAvatar}
                    alt={instructor}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[12px] font-black text-[#304FE8] bg-[#EEF2FF]">
                    {initials}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[#0B122F] text-[13.5px] font-bold truncate leading-tight">
                  {instructor}
                </div>
                {instructorRole && (
                  <div className="text-[#64748B] text-[11.5px] font-medium truncate mt-0.5">
                    {instructorRole}
                  </div>
                )}
              </div>
            </div>

            {/* Optional Description (only shown if explicitly provided) */}
            {description && (
              <p className="text-[#5A6180] text-[12.5px] leading-[1.55] line-clamp-2 mb-4">
                {description}
              </p>
            )}

            {/* Clean Divider Line */}
            <div className="border-t border-[#F1F3F9] my-3.5" />

            {/* Rating & Enrolled Learners Row */}
            <div className="flex items-center justify-between py-1 mb-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FEF3C7]">
                  <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                </div>
                <span className="text-[#0B122F] text-[14px] font-black tracking-tight">
                  {formattedRating}
                </span>
                <span className="text-[#64748B] text-[12px] font-medium">
                  ({ratingCount})
                </span>
              </div>

              {/* Enrolled Count */}
              <div className="flex items-center gap-1.5 text-[#64748B] text-[12px] font-semibold">
                <Users size={13} className="text-[#64748B]" />
                <span>{formattedEnrolled} enrolled</span>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* 3. INTEGRATED PILL ACTION BUTTONS (Inside White Section)         */}
          {/* =============================================================== */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {/* View Course Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onViewCourse?.();
              }}
              className="w-full py-2.5 px-4 min-h-[42px] rounded-full bg-[#F8FAFC] border-[1.5px] border-[#E2E4EE] text-[#0B122F] text-[13px] font-bold hover:bg-[#FFFFFF] hover:border-[#CBD5E1] hover:shadow-[0_4px_12px_rgba(11,18,47,0.06)] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
            >
              <span>View course</span>
            </button>

            {/* Enroll / Enrolled Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleEnroll?.();
              }}
              className={cn(
                "w-full py-2.5 px-4 min-h-[42px] rounded-full text-[13px] font-bold active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm",
                isEnrolled
                  ? "bg-[#E6F7ED] text-[#15803D] border-[1.5px] border-[#BBF7D0] hover:bg-[#DCFCE7]"
                  : "bg-[#304FE8] text-[#FFFFFF] hover:bg-[#2640C2] hover:shadow-[0_6px_16px_rgba(48,79,232,0.32)]",
              )}
            >
              {isEnrolled ? (
                <>
                  <Check size={14} strokeWidth={2.5} />
                  <span>Enrolled</span>
                </>
              ) : (
                <>
                  <span>Enroll</span>
                  <ArrowRight size={13} />
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    );
  },
);

export default FolderCard;

export { FolderCard as Component };
