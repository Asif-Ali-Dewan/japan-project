import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Filter,
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle2,
  X,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Layers,
  Check,
  Tag,
  BarChart2,
  Compass,
  Cpu,
  Terminal,
  Shield,
  Palette,
  Briefcase,
  Coins,
  Wrench,
  Zap,
  Hammer
} from 'lucide-react';

const allCategoriesList = [
  { id: 'All', label: 'All Trades', icon: Compass },
  { id: 'Mechanical & Auto', label: 'Mechanical & Auto', icon: Wrench },
  { id: 'Electrical & HVAC', label: 'Electrical & HVAC', icon: Zap },
  { id: 'Construction & Finishing', label: 'Construction & Finishing', icon: Hammer },
  { id: 'Welding & Piping', label: 'Welding & Piping', icon: Layers },
];

const instructorAvatars = {
  'Kenji Takahashi': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
  'Hiroshi Sato': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  'Daiki Watanabe': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80',
  'Takeshi Mori': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80',
  'Kazuki Tanaka': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80',
  'Ryota Suzuki': 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80',
  'Yuki Matsuoka': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
  'Sora Yamamoto': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  'Kenzo Honda': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
  'Shinjiro Inoue': 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=160&q=80',
};

const initialCourses = [
  {
    id: 'plumbing',
    title: 'Plumbing Systems & Hydraulic Pipework',
    category: 'Welding & Piping',
    instructor: 'Kenji Takahashi',
    instructorRole: 'Master Licensed Plumber & Inspector',
    weeks: 10,
    duration: '10 weeks',
    level: 'Beginner to Pro',
    status: 'Enrolled',
    enrolledCount: 1240,
    rating: 4.93,
    ratingCount: 384,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=700&q=80',
    description: 'Master commercial & residential water supply, drainage venting, copper pipe soldering, PEX installations, leak diagnostics, and sanitary code standards.',
    whatYoullLearn: [
      'Install PEX & copper domestic water supply piping',
      'Assemble Drain-Waste-Vent (DWV) systems with correct slope & venting',
      'Perform lead-free soldering, brazing, and pipe joint sealing',
      'Execute hydrostatic pressure testing and valve maintenance'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Water Supply Systems & PEX Installation' },
      { module: 'Module 2', title: 'Drain-Waste-Vent (DWV) Architecture' },
      { module: 'Module 3', title: 'Copper Pipe Soldering & Brazing' },
      { module: 'Module 4', title: 'Pressure Testing & Valve Assemblies' },
      { module: 'Module 5', title: 'Water Heaters & Fixture Rough-Ins' },
      { module: 'Module 6', title: 'Commercial Blueprint Reading & Capstone Project' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Installation & Repair',
    category: 'Electrical & HVAC',
    instructor: 'Hiroshi Sato',
    instructorRole: 'Chief Electrical Engineer & Master Electrician',
    weeks: 12,
    duration: '12 weeks',
    level: 'Beginner to Pro',
    status: 'Enrolled',
    enrolledCount: 1680,
    rating: 4.97,
    ratingCount: 512,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
    description: 'Master residential and commercial electrical wiring, circuit breakers, conduit bending, 3-phase power distribution, load calculations, and safety codes.',
    whatYoullLearn: [
      'Wire circuit breaker panels, AFCI/GFCI protection, and sub-panels',
      'Bend EMT conduit with precision offsets, saddles, and 90-degree stubs',
      'Calculate electrical load balancing and wire gauges per code',
      'Diagnose faults using digital multimeters and insulation resistance testers'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Electrical Fundamentals & Safety Standards' },
      { module: 'Module 2', title: 'Conduit Bending & Cable Pulling' },
      { module: 'Module 3', title: 'Circuit Breaker Panels & Sub-Panels' },
      { module: 'Module 4', title: '3-Phase Power Distribution & Transformers' },
      { module: 'Module 5', title: 'Troubleshooting, Multimeter Diagnostics & Grounding' },
      { module: 'Module 6', title: 'Complete House Wiring & Commercial Panel Capstone' }
    ]
  },
  {
    id: 'ac-refrigeration',
    title: 'AC & Refrigeration Technician (HVAC)',
    category: 'Electrical & HVAC',
    instructor: 'Daiki Watanabe',
    instructorRole: 'HVAC Master Specialist & EPA Proctor',
    weeks: 10,
    duration: '10 weeks',
    level: 'Intermediate',
    status: 'Enrolled',
    enrolledCount: 1410,
    rating: 4.91,
    ratingCount: 410,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80',
    description: 'Learn thermodynamic refrigeration cycles, split-system AC installations, compressor diagnostics, EPA refrigerant recovery (R-410A/R-32), and inverter systems.',
    whatYoullLearn: [
      'Commission mini-split and central heat pump systems',
      'Evacuate systems down to sub-500 microns and perform leak testing',
      'Diagnose inverter compressors, TXVs, and electrical contactors',
      'Balance airflow and calculate CFM across duct networks'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Thermodynamics & Refrigeration Cycles' },
      { module: 'Module 2', title: 'Split-Unit AC & Inverter Installation' },
      { module: 'Module 3', title: 'Refrigerant Charging & Recovery Procedures' },
      { module: 'Module 4', title: 'Compressor & Heat Pump Troubleshooting' },
      { module: 'Module 5', title: 'Ductwork Design & Airflow Balancing' },
      { module: 'Module 6', title: 'Commercial Chiller & HVAC Maintenance Capstone' }
    ]
  },
  {
    id: 'welding',
    title: 'Welding & Metal Fabrication',
    category: 'Welding & Piping',
    instructor: 'Takeshi Mori',
    instructorRole: 'AWS Certified Welding Inspector & Master Fabricator',
    weeks: 12,
    duration: '12 weeks',
    level: 'Beginner to Pro',
    status: 'Available',
    enrolledCount: 1160,
    rating: 4.95,
    ratingCount: 395,
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80',
    description: 'Master Shielded Metal Arc (SMAW/Stick), MIG (GMAW), and TIG (GTAW) welding. Learn oxy-fuel cutting, blueprint symbols, joint preparation, and weld quality inspection.',
    whatYoullLearn: [
      'Produce code-compliant welds across flat, horizontal, vertical, and overhead positions',
      'TIG weld thin-gauge stainless steel and aluminum with shielding gas regulation',
      'Interpret structural welding blueprints, weld symbols, and tolerances',
      'Perform visual inspection and non-destructive testing on critical joints'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Welding Safety, Equipment & Metallurgy' },
      { module: 'Module 2', title: 'Shielded Metal Arc Welding (SMAW / Stick)' },
      { module: 'Module 3', title: 'MIG / GMAW Semi-Automatic Welding' },
      { module: 'Module 4', title: 'TIG / GTAW Precision Welding on Stainless Steel' },
      { module: 'Module 5', title: 'Blueprint Welding Symbols & Joint Fit-Up' },
      { module: 'Module 6', title: 'Structural Steel Joint Fabrication Capstone' }
    ]
  },
  {
    id: 'carpentry',
    title: 'Carpentry & Architectural Woodworking',
    category: 'Construction & Finishing',
    instructor: 'Kazuki Tanaka',
    instructorRole: 'Traditional Miyadaiku Carpenter & Master Builder',
    weeks: 8,
    duration: '8 weeks',
    level: 'Beginner',
    status: 'Available',
    enrolledCount: 980,
    rating: 4.89,
    ratingCount: 290,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    description: 'From timber framing and wall stud layouts to fine finish carpentry, cabinetry joints, roof truss assembly, and Japanese joinery techniques.',
    whatYoullLearn: [
      'Execute platform framing for floors, walls, headers, and rough openings',
      'Calculate roof rafters, pitch angles, and structural truss assemblies',
      'Craft mortise-and-tenon and dovetail joinery with hand chisels and planes',
      'Install interior doors, casings, baseboards, and architectural moldings'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Hand & Power Tool Safety and Precision Measuring' },
      { module: 'Module 2', title: 'Timber Wall Framing & Subfloor Assemblies' },
      { module: 'Module 3', title: 'Roof Truss Construction & Pitch Calculations' },
      { module: 'Module 4', title: 'Cabinetry, Dado Joints & Precision Milling' },
      { module: 'Module 5', title: 'Doors, Windows & Architectural Trim Installation' },
      { module: 'Module 6', title: 'Full Wood Frame Structure Capstone Project' }
    ]
  },
  {
    id: 'masonry',
    title: 'Masonry & Bricklaying',
    category: 'Construction & Finishing',
    instructor: 'Ryota Suzuki',
    instructorRole: 'Senior Masonry Supervisor',
    weeks: 8,
    duration: '8 weeks',
    level: 'Beginner',
    status: 'Available',
    enrolledCount: 820,
    rating: 4.88,
    ratingCount: 245,
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80',
    description: 'Master mortar mixing ratios, brick bonding patterns, cinder block laying, concrete foundation pouring, stone veneer, and structural reinforcement.',
    whatYoullLearn: [
      'Mix consistent mortar batches (Type M, S, N) for varying structural loads',
      'Lay plumb, level, and true brick leads, courses, and corner returns',
      'Construct concrete masonry unit (CMU) walls with rebar grout cells',
      'Install weep screeds, flashing, and moisture barriers'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Mortar Chemistry, Consistency & Trowel Skills' },
      { module: 'Module 2', title: 'Brick Bonds: Running, Flemish & English Patterns' },
      { module: 'Module 3', title: 'Concrete Block (CMU) Wall Construction' },
      { module: 'Module 4', title: 'Rebar Placement & Concrete Pouring' },
      { module: 'Module 5', title: 'Retaining Walls, Arches & Moisture Barriers' },
      { module: 'Module 6', title: 'Architectural Masonry Façade Capstone' }
    ]
  },
  {
    id: 'automotive',
    title: 'Automotive Mechanic & Engine Diagnostics',
    category: 'Mechanical & Auto',
    instructor: 'Yuki Matsuoka',
    instructorRole: 'Toyota Master Diagnostic Technician & ASE Lead',
    weeks: 12,
    duration: '12 weeks',
    level: 'Beginner to Pro',
    status: 'Enrolled',
    enrolledCount: 1530,
    rating: 4.96,
    ratingCount: 480,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    description: 'Diagnose internal combustion engines, transmissions, brake systems, suspension geometry, hybrid electric drivetrains, and modern ECU scan tools.',
    whatYoullLearn: [
      'Disassemble, inspect, measure, and rebuild 4-stroke automotive engines',
      'Diagnose CAN-bus communication faults and engine sensors with oscilloscopes',
      'Overhaul ABS hydraulic modulators, disc rotors, and master cylinders',
      'Align suspension geometry: camber, caster, and toe-in adjustments'
    ],
    syllabus: [
      { module: 'Module 1', title: '4-Stroke Engine Disassembly & Overhaul' },
      { module: 'Module 2', title: 'OBD-II Computer Diagnostics & Sensor Testing' },
      { module: 'Module 3', title: 'Hydraulic Brake Systems, ABS & Rotors' },
      { module: 'Module 4', title: 'Suspension Alignment, Steering & Struts' },
      { module: 'Module 5', title: 'Automatic & Manual Transmission Servicing' },
      { module: 'Module 6', title: 'Complete Vehicle Inspection & Tune-Up Capstone' }
    ]
  },
  {
    id: 'painting',
    title: 'Painting & Wall Finishing',
    category: 'Construction & Finishing',
    instructor: 'Sora Yamamoto',
    instructorRole: 'Commercial Finishing Contractor',
    weeks: 6,
    duration: '6 weeks',
    level: 'Beginner',
    status: 'Available',
    enrolledCount: 790,
    rating: 4.86,
    ratingCount: 215,
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80',
    description: 'Surface preparation, drywall taping and mudding, airless spray applications, exterior weatherproofing, epoxy floor coatings, and commercial architectural finishes.',
    whatYoullLearn: [
      'Tape, mud, feather, and sand drywall joints to Level 5 pristine finish',
      'Operate and clean commercial airless spray rigs without clogging or overspray',
      'Select and apply moisture primers, elastomeric paints, and industrial stains',
      'Mix and spread 2-part epoxy garage and workshop floor systems'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Surface Prep: Sanding, Patching & Priming' },
      { module: 'Module 2', title: 'Drywall Taping, Joint Compound & Level 5 Finish' },
      { module: 'Module 3', title: 'Brush, Roller & Airless Spray Gun Techniques' },
      { module: 'Module 4', title: 'Exterior Waterproofing & Weather Coatings' },
      { module: 'Module 5', title: 'Epoxy Floor Systems & Decorative Textures' },
      { module: 'Module 6', title: 'Multi-Room Residential Finishing Capstone' }
    ]
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle Mechanic & Small Engine Repair',
    category: 'Mechanical & Auto',
    instructor: 'Kenzo Honda',
    instructorRole: 'Honda Certified Powersports Lead',
    weeks: 8,
    duration: '8 weeks',
    level: 'Beginner',
    status: 'Available',
    enrolledCount: 910,
    rating: 4.92,
    ratingCount: 275,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80',
    description: 'Master 2-stroke and 4-stroke motorcycle engines, carburetor tuning, electronic fuel injection (EFI), clutch assemblies, chain drive systems, and electrical harness wiring.',
    whatYoullLearn: [
      'Disassemble and tune multi-cylinder motorcycle engines and valvetrains',
      'Synchronize multi-carburetor racks and map EFI fuel injection tables',
      'Replace wet multi-plate clutch packs and inspect constant-mesh gearboxes',
      'Service inverted telescopic forks, monoshocks, and brake calipers'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Small Engine Architecture & Compression Testing' },
      { module: 'Module 2', title: 'Carburetor Rebuilding & EFI Tuning' },
      { module: 'Module 3', title: 'Motorcycle Clutch, Gearbox & Final Drive' },
      { module: 'Module 4', title: 'Braking, Suspension & Fork Seal Servicing' },
      { module: 'Module 5', title: 'Motorcycle Electrical Harness & Stator Testing' },
      { module: 'Module 6', title: 'Complete Motorcycle Engine Rebuild Capstone' }
    ]
  },
  {
    id: 'pipe-fitting',
    title: 'Pipe Fitting & Maintenance',
    category: 'Welding & Piping',
    instructor: 'Shinjiro Inoue',
    instructorRole: 'Industrial Plant Pipeline Lead',
    weeks: 10,
    duration: '10 weeks',
    level: 'Intermediate',
    status: 'Available',
    enrolledCount: 1020,
    rating: 4.94,
    ratingCount: 310,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
    description: 'Industrial pipe layout, flange alignment, threaded and welded piping systems, valve installation, hydrostatic pressure testing, and plant hydraulic maintenance.',
    whatYoullLearn: [
      'Calculate pipe takeoffs, rolling offsets, and fitting allowances',
      'Cut, thread, and groove Schedule 40 & Schedule 80 carbon steel pipes',
      'Bolt flanges with torque sequences and install spiral-wound gaskets',
      'Perform hydrostatic leak tests up to 1,000 PSI safely and accurately'
    ],
    syllabus: [
      { module: 'Module 1', title: 'Industrial Pipe Materials, Schedules & Standards' },
      { module: 'Module 2', title: 'Pipe Cutting, Threading, Grooving & Beveling' },
      { module: 'Module 3', title: 'Flange Alignment & Gasket Bolting Procedures' },
      { module: 'Module 4', title: 'Hydraulic & Pneumatic Plant System Maintenance' },
      { module: 'Module 5', title: 'Hydrostatic Leak Testing & High-Pressure Safety' },
      { module: 'Module 6', title: 'Industrial Process Piping Rig Capstone' }
    ]
  }
];

// Custom True Frosted Glass Dropdown Component
function GlassFilterDropdown({
  label,
  value,
  options,
  onChange,
  isOpen,
  onToggle,
  onClose,
  icon: Icon
}) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const activeLabel = options.find((o) => o.value === value)?.label || value;
  const isSelectedNonDefault = value !== 'All';

  return (
    <div ref={ref} style={{ position: 'relative', zIndex: isOpen ? 150 : 1 }}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: 'var(--r-pill)',
          background: isSelectedNonDefault
            ? 'linear-gradient(135deg, rgba(48, 79, 232, 0.12) 0%, rgba(48, 79, 232, 0.05) 100%)'
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: isSelectedNonDefault ? 'var(--blue)' : 'rgba(226, 228, 238, 0.9)',
          color: isSelectedNonDefault ? 'var(--blue)' : 'var(--navy)',
          fontSize: '13px',
          fontWeight: isSelectedNonDefault ? '700' : '600',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: isOpen
            ? '0 0 0 3px rgba(48, 79, 232, 0.14), 0 4px 12px rgba(11, 18, 47, 0.06)'
            : '0 2px 8px rgba(11, 18, 47, 0.03)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          if (!isOpen && !isSelectedNonDefault) {
            e.currentTarget.style.borderColor = 'var(--blue)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(48, 79, 232, 0.08)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen && !isSelectedNonDefault) {
            e.currentTarget.style.borderColor = 'rgba(226, 228, 238, 0.9)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 18, 47, 0.03)';
          }
        }}
      >
        {Icon && <Icon size={14} color={isSelectedNonDefault ? 'var(--blue)' : 'var(--muted)'} />}
        <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {label}:
        </span>
        <span>{activeLabel}</span>
        <ChevronDown
          size={14}
          color={isSelectedNonDefault ? 'var(--blue)' : 'var(--muted)'}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </button>

      {/* High-End Frosted Glass Floating Menu with High Z-Index so it never sits behind cards */}
      {isOpen && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            minWidth: '220px',
            maxHeight: '320px',
            overflowY: 'auto',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(32px) saturate(210%)',
            WebkitBackdropFilter: 'blur(32px) saturate(210%)',
            border: '1px solid rgba(226, 228, 238, 0.95)',
            borderRadius: '16px',
            boxShadow:
              '0 24px 48px -10px rgba(11, 18, 47, 0.22), 0 8px 24px -4px rgba(48, 79, 232, 0.1), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)',
            padding: '6px',
            zIndex: 2500, // Highest z-index ensures it ALWAYS renders on top of course cards
            animation: 'dropdownFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {options.map((opt) => {
            const isOptSelected = opt.value === value;
            return (
              <button
                type="button"
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: isOptSelected ? 'rgba(48, 79, 232, 0.1)' : 'transparent',
                  color: isOptSelected ? 'var(--blue)' : 'var(--navy)',
                  fontSize: '13px',
                  fontWeight: isOptSelected ? '700' : '500',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isOptSelected) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isOptSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>{opt.label}</span>
                {isOptSelected && <Check size={14} color="var(--blue)" strokeWidth={2.5} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ExploreCoursesView() {
  const [courses, setCourses] = useState(initialCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Active Dropdown Tracker: 'category' | 'duration' | 'level' | 'status' | null
  const [openDropdown, setOpenDropdown] = useState(null);

  // Modal State for "View Course"
  const [viewingCourse, setViewingCourse] = useState(null);

  // Enrollment Handler
  const handleToggleEnroll = (courseId) => {
    setCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const newStatus = c.status === 'Enrolled' ? 'Available' : 'Enrolled';
          return {
            ...c,
            status: newStatus,
            enrolledCount: newStatus === 'Enrolled' ? c.enrolledCount + 1 : c.enrolledCount - 1
          };
        }
        return c;
      })
    );

    if (viewingCourse && viewingCourse.id === courseId) {
      setViewingCourse((prev) => ({
        ...prev,
        status: prev.status === 'Enrolled' ? 'Available' : 'Enrolled',
        enrolledCount: prev.status === 'Enrolled' ? prev.enrolledCount - 1 : prev.enrolledCount + 1
      }));
    }
  };

  // Filter Logic
  const filteredCourses = courses.filter((c) => {
    // 1. Search filter
    const matchesSearch =
      searchQuery.trim() === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Category filter
    const matchesCategory =
      selectedCategory === 'All' || c.category.toLowerCase() === selectedCategory.toLowerCase();

    // 3. Duration filter
    let matchesDuration = true;
    if (selectedDuration === '< 4 weeks') {
      matchesDuration = c.weeks < 4;
    } else if (selectedDuration === '4-8 weeks') {
      matchesDuration = c.weeks >= 4 && c.weeks <= 8;
    } else if (selectedDuration === '8+ weeks') {
      matchesDuration = c.weeks > 8;
    }

    // 4. Level filter
    const matchesLevel =
      selectedLevel === 'All' || c.level.toLowerCase() === selectedLevel.toLowerCase();

    // 5. Status filter
    const matchesStatus =
      selectedStatus === 'All' || c.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesCategory && matchesDuration && matchesLevel && matchesStatus;
  });

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All' ||
    selectedDuration !== 'All' ||
    selectedLevel !== 'All' ||
    selectedStatus !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedDuration('All');
    setSelectedLevel('All');
    setSelectedStatus('All');
    setOpenDropdown(null);
  };

  // Status Badge Colors
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Enrolled':
        return { bg: 'var(--mint)', color: 'var(--green)', label: 'Enrolled' };
      case 'In Progress':
        return { bg: 'var(--lav)', color: 'var(--blue)', label: 'In Progress' };
      case 'Complete':
        return { bg: 'var(--cream)', color: '#8A5300', label: 'Complete' };
      case 'Available':
      default:
        return { bg: 'var(--surface)', color: 'var(--muted)', label: 'Available' };
    }
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
      {/* 1. Header Section: Course Catalogue */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: '1.2', margin: 0 }}>
              Course Catalogue
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: 'var(--navy)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                padding: '7px 16px',
                borderRadius: 'var(--r-pill)',
                border: '1px solid rgba(226, 228, 238, 0.9)',
                boxShadow: '0 2px 8px rgba(11, 18, 47, 0.04)',
              }}
            >
              Showing {filteredCourses.length} of {courses.length} courses
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                style={{
                  background: 'rgba(254, 226, 226, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  color: '#DC2626',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  padding: '7px 14px',
                  borderRadius: 'var(--r-pill)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.18s ease',
                }}
              >
                <span>Clear filters</span>
                <X size={13} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Single-Line Unified Frosted Glass Filter Command Bar */}
      <div
        style={{
          position: 'relative',
          zIndex: 100, // Guarantees dropdowns stay on top of all course cards below
          overflow: 'visible',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          borderRadius: 'var(--r-xl)',
          padding: '12px 18px',
          border: '1px solid rgba(226, 228, 238, 0.95)',
          boxShadow: '0 12px 32px rgba(11, 18, 47, 0.05)',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          {/* 1. Search Bar (Fills remaining space) */}
          <div style={{ position: 'relative', flex: '1 1 220px', minWidth: '180px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses by name, topic..."
              className="input-field"
              style={{
                paddingLeft: '38px',
                paddingRight: searchQuery ? '36px' : '14px',
                height: '40px',
                fontSize: '13px',
                borderRadius: 'var(--r-pill)',
                backgroundColor: 'var(--surface)',
                width: '100%',
                border: '1px solid var(--line)',
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  padding: '2px',
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* 2. Category / Field Glass Dropdown (Replacing horizontal field) */}
          <GlassFilterDropdown
            label="Field"
            value={selectedCategory}
            options={allCategoriesList.map((c) => ({ value: c.id, label: c.label }))}
            onChange={(val) => setSelectedCategory(val)}
            isOpen={openDropdown === 'category'}
            onToggle={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
            onClose={() => setOpenDropdown(null)}
            icon={Compass}
          />

          {/* 3. Duration Glass Dropdown */}
          <GlassFilterDropdown
            label="Duration"
            value={selectedDuration}
            options={[
              { value: 'All', label: 'All Durations' },
              { value: '< 4 weeks', label: '< 4 weeks' },
              { value: '4-8 weeks', label: '4–8 weeks' },
              { value: '8+ weeks', label: '8+ weeks' },
            ]}
            onChange={(val) => setSelectedDuration(val)}
            isOpen={openDropdown === 'duration'}
            onToggle={() => setOpenDropdown(openDropdown === 'duration' ? null : 'duration')}
            onClose={() => setOpenDropdown(null)}
            icon={Clock}
          />

          {/* 4. Level Glass Dropdown */}
          <GlassFilterDropdown
            label="Level"
            value={selectedLevel}
            options={[
              { value: 'All', label: 'All Levels' },
              { value: 'Beginner', label: 'Beginner' },
              { value: 'Intermediate', label: 'Intermediate' },
              { value: 'Advanced', label: 'Advanced' },
            ]}
            onChange={(val) => setSelectedLevel(val)}
            isOpen={openDropdown === 'level'}
            onToggle={() => setOpenDropdown(openDropdown === 'level' ? null : 'level')}
            onClose={() => setOpenDropdown(null)}
            icon={GraduationCap}
          />

          {/* 5. Status Glass Dropdown */}
          <GlassFilterDropdown
            label="Status"
            value={selectedStatus}
            options={[
              { value: 'All', label: 'All Statuses' },
              { value: 'Available', label: 'Available' },
              { value: 'In Progress', label: 'In Progress' },
              { value: 'Enrolled', label: 'Enrolled' },
              { value: 'Complete', label: 'Completed' },
            ]}
            onChange={(val) => setSelectedStatus(val)}
            isOpen={openDropdown === 'status'}
            onToggle={() => setOpenDropdown(openDropdown === 'status' ? null : 'status')}
            onClose={() => setOpenDropdown(null)}
            icon={Tag}
          />
        </div>
      </div>

      {/* 3. Course Cards Grid: Lower zIndex so dropdowns cleanly float above */}
      {filteredCourses.length === 0 ? (
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--r-xl)',
            padding: '60px 20px',
            textAlign: 'center',
            border: '1px solid var(--line)',
          }}
        >
          <BookOpen size={48} color="var(--muted)" style={{ margin: '0 auto 16px auto', opacity: 0.5 }} />
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)' }}>
            No courses match your filter criteria
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '6px', marginBottom: '20px' }}>
            Try expanding your category, duration, or level filters to view available programs.
          </p>
          <button onClick={resetFilters} className="btn btn-secondary">
            Reset all filters
          </button>
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            zIndex: 1, // Crucial: Keeps grid below filter dropdowns (zIndex 100/2500)
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredCourses.map((c) => {
            const statusBadge = getStatusBadge(c.status);
            const isEnrolled = c.status === 'Enrolled';
            const avatarUrl =
              c.instructorAvatar ||
              instructorAvatars[c.instructor] ||
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80';

            return (
              <div
                key={c.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--line)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(11, 18, 47, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 38px rgba(11, 18, 47, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(48, 79, 232, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(11, 18, 47, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--line)';
                }}
                onClick={() => setViewingCourse(c)}
              >
                {/* 1. Media Header with Badges */}
                <div style={{ position: 'relative', height: '180px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={c.image}
                    alt={c.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Subtle vignette gradient for high contrast */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11, 18, 47, 0.35) 0%, rgba(11, 18, 47, 0.08) 40%, rgba(11, 18, 47, 0.55) 100%)',
                    }}
                  />

                  {/* Top-Left Badges: Category & Level */}
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px', zIndex: 2 }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.96)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--navy)',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 12px',
                        borderRadius: 'var(--r-pill)',
                        boxShadow: '0 2px 6px rgba(11, 18, 47, 0.12)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {c.category}
                    </span>

                    <span
                      style={{
                        backgroundColor: 'rgba(11, 18, 47, 0.82)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '4px 11px',
                        borderRadius: 'var(--r-pill)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {c.level}
                    </span>
                  </div>

                  {/* Top-Right Badge: Status */}
                  <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 2 }}>
                    <span
                      style={{
                        backgroundColor: statusBadge.bg,
                        color: statusBadge.color,
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '4px 12px',
                        borderRadius: 'var(--r-pill)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        border: '1px solid rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {statusBadge.label}
                    </span>
                  </div>

                  {/* Bottom-Right Duration */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '14px',
                      color: '#FFFFFF',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      backgroundColor: 'rgba(11, 18, 47, 0.75)',
                      backdropFilter: 'blur(6px)',
                      padding: '3px 10px',
                      borderRadius: 'var(--r-pill)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      zIndex: 2,
                    }}
                  >
                    <Clock size={12} color="#38BDF8" />
                    <span>{c.duration}</span>
                  </div>
                </div>

                {/* 2. Card Body: Generous padding, clean whitespace, and strong hierarchy */}
                <div
                  style={{
                    padding: '24px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  <div>
                    {/* Course Title */}
                    <h3
                      style={{
                        fontSize: '17px',
                        fontWeight: '800',
                        color: 'var(--navy)',
                        lineHeight: '1.35',
                        letterSpacing: '-0.015em',
                        marginBottom: '14px',
                        minHeight: '46px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {c.title}
                    </h3>

                    {/* Instructor Row with Circular Profile Picture */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          border: '2px solid var(--line)',
                          overflow: 'hidden',
                          flexShrink: 0,
                          backgroundColor: 'var(--surface)',
                          boxShadow: '0 2px 6px rgba(11, 18, 47, 0.08)',
                        }}
                      >
                        <img
                          src={avatarUrl}
                          alt={c.instructor}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div
                          style={{
                            fontSize: '13.5px',
                            fontWeight: '700',
                            color: 'var(--navy)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {c.instructor}
                        </div>
                        <div
                          style={{
                            fontSize: '11.5px',
                            color: 'var(--muted)',
                            fontWeight: '500',
                            marginTop: '1px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {c.instructorRole}
                        </div>
                      </div>
                    </div>

                    {/* Rating & Enrolled Stats Bar */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        backgroundColor: 'var(--surface)',
                        borderRadius: '12px',
                        marginBottom: '18px',
                        border: '1px solid rgba(226, 228, 238, 0.7)',
                      }}
                    >
                      {/* Rating with Gold Star */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Star size={15} fill="#F59E0B" color="#F59E0B" />
                        <span style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--navy)' }}>
                          {c.rating}
                        </span>
                        <span style={{ fontSize: '11.5px', color: 'var(--muted)', fontWeight: '500' }}>
                          ({c.ratingCount})
                        </span>
                      </div>

                      {/* Enrolled Students */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--muted)', fontWeight: '600' }}>
                        <Users size={13} color="var(--muted)" />
                        <span>{c.enrolledCount.toLocaleString()} enrolled</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Action Buttons (View course & Enroll) INSIDE the Card */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setViewingCourse(c);
                      }}
                      className="btn btn-secondary"
                      style={{
                        fontSize: '12.5px',
                        padding: '9px 12px',
                        minHeight: '40px',
                        fontWeight: '700',
                        width: '100%',
                        justifyContent: 'center',
                        borderRadius: 'var(--r-pill)',
                      }}
                    >
                      <span>View course</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleEnroll(c.id);
                      }}
                      className={isEnrolled ? 'btn btn-secondary' : 'btn btn-primary'}
                      style={{
                        fontSize: '12.5px',
                        padding: '9px 12px',
                        minHeight: '40px',
                        fontWeight: '700',
                        width: '100%',
                        justifyContent: 'center',
                        borderRadius: 'var(--r-pill)',
                        backgroundColor: isEnrolled ? 'var(--mint)' : 'var(--blue)',
                        color: isEnrolled ? 'var(--green)' : '#FFFFFF',
                        borderColor: isEnrolled ? 'transparent' : 'var(--blue)',
                        boxShadow: isEnrolled ? 'none' : '0 4px 12px rgba(48, 79, 232, 0.25)',
                      }}
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
              </div>
            );
          })}
        </div>
      )}

      {/* 4. VIEW COURSE MODAL: Complete Course Profile */}
      {viewingCourse && (
        <div
          className="modal-overlay"
          onClick={() => setViewingCourse(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1400,
            backgroundColor: 'rgba(11, 18, 47, 0.65)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--r-xl)',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid var(--line)',
              boxShadow: '0 25px 60px rgba(11, 18, 47, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              animation: 'modalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setViewingCourse(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                color: 'var(--navy)',
              }}
            >
              <X size={18} />
            </button>

            {/* Course Image Header */}
            <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
              <img
                src={viewingCourse.image}
                alt={viewingCourse.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(11, 18, 47, 0.2) 0%, rgba(11, 18, 47, 0.8) 100%)',
                }}
              />

              <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span className="badge badge-blue">{viewingCourse.category}</span>
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', color: '#FFFFFF', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: 'var(--r-pill)' }}>
                    {viewingCourse.level}
                  </span>
                  <span style={{ backgroundColor: viewingCourse.status === 'Enrolled' ? 'var(--mint)' : 'rgba(255, 255, 255, 0.9)', color: viewingCourse.status === 'Enrolled' ? 'var(--green)' : 'var(--navy)', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: 'var(--r-pill)' }}>
                    {viewingCourse.status}
                  </span>
                </div>

                <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.2' }}>
                  {viewingCourse.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Meta Stats Bar: Instructor, Duration, Rating, Enrolled */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '14px',
                  padding: '16px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>INSTRUCTOR</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--navy)', marginTop: '2px' }}>
                    {viewingCourse.instructor}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>
                    {viewingCourse.instructorRole}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>DURATION</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--navy)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} color="var(--blue)" />
                    <span>{viewingCourse.duration}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Self-paced & cohort</div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>STUDENT RATING</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--navy)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{viewingCourse.rating} / 5.0</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>({viewingCourse.ratingCount} reviews)</div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '700' }}>ENROLLMENT</div>
                  <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--navy)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={14} color="var(--blue)" />
                    <span>{viewingCourse.enrolledCount.toLocaleString()}</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Verified learners</div>
                </div>
              </div>

              {/* Course Description */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)', marginBottom: '8px' }}>
                  Course Overview
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  {viewingCourse.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)', marginBottom: '12px' }}>
                  What you'll learn
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                  {viewingCourse.whatYoullLearn.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13.5px', color: 'var(--navy)', lineHeight: '1.4' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus / Modules */}
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--navy)', marginBottom: '12px' }}>
                  Syllabus & Curriculum Modules
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {viewingCourse.syllabus.map((s, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--r-md)',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--line)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '800',
                            color: 'var(--blue)',
                            backgroundColor: 'var(--lav)',
                            padding: '3px 8px',
                            borderRadius: 'var(--r-pill)',
                          }}
                        >
                          {s.module}
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--navy)' }}>
                          {s.title}
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: '600' }}>
                        Practical project included
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--line)',
                  marginTop: '10px',
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                    Accredited certificate included
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--navy)' }}>
                    {viewingCourse.status === 'Enrolled' ? 'You are enrolled in this course' : 'Open for immediate enrollment'}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setViewingCourse(null)}
                    className="btn btn-secondary"
                    style={{ fontSize: '13px', padding: '10px 18px' }}
                  >
                    Close
                  </button>

                  <button
                    onClick={() => handleToggleEnroll(viewingCourse.id)}
                    className="btn btn-primary"
                    style={{
                      fontSize: '13.5px',
                      padding: '10px 24px',
                      backgroundColor: viewingCourse.status === 'Enrolled' ? 'var(--mint)' : 'var(--blue)',
                      color: viewingCourse.status === 'Enrolled' ? 'var(--green)' : '#FFFFFF',
                      borderColor: viewingCourse.status === 'Enrolled' ? 'transparent' : 'var(--blue)',
                    }}
                  >
                    {viewingCourse.status === 'Enrolled' ? (
                      <>
                        <Check size={16} strokeWidth={2.5} />
                        <span>Enrolled in Track</span>
                      </>
                    ) : (
                      <>
                        <span>Enroll Course</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
