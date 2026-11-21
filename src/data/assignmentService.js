// Samurai Talent Assignment & Inspection Synchronization Service

const INITIAL_ASSIGNMENTS = [
  {
    id: 'asg-01',
    courseName: 'Automotive Mechanic & Engine Diagnostics',
    assignmentTitle: 'Capstone 03: 4-Stroke Engine Disassembly & ECU Sensor Calibration',
    instructorName: 'Kenji Takahashi',
    instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    taken: false,
    submissionLastDate: 'Friday, Nov 28, 2026 · 11:59 PM',
    description:
      'Perform complete cylinder head teardown, valve clearance adjustment, timing chain alignment, and OBD-II live sensor data logging according to JIS D 1601 standards.',
    jisStandard: 'JIS D 1601 / ISO 14229',
    requiredArtifacts: ['Oscilloscope Capture', 'Telemetry Log (CSV)', 'JIS Inspection Form'],
    submissionDate: null,
    score: null,
    feedback: null,
  },
  {
    id: 'asg-02',
    courseName: 'Commercial HVAC & Heat Pump Technician',
    assignmentTitle: 'Lab 04: R-410A Dual-Split Vacuum Evacuation & Manifold Gauge Charging',
    instructorName: 'Kenji Takahashi',
    instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    taken: false,
    submissionLastDate: 'Monday, Dec 01, 2026 · 11:59 PM',
    description:
      'Perform deep vacuum evacuation down to 300 microns with a digital micron gauge, check flare connections, and charge refrigerant to factory subcooling specifications.',
    jisStandard: 'JIS B 8607 Commercial HVAC',
    requiredArtifacts: ['Micron Log', 'Video Demo', 'Pressure Chart'],
    submissionDate: null,
    score: null,
    feedback: null,
  },
  {
    id: 'asg-03',
    courseName: 'Automotive Mechanic & Engine Diagnostics',
    assignmentTitle: 'Capstone 02: Hydraulic ABS Brake System Bleeding & Rotor Overhaul',
    instructorName: 'Kenji Takahashi',
    instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    taken: true,
    submissionLastDate: 'Nov 12, 2026',
    submissionDate: '2 days ago',
    score: '98.6 / 100',
    description: 'Precision hydraulic line pressure testing and caliper piston rebuild.',
    jisStandard: 'JIS D 2601 Brake Systems',
    feedback: {
      overall:
        'Flawless hydraulic line pressure testing and caliper piston rebuild. The bleeding procedure left zero air pockets and pad clearance met OEM micrometric tolerance.',
      rubric: [
        { category: 'Hydraulic Circuit Safety & Bleeding', score: '30 / 30' },
        { category: 'Torque Specs & Caliper Alignment', score: '25 / 25' },
        { category: 'Rotor Runout Dial Gauge Accuracy', score: '24 / 25' },
        { category: 'Shop Safety & Hazardous Fluid Handling', score: '19.6 / 20' },
      ],
      reviewerNotes: 'Ensure torque wrenches are stored decompressed after final caliper mounting bolt checks.',
    },
  },
  {
    id: 'asg-04',
    courseName: 'Hydraulic Pipework & Plant Welder',
    assignmentTitle: 'Capstone 01: 3G Vertical-Up SMAW & TIG Root Pass on Schedule 40 Pipe',
    instructorName: 'Kenji Takahashi',
    instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    taken: true,
    submissionLastDate: 'Nov 08, 2026',
    submissionDate: '5 days ago',
    score: '99.0 / 100',
    description: 'JIS Z 3801 3G multi-pass root weld and radiographic inspection.',
    jisStandard: 'JIS Z 3801 Pipe Welding',
    feedback: {
      overall:
        'Superb root penetration and uniform bead ripple consistency! Visual inspection and ultrasonic non-destructive testing showed zero undercut or porosity.',
      rubric: [
        { category: 'Bead Uniformity & Penetration', score: '35 / 35' },
        { category: 'Torch Angle & Heat Management', score: '30 / 30' },
        { category: 'Bevel Fit-up & Joint Prep', score: '20 / 20' },
        { category: 'Shop Safety & PPE Adherence', score: '14 / 15' },
      ],
      reviewerNotes: 'Flawless execution. Your tie-in technique between root and hot passes demonstrated master-level heat control.',
    },
  }
];

