// Course Content Service for Video, Text, PDF, and Assignment materials

const INITIAL_COURSE_MATERIALS = {
  'Automotive Diagnostic Specialist & OBD-II Mastery': [
    {
      id: 'mat-1',
      type: 'video',
      title: 'Masterclass: Dual-Trace Oscilloscope Sensor Synchronization',
      duration: '38 min',
      instructorName: 'Kenji Takahashi',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // or placeholder embed
      description: 'Hands-on breakdown of crank vs cam position sensor waveforms on Toyota 2.5L Atkinson cycle hybrid engines under 2,500 RPM dynamic load.',
      uploadedAt: 'Nov 18, 2026',
      badge: '4K Workshop Studio'
    },
    {
      id: 'mat-2',
      type: 'pdf',
      title: 'JIS D 1601: Automotive Electronic Diagnostics & Fault Code Matrix',
      fileName: 'JIS_D_1601_Diagnostic_Standard_2026.pdf',
      fileSize: '4.8 MB',
      pageCount: '34 pages',
      instructorName: 'Kenji Takahashi',
      description: 'Official Ministry of Health, Labour & Welfare (MHLW) diagnostic tolerance tables and CAN FD oscilloscope signal standard voltage limits.',
      uploadedAt: 'Nov 15, 2026',
      badge: 'Official JIS PDF'
    },
    {
      id: 'mat-3',
      type: 'text',
      title: 'High-Voltage Isolation Fault Troubleshooting & Safety Interlocks',
      readTime: '12 min read',
      instructorName: 'Kenji Takahashi',
      content: `## High-Voltage Safety Protocol & PPE
Before servicing high-voltage hybrid or electric vehicle powertrain components:
1. Disconnect the manual service disconnect plug (MSD) and secure in a locked lockout-tagout (LOTO) container.
2. Verify zero potential voltage across inverter busbars using a CAT IV 1000V certified multimeter with Class 0 (1,000V rated) insulating gloves.
3. Allow inverter smoothing capacitor discharge time (minimum 5 minutes; confirm capacitor voltage < 5V DC).

## Oscilloscope Probe Placement
- Connect channel 1 ground clamp directly to engine block chassis ground.
- Probe sensor pin 3 (Signal Out) through a backprobe needle without piercing the weather-pack silicone seal.
- Set timebase to 20ms/div with rising-edge hardware trigger at 2.5V threshold.`,
      uploadedAt: 'Nov 12, 2026',
      badge: 'Theory Guide'
    },
    {
      id: 'mat-4',
      type: 'assignment',
      title: 'Capstone 03: 4-Stroke Engine Disassembly & ECU Sensor Calibration',
      dueDate: 'Friday, Nov 28, 2026 · 11:59 PM',
      instructorName: 'Kenji Takahashi',
      description: 'Perform complete cylinder head teardown, valve clearance adjustment, timing chain alignment, and OBD-II live sensor data logging according to JIS D 1601 standards.',
      jisStandard: 'JIS D 1601 / ISO 14229',
      badge: 'JIS Capstone'
    }
  ],
  'Commercial HVAC & Inverter Heat Pump Systems': [
    {
      id: 'mat-hvac-1',
      type: 'video',
      title: 'Deep Vacuum Evacuation Under 300 Microns & Nitrogen Decay Testing',
      duration: '42 min',
      instructorName: 'Kenji Takahashi',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Demonstrating 2-stage rotary vane vacuum pump operation, electronic micron gauge stabilization, and triple evacuation techniques on commercial variable refrigerant flow (VRF) systems.',
      uploadedAt: 'Nov 19, 2026',
      badge: 'Studio Stream'
    },
    {
      id: 'mat-hvac-2',
      type: 'pdf',
      title: 'JIS B 8607: Refrigerant Pipe Flare Connection & Pressure Standards',
      fileName: 'JIS_B_8607_Commercial_HVAC_Manual.pdf',
      fileSize: '3.6 MB',
      pageCount: '28 pages',
      instructorName: 'Kenji Takahashi',
      description: 'Approved torque ratings for R-410A and R-32 flared copper fittings, nitrogen purge brazing pressure charts, and standing pressure decay rules.',
      uploadedAt: 'Nov 16, 2026',
      badge: 'Technical Manual'
    },
    {
      id: 'mat-hvac-3',
      type: 'text',
      title: 'Inverter Compressor DC Voltage Vector Control & Inverter Board Diagnosis',
      readTime: '15 min read',
      instructorName: 'Kenji Takahashi',
      content: `## Inverter Variable Speed Compressor Diagnostics
Modern heat pump systems utilize 3-phase permanent magnet synchronous motors (PMSM) powered by an intelligent power module (IPM).

### Testing Procedure for IPM Transistors:
1. Discharge electrolytic DC filter capacitors (> 380V DC).
2. Measure resistance across U-V, V-W, and W-U terminals using multimeter diode test mode.
3. Reverse probe leads and confirm symmetric bias drop (0.45V - 0.55V). Unequal drop indicates damaged IGBT gate driver.`,
      uploadedAt: 'Nov 14, 2026',
      badge: 'Diagnostic Guide'
    }
  ],
  'Hydraulic Pipework & JIS Low-Hydrogen Welding': [
    {
      id: 'mat-weld-1',
      type: 'video',
      title: 'JIS Z 3801 3G Vertical-Up Root Pass with GTAW Backing',
      duration: '35 min',
      instructorName: 'Kenji Takahashi',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Ultra high-definition macro welding arc camera footage demonstrating puddle control, keyhole maintenance, and Argon root shielding.',
      uploadedAt: 'Nov 17, 2026',
      badge: 'Macro Arc 4K'
    },
    {
      id: 'mat-weld-2',
      type: 'pdf',
      title: 'Radiographic Non-Destructive Weld Inspection Acceptance Criteria',
      fileName: 'JIS_Z_3104_Radiographic_Weld_Code.pdf',
      fileSize: '6.2 MB',
      pageCount: '46 pages',
      instructorName: 'Kenji Takahashi',
      description: 'X-Ray defect limits, porosity classifications, lack of side fusion standards, and ultrasonic shear wave calibration parameters.',
      uploadedAt: 'Nov 10, 2026',
      badge: 'JIS Blueprint'
    }
  ]
};

export const courseContentService = {
  getMaterialsByCourse: (courseTitle) => {
    try {
      const stored = localStorage.getItem('samurai_course_materials');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[courseTitle]) return parsed[courseTitle];
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_COURSE_MATERIALS[courseTitle] || [];
  },

  getAllMaterials: () => {
    try {
      const stored = localStorage.getItem('samurai_course_materials');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_COURSE_MATERIALS;
  },

  addMaterial: (courseTitle, material) => {
    const all = courseContentService.getAllMaterials();
    const courseList = all[courseTitle] || [];

    const newMaterial = {
      id: `mat-${Date.now()}`,
      instructorName: 'Kenji Takahashi',
      uploadedAt: 'Just now',
      ...material
    };

    all[courseTitle] = [newMaterial, ...courseList];
    try {
      localStorage.setItem('samurai_course_materials', JSON.stringify(all));
    } catch (e) {
      console.error(e);
    }
    return newMaterial;
  },

  deleteMaterial: (courseTitle, materialId) => {
    const all = courseContentService.getAllMaterials();
    if (!all[courseTitle]) return;
    all[courseTitle] = all[courseTitle].filter((m) => m.id !== materialId);
    try {
      localStorage.setItem('samurai_course_materials', JSON.stringify(all));
    } catch (e) {
      console.error(e);
    }
  }
};