const INITIAL_SUBMISSIONS = [
  {
    id: 'sub-1',
    assignmentId: 'asg-01',
    studentName: 'Alex Morgan',
    studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-88291',
    courseTitle: 'Automotive Diagnostic Specialist',
    labTitle: 'Lab 04: OBD-II Oscilloscope Sensor Waveform Testing',
    submittedAt: '35m ago',
    status: 'pending',
    notes: 'Uploaded crank/cam synchronization capture and 3-pin Hall effect sensor duty cycle logs under 2,500 RPM.',
    artifacts: [
      { name: 'cam_crank_sync_scope.png', type: 'Oscilloscope Image' },
      { name: 'hall_effect_duty_cycle.csv', type: 'Telemetry Log' },
      { name: 'jis_d1601_checklist.pdf', type: 'Inspection Form' }
    ]
  },
  {
    id: 'sub-2',
    assignmentId: 'asg-02',
    studentName: 'Marcus Vance',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-90142',
    courseTitle: 'Commercial HVAC & Heat Pump Technician',
    labTitle: 'Lab 03: R-410A Deep Vacuum Decay & Micron Evacuation',
    submittedAt: '2h ago',
    status: 'pending',
    notes: 'System evacuated to 240 microns and held for 15 minutes. Standing pressure decay test passed within JIS B 8607 standards.',
    artifacts: [
      { name: 'micron_gauge_holding_decay.mp4', type: 'Video Demo' },
      { name: 'manifold_pressure_log.png', type: 'Sensor Capture' }
    ]
  },
  {
    id: 'sub-3',
    assignmentId: 'asg-04',
    studentName: 'Kenichi Sato',
    studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    apprenticeId: '#ST-78219',
    courseTitle: 'Hydraulic Pipework & Plant Welder',
    labTitle: 'Lab 05: JIS Z 3801 3G Multi-Pass Pipe Root Welding',
    submittedAt: '4h ago',
    status: 'pending',
    notes: 'Completed 6-inch schedule 40 root pass with GTAW (Argon backing gas) and completed fill & cap with E7018 low-hydrogen electrodes.',
    artifacts: [
      { name: 'weld_root_penetration.jpg', type: 'Macro Photo' },
      { name: 'argon_purge_flow_log.pdf', type: 'Shielding Gas Log' }
    ]
  }
];

export const assignmentService = {
  // 1. Get all assignments
  getAssignments: () => {
    try {
      const stored = localStorage.getItem('samurai_assignments');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ASSIGNMENTS;
  },

  // 2. Save assignments
  saveAssignments: (assignments) => {
    try {
      localStorage.setItem('samurai_assignments', JSON.stringify(assignments));
    } catch (e) {
      console.error(e);
    }
  },

  // 3. Instructor creates a new assignment
  createAssignment: (data) => {
    const current = assignmentService.getAssignments();
    const newAssignment = {
      id: `asg-${Date.now()}`,
      courseName: data.courseName || 'Automotive Mechanic & Engine Diagnostics',
      assignmentTitle: data.title,
      instructorName: 'Kenji Takahashi',
      instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
      taken: false,
      submissionLastDate: data.dueDate || 'Friday, Nov 30, 2026 · 11:59 PM',
      description: data.description || 'Complete required practical laboratory procedure and upload verifiable technical evidence.',
      jisStandard: data.jisStandard || 'JIS Industrial Standard',
      requiredArtifacts: data.requiredArtifacts || ['Sensor Log', 'Inspection Checklist'],
      submissionDate: null,
      score: null,
      feedback: null,
    };

    const updated = [newAssignment, ...current];
    assignmentService.saveAssignments(updated);
    return newAssignment;
  },

  // 4. Get all submissions in the instructor queue
  getSubmissions: () => {
    try {
      const stored = localStorage.getItem('samurai_submissions');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_SUBMISSIONS;
  },

  // 5. Save submissions
  saveSubmissions: (submissions) => {
    try {
      localStorage.setItem('samurai_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.error(e);
    }
  },

  // 6. Student submits an assignment
  submitAssignment: (assignmentId, submissionData) => {
    const assignments = assignmentService.getAssignments();
    const updatedAssignments = assignments.map((asg) => {
      if (asg.id === assignmentId) {
        return {
          ...asg,
          taken: true,
          status: 'Awaiting Inspection',
          submissionDate: 'Just now',
          studentNotes: submissionData.notes,
          studentArtifacts: submissionData.artifacts,
        };
      }
      return asg;
    });
    assignmentService.saveAssignments(updatedAssignments);

    // Also queue into instructor inspection queue
    const submissions = assignmentService.getSubmissions();
    const asg = assignments.find((a) => a.id === assignmentId);

    const newSub = {
      id: `sub-${Date.now()}`,
      assignmentId,
      studentName: submissionData.studentName || 'Alex Morgan',
      studentAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      apprenticeId: submissionData.apprenticeId || '#ST-88291',
      courseTitle: asg ? asg.courseName : 'Automotive Diagnostic Specialist',
      labTitle: asg ? asg.assignmentTitle : 'Technical Capstone Inspection',
      submittedAt: 'Just now',
      status: 'pending',
      notes: submissionData.notes || 'Completed lab following standard JIS safety procedures.',
      artifacts: submissionData.artifacts || [
        { name: 'telemetry_log.csv', type: 'Sensor Capture' },
        { name: 'jis_inspection_checklist.pdf', type: 'Checklist' }
      ]
    };

    const updatedSubmissions = [newSub, ...submissions];
    assignmentService.saveSubmissions(updatedSubmissions);
    return newSub;
  },

  // 7. Instructor grades a submission
  gradeSubmission: (submissionId, gradeData) => {
    const submissions = assignmentService.getSubmissions();
    let targetAssignmentId = null;

    const updatedSubmissions = submissions.map((sub) => {
      if (sub.id === submissionId) {
        targetAssignmentId = sub.assignmentId;
        return {
          ...sub,
          status: 'graded',
          grade: gradeData.grade,
          feedback: gradeData.feedback || 'Approved with Master Craftsman digital stamp according to JIS requirements.'
        };
      }
      return sub;
    });
    assignmentService.saveSubmissions(updatedSubmissions);

    // Update assignment in student view
    if (targetAssignmentId) {
      const assignments = assignmentService.getAssignments();
      const updatedAssignments = assignments.map((asg) => {
        if (asg.id === targetAssignmentId) {
          const isDistinction = gradeData.grade.includes('Distinction') || gradeData.grade.includes('Grade A');
          return {
            ...asg,
            taken: true,
            status: 'Graded',
            score: isDistinction ? '98.5 / 100' : '88.0 / 100',
            feedback: {
              overall: gradeData.feedback,
              rubric: [
                { category: 'JIS Code Compliance & Safety', score: isDistinction ? '30 / 30' : '26 / 30' },
                { category: 'Sensor & Mechanical Accuracy', score: isDistinction ? '25 / 25' : '22 / 25' },
                { category: 'Documentation & Schematics', score: isDistinction ? '25 / 25' : '21 / 25' },
                { category: 'Tool Handling & Cleanliness', score: isDistinction ? '18.5 / 20' : '19 / 20' },
              ],
              reviewerNotes: 'Verified and digitally sealed by Master Kenji Takahashi.',
            }
          };
        }
        return asg;
      });
      assignmentService.saveAssignments(updatedAssignments);
    }
  }
};
